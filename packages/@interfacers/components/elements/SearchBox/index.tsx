import React, { ChangeEvent } from "react";
import { css } from "styled-components";
import { MdSearch as SearchIcon } from "react-icons/md";
import { TextInput } from "..";

import "./style.css";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Box = (props: DivProps) => <div {...props} />;

type BoxStyle = any;
type IconStyle = any;
type InputStyle = any;

interface Props {
  style: {
    box?: BoxStyle;
    icon?: IconStyle;
    input?: InputStyle;
  };
  value: string;
  placeholder?: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
}

export default ({ style, value, placeholder, onChange }: Props) => {
  const box = css`
    min-height: 4rem;
    min-width: 30rem;
    background-color: rgba(255, 255, 255, 0.05);
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    border-radius: 1rem;
    margin: 1rem;
    padding: 0.75rem;

    font-size: 80;
  `;

  return (
    <Box css={box}>
      <SearchIcon css={style.icon} />
      <TextInput {...{ css: style.input, value, onChange, placeholder }} />
    </Box>
  );
};
