import { css } from "styled-components";

export const input = (valid: boolean) => css`
  outline: none;
  border-radius: 8px;
  font-size: 2rem;
  padding: 1rem;
  margin: 1rem;
  transition: 0.15s;
  border: 1px solid rgba(0, 0, 0, 0.08);
  color: black;
  background: none;
  box-shadow: inset 0.1rem 0.15rem 1rem rgba(0, 0, 0, 0.12);
`;

export const searchBox = {
  icon: css`
    color: rgba(255, 255, 255, 0.2);
    font-size: 4rem;
  `,
  input: (valid: boolean) => css`
    background-color: transparent;
    border: none;
    outline: none;
    color: white;
    font-size: 2rem;
    padding: 1rem;
    margin: 1rem;
    ${valid
      ? css`
          color: black;
          border: none;
          background-color: rgba(255, 255, 255, 0.1);
        `
      : css`
          color: black;
          border: none;
          background-color: rgba(255, 255, 255, 0.25);
        `}
  `
};
