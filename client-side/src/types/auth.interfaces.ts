import { ReactNode } from "react";

export interface ISignin {
  email: string,
  password: string
}

export interface ISignup {
  username: string,
  email: string,
  password: string
}

export interface IAuthContextProps {
  children: JSX.Element | JSX.Element[] | ReactNode;
}

export interface IAuthContextTypes {
  handlePasswdConfirmation: (event: React.FormEvent<HTMLInputElement>) => void,
  handleUsername: (event: React.FormEvent<HTMLInputElement>) => void,
  handlePassword: (event: React.FormEvent<HTMLInputElement>) => void,
  handleEmail: (event: React.FormEvent<HTMLInputElement>) => void,

  setError: (newState: string) => any,

  password: string,
  email: string, 
  passwdConfirmation: string,
  username: string,
  error: string,
}