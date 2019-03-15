import React, { ReactNode } from "react";
import { css as cssprop } from "styled-components";
import { useScrollDirection } from "../../imports";

export default ({ css, children, sticky }: { css?: any; children?: ReactNode; sticky?: boolean }) => {
  const scrollUp = sticky ? useScrollDirection() : false;

  css = cssprop`
    ${css}
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;

    ${scrollUp &&
      css`
        transform: translateY(-100%);
      `}
    transition: 0.3s;

    ${sticky &&
      css`
        position: fixed;
      `}

    z-index: 10000;
  `;

  return <div css={css}>{children}</div>;
};
