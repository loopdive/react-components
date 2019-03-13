import { createGlobalStyle } from "styled-components";
import { defaultFontSize, fontFace, fontFamily, colorWhite } from "../../../packages/@interfacers/components/styles";

const GlobalStyle = createGlobalStyle`
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
        color: ${colorWhite}
    }
`;

export default GlobalStyle;
