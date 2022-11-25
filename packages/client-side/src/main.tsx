import React from 'react'
import ReactDOM from 'react-dom/client'
import { AuthProvider } from './contexts/auth.context'
import RoutesController from './routes/router'

import GlobalStyle from './styles/global.styled'

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
