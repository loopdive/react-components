import { Fragment, useState, ChangeEvent } from "react";
import { WordInput as GenericWordInput, TopBar, ContentArea } from "./components";
import Logo from "./Logo";
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
      label={{
        // @ts-ignore
        ...app[theme].textInput.label,
        text: label
      }}
      input={{
        // @ts-ignore
        ...app[theme].textInput.input,
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

  // @ts-ignore
  const { topbar, global } = app[theme];
  const GlobalStyle = global.css;

  return (
    <Fragment>
      <GlobalStyle />
      <TopBar {...topbar}>
        <Logo />
        <select onChange={(event: any) => setTheme(event.target.value)}>
          <option>interfacers</option>
          <option>brightAdvertisingSolutions</option>
        </select>
      </TopBar>
      <ContentArea>
        <WordInput theme={theme} label="Firstname" setValue={setFirstname} value={firstname} />
        <WordInput theme={theme} label="Lastname" setValue={setLastname} value={lastname} />
      </ContentArea>
    </Fragment>
  );
};
