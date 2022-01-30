import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
margin:0;
padding:0;
box-sizing: border-box;
}


  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: hsla(331, 37%, 54%, 0.034);
    background-image: radial-gradient(#ffefa0 0.5px, transparent 0.5px);
    background-size: calc(10 * 0.5px) calc(10 * 0.5px);
    margin: 0;
  }


`;

export default GlobalStyle;
