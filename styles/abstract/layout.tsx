import { css } from "styled-components";
import { respond } from "./respond";

export const flexCenterCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const positionAbsoluteFill = `
  height: 100%; 
  width: 100%; 
  position: absolute; 
  top: 0; 
  left: 0; 
`;

export const deviceBreakpoints = `
  ${respond("tab-land", "font-size: 56.25%;")}
  ${respond("tab-port", "font-size: 50%;")}
  ${respond("phone", "font-size: 43.75%;")}
  ${respond("big-device", "font-size: 75%;")}
`;
