import React, { ReactNode } from "react";

export default ({ style, children }: { style: any; children?: ReactNode }) => {
  return <div css={style}>{children}</div>;
};
