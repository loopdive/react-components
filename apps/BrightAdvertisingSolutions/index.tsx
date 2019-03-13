import { Fragment } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { Title, Logo /* NavigationBar */ } from "../../packages/@interfacers/components/elements";
import { TopBar, ContentArea } from "../../packages/@interfacers/components/layouts";
import Dropdown from "../../packages/@interfacers/components/elements/Dropdown";
import EmailInput from "../../packages/@interfacers/components/elements/input/EmailInput";
import WordInput from "../../packages/@interfacers/components/elements/input/WordInput";
import GlobalStyle from "./theme/global";
import theme, { TopBarStyle } from "./theme";

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

export default () => {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <TopBar style={TopBarStyle} sticky>
          <Logo />
          <EmailInput />
          <WordInput />

          <Dropdown style={{ button: css`` }} />
        </TopBar>

        <ContentArea>
          <Title headline="native web apps" subtitle="..." />
        </ContentArea>
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
