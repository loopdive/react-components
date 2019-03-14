import { Fragment, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { WordInput, TopBar, ContentArea } from "./components";
import Logo from "./Logo";
import { TopBarStyle } from "../Interfacers/theme";
import GlobalStyle from "./theme/global";

export const items = [
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
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastName] = useState("");

  return (
    <Fragment>
      <GlobalStyle />
      <TopBar style={TopBarStyle}>
        <Logo />
      </TopBar>
      <ContentArea>
        <Form>
          <WordInput
            label="Firstname"
            value={firstname}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => setFirstname(target.value)}
          />
          <WordInput
            label="Lastname"
            value={lastname}
            onChange={({ target }: ChangeEvent<HTMLInputElement>) => setLastName(target.value)}
          />
        </Form>
      </ContentArea>
    </Fragment>
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
