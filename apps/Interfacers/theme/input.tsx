import { css } from "styled-components";
import "./style.css";
import { Props } from "@interfacers/react/components/elements/input/TextInput";

export const input: Props = {
  label: {
    css: css`
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
    `
  },
  input: {
    css: css`
      outline: none;
      color: rgba(255, 255, 255, 1);
      font-size: 2rem;
      font-weight: bold;
      padding: 0.5rem;
      margin: 0rem 0.25rem;
      border: none;
      background: none;
    `
  }
};

export const input2: Props = {
  label: {
    css: css`
      color: rgba(255, 255, 255, 0.75);
      outline: none;
      font-size: 2rem;
      padding: 0.75rem 1rem;
      margin: 0.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
    `
  },
  input: {
    css: css`
      outline: none;
      border-radius: 8px;
      font-size: 2rem;
      padding: 1rem;
      margin: 1rem;
      /* transition: 0.15s; */
      border: 1px solid rgba(0, 0, 0, 0.08);
      color: white;
      background: none;
      box-shadow: inset 0.1rem 0.15rem 1rem rgba(0, 0, 0, 0.12);
    `
  }
};

export const color = {
  primary: "red",
  secondary: "black",
  light: "white"
};

export const app = {
  input: input,
  searchBox: input
};

export const button = css`
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
