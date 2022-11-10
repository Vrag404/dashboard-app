import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/authContext'
import RoutesController from './routes/RoutesController'

import GlobalStyle from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>

      <GlobalStyle />

      <AuthProvider>
        <RoutesController />
      </AuthProvider>
      
    </>

  </React.StrictMode>,
)
