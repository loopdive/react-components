import { css } from "styled-components";

const background = css`
  background-color: white;
`;

export const Header = ({ sender, subject, message }: { sender: string; subject?: string; message?: string }) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      height: 100px;
      color: white;
      padding: 1.5rem 2rem;
      margin: 1rem;
    `}
  >
    <div
      css={css`
        color: black;
        font-weight: bold;
      `}
    >
      {sender}
    </div>
    <div
      css={css`
        color: black;
        font-size: 1.4rem;
        font-weight: lighter;
        padding: 0.5rem 0;
      `}
    >
      {subject}
    </div>
    <div
      css={css`
        color: gray;
        font-size: 1.4rem;
        font-weight: lighter;
        padding: 0.5rem 0;
      `}
    >
      {message}
    </div>
  </div>
);

const Body = ({ children }: { children?: string }) => (
  <div
    css={css`
      ${background}
      color: black;
      display: flex;
      flex: 1;
      padding: 2rem;
    `}
  >
    {children}
  </div>
);

export const Email = ({ sender, subject, message }: { sender: string; subject?: string; message?: string }) => (
  <div
    css={css`
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      ${background}
    `}
  >
    <Header {...{ sender, subject }} />
    <Body>{message}</Body>
  </div>
);
