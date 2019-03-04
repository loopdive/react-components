import React from "react";
import { css } from "styled-components";
import Logo from "../Logo";
import NavigationBar from "../NavigationBar";

export default () => {
  return (
    <div css={TopBar}>
      <Logo />
      <NavigationBar items={items} />
    </div>
  );
};

const TopBar = css`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const items = [
  {
    label: "about",
    route: "/about"
  },
  {
    label: "work",
    route: "/work"
  },
  {
    label: "contact",
    route: "/contact"
  }
];
