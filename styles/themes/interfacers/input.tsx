import { css } from "styled-components";

export default (valid: boolean) => css`
  outline: none;
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;

  ${valid
    ? css`
        color: green;
        border: 1px solid green;
        background-color: rgba(0, 255, 0, 0.1);
      `
    : css`
        color: red;
        border: 1px solid red;
        background-color: rgba(255, 0, 0, 0.1);
      `}
`;
