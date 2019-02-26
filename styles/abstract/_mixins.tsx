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
