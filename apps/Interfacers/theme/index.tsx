import { css } from "styled-components";
import { input, input2 } from "./input";

export * from "./input";

export const app = {
  interfacers: {
    global: {},
    input
  },
  brightAdvertisingSolutions: { input: input2 }
};

export const topbar = {
  css: css`
    height: 10rem;
    display: flex;
    align-items: center;
    justify-content: center;
  `
};
