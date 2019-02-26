import { respond } from "./_functions";
import styled from "styled-components";

export const flexCenterCenter = () => {
  return `display: flex; justify-content: center; align-items: center;`;
};

export const Margins = styled.div`
  width: 90%;
  margin: 0 auto;
  transition: width 0.2s;
  ${respond("tab-land", "width: 80%")}
`;

export const deviceBreakpoints = `
  ${respond("tab-land", "font-size: 56.25%;")}
  ${respond("tab-port", "font-size: 50%;")}
  ${respond("phone", "font-size: 43.75%;")}
  ${respond("big-device", "font-size: 75%;")}
`;
