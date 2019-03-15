import { css, createGlobalStyle } from "styled-components";
import { defaultFontSize, fontFace, fontFamily, colorWhite } from "@interfacers/react/components/styles";
import { input } from "../input";

export default {
  color: {
    primary: css`
      color: white;
    `
  },
  global: {
    css: createGlobalStyle`
      ${fontFace}
      
      *,
      *::before,
      *::after {
          margin: 0;
          padding: 0;
          box-sizing: inherit;
      }
      
      a {
          color: rgb(200, 50, 50);
          text-decoration: none;
      }
  
      html {
          font-size: 62.5%;   
      }
  
      body {
          box-sizing: border-box;
          background-color: black;
          background-image: url("/static/images/amelie-satzger.jpg");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          font-family: ${fontFamily};
          font-size: ${defaultFontSize}; 
          color: ${colorWhite}
      }
    `
  },
  textInput: input,
  topbar: {
    css: css`
      height: 10rem;
      display: flex;
      align-items: center;
      justify-content: center;
    `
  }
};
