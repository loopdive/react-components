import React from "react";

interface Props {
  style: {
    button?: any;
    row?: any;
    popup?: any;
  };
}

export default ({ style }: Props) => {
  return <div css={style.button}>Dropdown</div>;
};
