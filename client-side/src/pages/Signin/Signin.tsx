import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';

import * as Styles from './Styles';
import api from '../../services/api';

const Signin = () => {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Fill in all selected fields.');
      return;
    }

    const response = await api.post('http://localhost:3005/api/signin', {
      email: email,
      password: password,
    }).then(res => {
      localStorage.setItem('auth-token', res.data.token);
    });

    navigate('/home')

    return response;
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
