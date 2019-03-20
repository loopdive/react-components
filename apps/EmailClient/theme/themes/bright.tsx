import { css, createGlobalStyle } from "styled-components";
import {
  defaultFontSize,
  fontFace,
  fontFamily
} from "@interfacers/react-components/components/styles";
import { Props } from "@interfacers/react-components/components/elements/input/TextInput";

export const color = {
  primary: css`
    color: black;
  `
};

export const global = {
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
        background-color: rgb(230, 200, 15);
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: ${fontFamily};
        font-size: ${defaultFontSize}; 
        color: white;
    }
`
};

export const textInput: Props = {
  label: {
    css: css`
      color: rgba(255, 255, 255, 0.75);
      outline: none;
      font-size: 2rem;
      padding: 0.75rem 1rem;
      margin: 0.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    `
  },
  input: {
    css: css`
      outline: none;
      border-radius: 8px;
      font-size: 2rem;
      padding: 1rem;
      margin: 1rem;
      /* transition: 0.15s; */
      border: 1px solid rgba(0, 0, 0, 0.08);
      color: white;
      background: none;
      box-shadow: inset 0.1rem 0.15rem 1rem rgba(0, 0, 0, 0.12);
    `
  }
};

export const topbar = {
  css: css`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};

export const logo = {
  css: css`
    color: black;
  `
};
