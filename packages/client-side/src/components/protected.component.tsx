import { Navigate, Outlet } from 'react-router-dom'

const useAuth = () => {
  const userToken = localStorage.getItem('auth-token')

  if (userToken) {
    return true
  } else {
    return false
  }
}

const ProtectedRoute = (props: any) => {
  const auth = useAuth()

  return auth ? <Outlet /> : <Navigate to='/' />
};

export default ProtectedRoute;