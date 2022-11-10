import { createContext, useState } from 'react';

import { IAuthContextProps, IAuthContextTypes } from '../types/auth.interfaces';
import { isValidEmail } from '../utils/emailValidate';

export const AuthContext = createContext<IAuthContextTypes>({} as IAuthContextTypes);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const [passwdConfirmation, setPasswdConfirmation] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleUsername = (event: React.FormEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
  }

  const handleEmail = (event: React.FormEvent<HTMLInputElement>) => {
    if (!isValidEmail(event.currentTarget.value)) {
      setError('Email is invalid')
    } else {
      setError('')
    }

    setEmail(event.currentTarget.value);
  }

  const handlePassword = (event: React.FormEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handlePasswdConfirmation = (event: React.FormEvent<HTMLInputElement>) => {
    setPasswdConfirmation(event.currentTarget.value);
  }

  return (
    <AuthContext.Provider value=
      {
        {
          handleUsername, handleEmail, handlePassword, handlePasswdConfirmation,
          password, email, username, passwdConfirmation, error, setError
        }
      }
    >
      {children}
    </AuthContext.Provider>
  )
}