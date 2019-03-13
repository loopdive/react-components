import { Fragment } from "react";
import styled, { css, ThemeProvider } from "styled-components";
import { SearchBox, EmailInput, WordInput, TopBar, ContentArea } from "../../packages/@interfacers/components";
import Logo from "./Logo";
import { TopBarStyle } from "../Interfacers/theme";
import GlobalStyle from "./theme/global";
import interfacers from "./theme";

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
    <ThemeProvider theme={interfacers}>
      <Fragment>
        <GlobalStyle />
        <TopBar style={TopBarStyle}>
          <Logo />
        </TopBar>
        <ContentArea>
          <Form>
            <EmailInput />
            <WordInput label="Firstname" />
            <WordInput label="Lastname" />
            <SearchBox
              style={{
                box: css`
                  background: green;
                `
              }}
              value=""
            />
          </Form>
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

const Form = styled.div`
  max-width: 500px;
`;
