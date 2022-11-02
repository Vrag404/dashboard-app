import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import * as Styles from './Styles';

const Signup = () => {
  const [passwdConfirmation, setPasswdConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  const handlePasswdConfirmation = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswdConfirmation(e.currentTarget.value);
  }

  const handleSignup = () => {
    if (!email || !password || !passwdConfirmation) {
      setError("Fill in all fields.");
      return;
    } else if (password !== passwdConfirmation) {
      setError("Passwords don't match.");
      return;
    }
  }

  return (
    <Styles.Container>

      <Styles.Content>

        <Input
          type='email'
          placeholder="Enter your email address"
          value={email}
          onChange={handleEmail}
        />

        <Input
          type='password'
          placeholder="Enter your password"
          value={password}
          onChange={handlePassword}
        />

        <Input
          type='password'
          placeholder="Confirm your password"
          value={passwdConfirmation}
          onChange={handlePasswdConfirmation}
        />

        <Styles.labelError>
          {error}
        </Styles.labelError>

        <Button text='Register' onClick={handleSignup} />

        <Styles.LabelSignin>
          Already have an account?

          <Styles.Strong>
            <Link to="/">&nbsp;Join</Link>
          </Styles.Strong>

        </Styles.LabelSignin>

      </Styles.Content>

    </Styles.Container>
  )
}

export default Signup