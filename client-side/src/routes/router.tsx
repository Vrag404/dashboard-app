import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from '../components/protected.component'

import Home from '../pages/home/home'
import Signin from '../pages/signin/signin'
import Signup from '../pages/signup/signup'

const Router = () => {
  return (
    <BrowserRouter>

      <Routes>

        {/* Public Routes */}

        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Private Routes */}

        <Route element={<ProtectedRoute />} >

          <Route path='/home' element={<Home />} />

        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default Router;
