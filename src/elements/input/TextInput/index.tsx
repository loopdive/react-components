import React, { ReactNode } from "react";
import { StyleProps } from "../../../styles";

export type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export type Props = {
  label?: { children?: ReactNode; text?: string } & StyleProps;
  input?: InputProps & StyleProps;
};

export function TextInput(props: Props) {
  const label = props && props.label;
  const input = props && props.input;
  return (
    <label {...label} css={label && label.css}>
      {label && label.text}
      <input type="text" {...input} css={input && input.css} />
    </label>
  );
}

export default TextInput;
