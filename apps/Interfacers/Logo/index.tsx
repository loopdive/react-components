import { css } from "styled-components";
import { mediumFontSize } from "@interfacers/react-components/components/styles";

export default (props: any) => (
  <div
    css={css`
      height: inherit;
      color: rgba(255, 255, 255, 1);
      font-size: ${mediumFontSize};
      font-family: "Alte Haas Grotesk", sans-serif;
      padding: 2rem;
      width: 30%;
      display: flex;
      align-items: center;
    `}
    {...props}
  >
    interfacers
  </div>
);
