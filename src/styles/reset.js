import { createGlobalStyle } from 'styled-components'

export const ResetCss = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  outline: 0;
  padding: 0;
  
}

button{
  cursor: pointer;
  background: transparent;
  border: none;
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 500;
} 

body{
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased;
  overflow: none;
}

body, input, button, textarea{
  font-family: 'Inter', sans-serif;
  font-size: 1.6rem;
}

ul, ol{
  list-style: none;
}

a{
  text-decoration: none;
}

input, textarea{
  border: 0;
  background: transparent;
}


`