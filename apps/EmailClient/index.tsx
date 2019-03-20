import { Fragment, ReactNode, useState } from "react";
import { css } from "styled-components";
import { FaUser } from "react-icons/fa";
import { TopBar, SearchBox, EmailList } from "./components";
import Logo from "./Logo";
import * as theme from "./theme/themes/dark";
import Fullscreen from "@interfacers/react-components/components/layouts/Fullscreen";
import { Email } from "./components/Email";
import { EmailType } from "./components/EmailList";

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

const emails: EmailType[] = [
  {
    id: "1",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "2",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "3",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "4",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "5",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "6",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "7",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "8",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "9",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "10",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "11",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "12",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "13",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "14",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "15",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "16",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "17",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
  },
  {
    id: "18",
    sender: "Mary Jane",
    subject: "Dinner?",
    message: "Hey Tiger! Are you coming for dinner?"
  },
  {
    id: "19",
    sender: "Peter Parker",
    subject: "RE: Dinner?",
    message: "Dear Mary, I will be late again, sorry!"
  },
  {
    id: "20",
    sender: "Clark Kent",
    subject: "Next Thursday",
    message: "Hi, are you superman?"
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
            <EmailList
              emails={emails}
              onSelect={(index: number) => setSelection(index)}
            />
          </Sidebar>
          <ContentArea>
            <Email {...emails[selection]} />
          </ContentArea>
        </div>
      </div>
    </Fragment>
  );
};
