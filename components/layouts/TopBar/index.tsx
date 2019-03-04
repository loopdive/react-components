import React, { ReactNode } from "react";
import { css } from "styled-components";

export default ({ style, children, sticky }: { style?: any; children?: ReactNode; sticky?: boolean }) => {
  if (sticky)
    style += css`
      position: fixed;
    `;
  return <div css={style}>{children}</div>;
};
