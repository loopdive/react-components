import { Fragment, useState, ChangeEvent } from "react";
import styled from "styled-components";
import { WordInput as GenericWordInput, TopBar, ContentArea } from "./components";
import Logo from "./Logo";
import { topbar } from "../Interfacers/theme";
import GlobalStyle from "./theme/global";
import { app } from "./theme";

// import { withDefaultProps } from "@interfacers/react/components/imports";
// export default withDefaultProps(WordInput, input2);

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

const WordInput = ({ theme, label, setValue, value }: { theme: any; label: any; setValue: any; value: any }) => {
  return (
    <GenericWordInput
      label={{ ...app[theme].input.label, text: label }}
      input={{
        ...app[theme].input.input,
        value: value,
        onChange: ({ target }: ChangeEvent<HTMLInputElement>) => setValue(target.value)
      }}
    />
  );
};

export default () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [theme, setTheme] = useState("interfacers");

  return (
    <Fragment>
      <GlobalStyle />
      <TopBar style={topbar}>
        <Logo />
        <select onChange={(event: any) => setTheme(event.target.value)}>
          <option>interfacers</option>
          <option>brightAdvertisingSolutions</option>
        </select>
      </TopBar>
      <ContentArea>
        <Form>
          <WordInput theme={theme} label="Firstname" setValue={setFirstname} value={firstname} />
          <WordInput theme={theme} label="Lastname" setValue={setLastname} value={lastname} />
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
