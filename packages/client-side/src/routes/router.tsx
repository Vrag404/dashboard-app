import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/navbar.component'
import ProtectedRoute from '../components/protected.component'
import Default from '../layout/default'

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

          <Route element={<Default />}>
            <Route path='/home' element={<Home />} />
          </Route>

        </Route>

      </Routes>
      
    </BrowserRouter>
  )
}

export default Router;
