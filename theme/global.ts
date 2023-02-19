import { createGlobalStyle } from "styled-components";
import { fontFamily } from "./fonts";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}
${fontFamily}



  body { 
    transition: all 1s linear;
    font-family: 'Poppins', 'sans-serif';
  }


`;
