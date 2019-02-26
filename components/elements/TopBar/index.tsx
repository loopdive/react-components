import React from "react";
import styled from "styled-components";

import Logo from "../Logo";
import NavigationBar from "../NavigationBar";
import { Margins } from "../../layouts/Margins";

export default () => {
  return (
    <Margins>
      <TopBar>
        <Logo />
        <NavigationBar items={items} />
      </TopBar>
    </Margins>
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
