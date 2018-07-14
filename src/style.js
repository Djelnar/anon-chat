import { injectGlobal } from 'styled-components'

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body,
  html {
    font-size: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
  }

  * {
    font-size: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    position: relative;
  }
`
