import { ISignin, ISignup } from "../types/auth.interfaces"

import api from "./api.service";

const API_URL: string = import.meta.env.VITE_API_URL as string;

export const signin = async ({ email, password }: ISignin) => {
  return await api.post(API_URL + 'signin', {
      email: email,
      password: password,
    }).then(res => {
      localStorage.setItem('auth-token', res.data.token);
    })
}

export const signup = async ({ username, email, password }: ISignup) => {
  return await api.post(API_URL + 'signup', {
      username: username,
      email: email,
      password: password,
    });
}
