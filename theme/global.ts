import { createGlobalStyle } from "styled-components";
import { reset } from "./reset";

export const GlobalStyles = createGlobalStyle`

${reset}



  body { 
    @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200&display=swap");
    transition: all 1s linear;
    font-family: 'Poppins', 'sans-serif';
    /* background-color: #000; */
    /* height: 100vh; */
  }


`;
