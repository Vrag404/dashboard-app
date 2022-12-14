import { Link, useNavigate } from 'react-router-dom';

import Button from '../../components/button/button.component';
import Input from '../../components/input/input.component';

import useAuth from '../../hooks/useAuth';

import * as AuthService from '../../services/auth.service';
import * as Styles from './styles/signin.styled';

const Signin = () => {
  const { email, password, handleEmail, handlePassword, error, setError } = useAuth();

  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Fill in all selected fields.');
      return;
    }

    return await AuthService.signin({ email, password })
      .then(
        () => {
          navigate('/home')
        }
      ).catch(() => 
        setError('Invalid email or password.')
      )
  };

  return (
    <Styles.Container>

      <Styles.Content>
        <Input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmail}
        />

        <Input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />

        <Styles.labelError>{error}</Styles.labelError>

        <Button text="Join" onClick={handleLogin} />

        <Styles.LabelSignup>
          Don't have an account?

          <Styles.Strong>
            <Link to="/signup"> Register</Link>
          </Styles.Strong>

        </Styles.LabelSignup>

      </Styles.Content>
    </Styles.Container>
  );
};

export default Signin;
