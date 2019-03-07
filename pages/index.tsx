import { Fragment, useState } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/base/_base";
import { Title, Logo /* NavigationBar */ } from "../components/elements";
import { TopBar, ContentArea, Margins } from "../components/layouts";
// import SearchBox from "../components/elements/SearchBox";
import Dropdown from "../components/elements/Dropdown";
import EmailInput from "../components/elements/input/EmailInput";
import input from "../styles/themes/interfacers/input";

/* const items = [
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
 */

export default () => {
  return (
    <ThemeProvider theme={{ input }}>
      <Fragment>
        <GlobalStyle />
        <TopBar style={TopBarStyle} sticky>
          <Logo />
          <EmailInput />

          {/* <SearchBox
          value={search}
          style={{
            icon: css`
              color: rgba(255, 255, 255, 0.2);
              font-size: 4rem;
            `,
            input: css`
              background-color: transparent;
              border: none;
              outline: none;
              color: white;
            `
          }}
          onChange={(value: any) => console.log(value)}
        /> */}
          <Dropdown style={{ button: css`` }} />
        </TopBar>
        <Margins>
          <ContentArea>
            <Title headline="native web apps" subtitle="..." />
          </ContentArea>
        </Margins>
      </Fragment>
    </ThemeProvider>
  );
};

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
  background-color: #0a0a0a;
`;
