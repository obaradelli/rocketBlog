import { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 ${({ theme }) => css`
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
   }

   body {
     height: 100vh;

     background: ${theme.colors['--purple-bg']};
     color: ${theme.colors['--light-purple']};
     -webkit-font-smoothing: antialiased;
   }
   body,
   input,
   textarea,
   button {
     font: 400 1rem Roboto, sans-serif;
   }
 `}
`
