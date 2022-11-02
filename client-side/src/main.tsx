import React from 'react'
import ReactDOM from 'react-dom/client'
import RoutesController from './routes/RoutesController'

import GlobalStyle from './styles/Global'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <>
      <GlobalStyle />
      <RoutesController />
    </>
  </React.StrictMode>,
)
