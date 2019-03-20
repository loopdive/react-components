import { Fragment, ReactNode, useState } from "react";
import { css } from "styled-components";
import { FaUser } from "react-icons/fa";
import { TopBar, SearchBox, EmailList } from "./components";
import Logo from "./Logo";
import * as theme from "./theme/themes/dark";
import Fullscreen from "@interfacers/react/components/layouts/Fullscreen";
import { Email, EmailType } from "./components/Email";

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

const emails = [
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  }
];

const backgroundColor = css`
  background-color: rgb(30, 30, 30);
`;

const Sidebar = ({ children }: { children?: ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: stretch;
      align-items: stretch;
      border-right: 2px solid rgba(200, 200, 200, 0.1);
      ${backgroundColor}
    `}
  >
    {children}
  </div>
);

const ContentArea = ({ children }: { children?: ReactNode }) => (
  <div
    css={css`
      display: flex;
      flex: 3;
      ${backgroundColor}
    `}
  >
    {children}
  </div>
);

export default () => {
  // @ts-ignore
  const { topbar, global, logo, textInput, searchBox } = theme;
  const GlobalStyle = global.css;

  const [selection, setSelection] = useState(0);

  return (
    <Fragment>
      <GlobalStyle />

      <div
        css={css`
          ${Fullscreen}
          display: flex;
          flex-direction: column;
        `}
      >
        <TopBar {...topbar}>
          <Logo />
          <SearchBox {...searchBox} />
          <FaUser
            css={css`
              margin: 2rem;
              color: rgb(200, 200, 200);
            `}
          />
        </TopBar>
        <div
          css={css`
            display: flex;
            flex: 1;
            flex-direction: row;
            justify-content: stretch;
            align-items: stretch;
            background-color: rgb(30, 30, 30);
            overflow: scroll;
          `}
        >
          <Sidebar>
            <EmailList emails={emails} onSelect={(index: number) => setSelection(index)} />
          </Sidebar>
          <ContentArea>
            <Email {...emails[selection]} />
          </ContentArea>
        </div>
      </div>
    </Fragment>
  );
};
