import { css } from "styled-components";

const MailRow = ({
  sender,
  subject,
  message,
  onClick
}: {
  sender: string;
  subject?: string;
  message?: string;
  onClick: () => void;
}) => (
  <div
    css={css`
      border-bottom: 1px solid rgba(0, 0, 0, 0.25);
      height: 100px;
      color: black;
      padding: 1.5rem 2rem;
      margin-left: 1rem;
    `}
    onClick={onClick}
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

export interface EmailType {
  subject: string;
  sender: string;
  message: string;
}

export const EmailList = ({ emails, onSelect }: { emails: EmailType[]; onSelect: (index: number) => void }) => (
  <div
    css={css`
      border-right: 2px solid rgba(200, 200, 200, 0.1);
      background-color: white;
      overflow: scroll;
      overscroll-behavior: contain;
    `}
  >
    {emails.map((email, index) => (
      <MailRow {...email} onClick={() => onSelect(index)} />
    ))}
  </div>
);
