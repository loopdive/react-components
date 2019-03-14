import React, { ReactNode } from "react";
import { StyleProps } from "@interfacers/react/components/styles";

export type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export type Props = {
  label?: { children?: ReactNode } & StyleProps;
  input?: InputProps & StyleProps;
};

export function TextInput(props: Props) {
  const label = props && props.label;
  const input = props && props.input;
  return (
    <label {...label} css={label && label.css}>
      {label && label.children}
      <input {...props} {...input} css={input && input.css} type="text" />
    </label>
  );
}

export default TextInput;
