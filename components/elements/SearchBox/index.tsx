import React, { ChangeEvent } from "react";
import { css } from "styled-components";
import { MdSearch } from "react-icons/md";
import { TextInput } from "..";

interface Props {
  style: {
    box?: any;
    icon?: any;
    input?: any;
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
    <div css={box}>
      <MdSearch css={style.icon} />
      <TextInput {...{ css: style.input, value, onChange, placeholder }} />
    </div>
  );
};
