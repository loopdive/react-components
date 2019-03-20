import { Fragment, useState, ChangeEvent } from "react";
import merge from "lodash.merge";
import { WordInput, TopBar, ContentArea } from "./components";
import Logo from "./Logo";
import { app } from "./theme";
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
  const [lastname, setLastname] = useState("");
  const [theme, setTheme] = useState("interfacers");

  // @ts-ignore
  const { topbar, global, logo, textInput } = app[theme];
  const GlobalStyle = global.css;

  return (
    <Fragment>
      <GlobalStyle />
      <TopBar {...topbar}>
        <Logo css={logo.css} />
        <select onChange={(event: any) => setTheme(event.target.value)}>
          <option>interfacers</option>
          <option>brightAdvertisingSolutions</option>
        </select>
      </TopBar>
      <ContentArea>
        <WordInput
          key="1"
          {...merge(
            {
              label: { text: "Firstname" },
              input: {
                value: firstname,
                onChange: ({ target }: ChangeEvent<HTMLInputElement>) => setFirstname(target.value)
              }
            },
            textInput
          )}
        />
        <WordInput
          key="2"
          {...merge(
            {
              label: { text: "Lastname" },
              input: {
                value: lastname,
                onChange: ({ target }: ChangeEvent<HTMLInputElement>) => setLastname(target.value)
              }
            },
            textInput
          )}
        />
      </ContentArea>
    </Fragment>
  );
};
