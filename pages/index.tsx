import { Fragment } from "react";
import styled, { css } from "styled-components";
import GlobalStyle from "../styles/base/_base";
import { Title, Logo, NavigationBar } from "../components/elements";
import { TopBar, ContentArea, Margins } from "../components/layouts";

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

export default () => (
  <Fragment>
    <GlobalStyle />
    <TopBar style={TopBarStyle} sticky>
      <Logo />
      <NavigationBar items={items} />
    </TopBar>
    <Margins>
      <ContentArea>
        <Title headline="native web apps" subtitle="..." />
      </ContentArea>
    </Margins>
  </Fragment>
);

export const Fullscreen = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  border: 1px dashed rgba(255, 255, 0, 0.2);
`;

const TopBarStyle = css`
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
