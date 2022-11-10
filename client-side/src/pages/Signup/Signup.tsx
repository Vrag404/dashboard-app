import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

import * as AuthService from "../../services/auth.service";
import { AuthContext } from "../../contexts/authContext";

import * as Styles from './Styles';

const Signup = () => {
  const { 
    handleUsername, handleEmail, handlePassword, handlePasswdConfirmation,
    password, username, passwdConfirmation, email, error, setError
  } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSignup = async () => {
    if (!username || !email || !password || !passwdConfirmation) {
      setError('Fill in all selected fields.'); 
    }

    if (password.length < 6) {
      setError('The password must be at least 6 characters long.')
    }

    if (username.length < 3) {
      setError('The user must be at least 3 characters long.')
    }
    
    if (password != passwdConfirmation) {
      setError("Passwords don't match")
    }

    return await AuthService.signup({ username, email, password })
      .then(
        () => {
          navigate('/')
        }
      );
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