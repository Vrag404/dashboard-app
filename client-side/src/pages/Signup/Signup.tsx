import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import * as Styles from './Styles';
import api from "../../services/api";

const Signup = () => {
  const [passwdConfirmation, setPasswdConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUsername = (e: React.FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  }

  const handleEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  const handlePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  }

  const handlePasswdConfirmation = (e: React.FormEvent<HTMLInputElement>) => {
    setPasswdConfirmation(e.currentTarget.value);
  }

  const handleSignup = async () => {
    if (password.length < 6) setError('The password must be at least 6 characters long.')
    if (username.length < 3) setError('The user must be at least 3 characters long.')
    if (password != passwdConfirmation) setError("Passwords don't match")

    const response = await api.post('http://localhost:3005/api/signup', {
      username: username,
      email: email,
      password: password,
    }).then(res => {
      console.log(res)
    });

    return response;
  }

  return (
    <Styles.Container>

      <Styles.Content>

        <Input
          type='text'
          placeholder="Enter your username"
          value={username}
          onChange={handleUsername}
        />

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