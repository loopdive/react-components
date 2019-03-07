import { css } from "styled-components";

export default (valid: boolean) => css`
  outline: none;
  color: white;
  font-size: 3.2rem;
  border: none;
  background-color: transparent;
  ${!valid
    ? css`
        border-bottom: 1px solid red;
      `
    : css`
        border-bottom: 1px solid green;
      `}
`;
