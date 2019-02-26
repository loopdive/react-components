import { createGlobalStyle } from "styled-components";
// prettier-ignore
import {
  defaultFontSize, fontFace, fontFamily, colorBlack
} from '../abstract/_variables';

import { respond } from "../abstract/_functions";

const GlobalStyle = createGlobalStyle`
    ${fontFace}

    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    h1 {
        color: white;
        font-size: 4.5rem;
        padding: 2rem;
    }

    a {
        color: rgb(200, 50, 50);
        text-decoration: none;
    }

    html {
        font-size: 62.5%;

        ${respond("tab-land", "font-size: 56.25%;")}
        ${respond("tab-port", "font-size: 50%;")}
        ${respond("phone", "font-size: 43.75%;")}
        ${respond("big-device", "font-size: 75%;")}
        
    }

    body {
        box-sizing: border-box;
        background-color: rgb(30, 30, 30);
        background-image: linear-gradient(30deg, rgb(15, 15, 15), rgb(50, 50, 50));
        background-repeat: no-repeat;
        background-attachment: fixed;
        font-family: ${fontFamily};
        font-size: ${defaultFontSize}rem; 
        color: ${colorBlack}   
    }
`;

export default GlobalStyle;
