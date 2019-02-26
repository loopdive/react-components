import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import NavigationBar from "../NavigationBar";

export default () => {
  return (
    <TopBar>
      <Logo />
      <NavigationBar items={items} />
    </TopBar>
  );
};

const TopBar = styled.div`
  display: flex;
  align-items: baseline;
`;

const items = [
  {
    label: "About",
    route: "/about"
  },
  {
    label: "Work",
    route: "/work"
  },
  {
    label: "Contact",
    route: "/contact"
  }
];
