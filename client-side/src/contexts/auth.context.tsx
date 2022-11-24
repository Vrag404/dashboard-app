import { createContext, useEffect, useState } from 'react';

import { IAuthContextProps, IAuthContextTypes } from '../types/auth.interfaces';
import { isValidEmail } from '../utils/utils';

export const AuthContext = createContext<IAuthContextTypes>({} as IAuthContextTypes);

export const AuthProvider = ({ children }: IAuthContextProps) => {
  const [passwdConfirmation, setPasswdConfirmation] = useState('');
  const [signed, setSigned] = useState<boolean>(false);
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

  const checkLocalToken = () => {
    const hasToken = localStorage.getItem('auth-token');

    if (hasToken) {
      setSigned(true)
    } 
  }

  const provide: IAuthContextTypes = { handleUsername, handleEmail, handlePassword, 
    handlePasswdConfirmation, password, email, username, passwdConfirmation, 
    error, setError, checkLocalToken
  }

  return (
    <AuthContext.Provider value={provide}>
      {children}
    </AuthContext.Provider>
  )
}