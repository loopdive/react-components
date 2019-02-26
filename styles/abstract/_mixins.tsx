import { respond } from './_functions';

export const flexCenterCenter = () => {
  return `display: flex; justify-content: center; align-items: center;`;
};

export const responsiveMargins = () => {
  return `
    width: 90%; 
    margin: 0 auto; 
    ${respond('tab-land', 'width: 70%')}
  `;
};

export const deviceBreakpoints = `
  ${respond('tab-land', 'font-size: 56.25%;')}
  ${respond('tab-port', 'font-size: 50%;')}
  ${respond('phone', 'font-size: 43.75%;')}
  ${respond('big-device', 'font-size: 75%;')}
`;
