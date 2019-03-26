import { css } from "styled-components";

export const respond = (breakpoint: string, content: any) => {
  const media = (width: string, em: string) => {
    return css`@media screen and (${width}: ${em})
    {
      ${content}
    }`;
  };

  switch (breakpoint) {
    case "phone":
      return media("max-width", "37.5em");
    case "tab-port":
      return media("max-width", "56.25em");
    case "tab-land":
      return media("max-width", "75em");
    case "big-device":
      return media("min-width", "120.1em");
    default:
      break;
  }
};
