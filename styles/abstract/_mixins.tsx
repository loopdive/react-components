import { respond } from "./_functions";

export const flexCenterCenter = `
  display: flex; 
  justify-content: center;
  align-items: center;
`;

export const deviceBreakpoints = `
  ${respond("tab-land", "font-size: 56.25%;")}
  ${respond("tab-port", "font-size: 50%;")}
  ${respond("phone", "font-size: 43.75%;")}
  ${respond("big-device", "font-size: 75%;")}
`;
