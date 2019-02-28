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
  height: 10rem;
  display: flex;
  align-items: baseline;
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
