import React, { useState, ChangeEvent } from "react";
import { css } from "styled-components";
import { MdSearch } from "react-icons/md";

interface Props {
  onChange: Function;
  style: {
    box?: any;
    icon?: any;
    input?: any;
  };
}

export default ({ style, onChange }: Props) => {
  const [search, setSearch] = useState("");

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
      <input
        css={style.input}
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setSearch(event.target.value);
          onChange(event.target.value);
        }}
      />
    </div>
  );
};
