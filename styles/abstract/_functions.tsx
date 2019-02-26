const media = (em: string, content: string) => {
  return `@media screen and (${content}: ${em})`;
};

export const respond = (breakpoint: string, content: string) => {
  switch (breakpoint) {
    case 'phone':
      return `${media('max-width', '37.5em')}{ ${content} }`;
    case 'tab-port':
      return `${media('max-width', '56.25em')}{ ${content} }`;
    case 'tab-land':
      return `${media('max-width', '75em')}{ ${content} }`;
    case 'big-device':
      return `${media('min-width', '120.1em')}{ ${content} }`;
    default:
      break;
  }
};
