import React, { useState, ChangeEvent } from "react";

interface Props {
  onChange: Function;
  style: {
    input?: any;
  };
}

export default ({ style, onChange }: Props) => {
  const [search, setSearch] = useState("");

  return (
    <input
      css={style.input}
      value={search}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
        onChange(event.target.value);
      }}
    />
  );
};
