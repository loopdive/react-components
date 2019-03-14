import React, { createContext, useState } from "react";
import { css } from "styled-components";

export const StoreContext = createContext(undefined);

const themes = {
  textInput: {
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
  }
};

const Store = ({ children: any }) => {
  const [state, changeState] = useState(themes);

  return <StoreContext.Provider value={state}>{children}</StoreContext.Provider>;
};

export default Store;
