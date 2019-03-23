import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,body {
    background-color: gray;
   
  }  
  html {
    scroll-behavior: smooth;
    
  }
  body {

    // H1 SIZE FIX FOR MOBILE DEVICES
    @media screen and (max-width: 400px) {
      h1 {
        font-size: 2rem !important;
      }
    }
    
    // FOR A BOOTSTRAP BUGFIX
    // line-height: 0;
    
    // FOR REMOVING ROUNDED CORNERS GLOBALLY 
    input, button {
      border-radius: 0px !important;
    }

  } //END BODY
  
  h1, h2, h3, h4, h5, h6 {
    //BOOTSTRAP 4 BUGFIX
    margin-bottom: 0; 
    padding-bottom: 1rem;
  }

  #app {
    // background-color: gray;
  }

  p,
  label {
    font-family: Arial;
    line-height: 1.5rem;
  } 

  
`;

export default GlobalStyle;
