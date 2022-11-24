export const isValidEmail = (email: string) => {
  return /\S+@\S+\.\S+/.test(email);
}

export const retrieveToken = () => {
  const hasToken = localStorage.getItem('auth-token');

  if (!hasToken) return

  return hasToken;
}