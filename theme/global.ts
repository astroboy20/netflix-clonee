import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}



  body { 
    
    transition: all 1s linear;
    font-family: 'Poppins', 'sans-serif';
    /* background-color: #000; */
    /* height: 100vh; */
  }


`;
