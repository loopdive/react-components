import React, { ReactNode } from "react";
import { css } from "styled-components";
import { useScrollDirection } from "../../imports";

export default ({ style, children, sticky }: { style?: any; children?: ReactNode; sticky?: boolean }) => {
  const scrollUp = sticky ? useScrollDirection() : false;

  style = css`
    ${style}
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

  return <div css={style}>{children}</div>;
};
