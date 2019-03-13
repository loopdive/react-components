import { css } from "styled-components";

export const input = {
  box: (valid: boolean) => css`
    color: rgba(255, 255, 255, 0.6);
    outline: none;
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 10px;
    font-size: 2rem;
    padding: 0.75rem 1rem;
    margin: 0.5rem;
    background-color: rgba(255, 255, 255, 0.1);
    display: flex;
    flex-direction: row;
    align-items: center;

    &:hover {
      color: rgba(255, 255, 255, 0.8);
      border: 1px solid rgba(255, 255, 255, 0.3);
      background-color: rgba(255, 255, 255, 0.15);
    }
  `,
  field: (valid: boolean) => css`
    outline: none;
    color: rgba(255, 255, 255, 1);
    font-size: 2rem;
    font-weight: bold;
    padding: 0.5rem;
    margin: 0rem 0.25rem;
    border: none;
    background: none;
  `
};

export const button = (valid: boolean) => css`
  color: rgba(255, 255, 255, 0.6);
  outline: none;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: 10px;
  font-size: 2rem;
  padding: 1rem 2rem;
  margin: 0.5rem;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: row;
  align-items: center;

  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.3);
    background-color: rgba(255, 255, 255, 0.15);
  }
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