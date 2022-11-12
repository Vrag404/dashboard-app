import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    background: linear-gradient(37deg, #ACE0EC 0%, #046EE5 100%);
    font-family: Arial, Helvetica, sans-serif
  }
`

export default GlobalStyle
