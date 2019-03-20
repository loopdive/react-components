import { css, createGlobalStyle } from "styled-components";
import {
  defaultFontSize,
  fontFace,
  fontFamily,
  colorWhite
} from "@interfacers/react-components/components/styles";
import { Props } from "@interfacers/react-components/components/elements/input/TextInput";
import Fullscreen from "@interfacers/react-components/components/layouts/Fullscreen";

export const color = {
  primary: css`
    color: white;
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
          background-color: rgb(50,50,50);
          background-repeat: no-repeat;
          background-image: url("/static/images/amelie-satzger.jpg");
          background-attachment: fixed;
          background-size: cover;
          font-family: ${fontFamily};
          font-size: ${defaultFontSize}; 
          color: ${colorWhite};
          ${Fullscreen}
      }

      textarea,
      input,
      button {
        outline: none;
        appearance: none;
      }
    `
};

export const textInput: Props = {
  label: {
    css: css`
      color: rgba(255, 255, 255, 0.6);
      outline: none;
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 10px;
      font-size: 2rem;
      padding: 0.75rem 1rem;
      margin: 0.5rem;
      background-color: rgba(255, 255, 255, 0.1);
      display: flex;
      flex-direction: row;
      align-items: center;

      &:hover {
        color: rgba(255, 255, 255, 0.8);
        border: 1px solid rgba(255, 255, 255, 0.3);
        background-color: rgba(255, 255, 255, 0.15);
      }
    `
  },
  input: {
    css: css`
      outline: none;
      color: rgba(255, 255, 255, 1);
      font-size: 2rem;
      font-weight: bold;
      padding: 0.5rem;
      margin: 0rem 0.25rem;
      border: none;
      background: none;
    `
  }
};

export const topbar = {
  css: css`
    height: 7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(40, 40, 40);
    z-index: 10000;
  `
};

export const button = css`
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export const searchBox = {
  box: {
    css: css`
      width: 100%;
      min-width: 30rem;
      background-color: rgba(0, 0, 0, 0.4);
      display: flex;
      align-items: center;
      border-radius: 0.6rem;
      margin: 1rem;
      padding: 0.75rem;
    `
  },
  icon: {
    css: css`
      color: rgba(255, 255, 255, 0.2);
      font-size: 3rem;
      margin: 0 1rem;
    `
  },
  textInput: {
    input: {
      css: css`
        background-color: transparent;
        outline: none;
        color: white;
        font-size: 2rem;
        padding: 0.6rem;
        margin: 0rem;
        color: white;
        border: none;
      `
    }
  }
};

export const logo = {
  css: css`
    color: white;
    font-size: 24px;
  `
};
