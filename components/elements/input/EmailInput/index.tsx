import React from "react";
// @ts-ignore
import isEmail from "validator/lib/isEmail";
import { withTheme } from "styled-components";
import { withHooks } from "../../../imports";

export const EmailInput = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>, valid: boolean) => void;
    theme: any;
    valid?: boolean;
  }
) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange && props.onChange(event, isEmail(event.target.value));
  };

  return <input css={props.theme.input(props.valid)} {...props} type="email" onChange={onChange} />;
};

export default withHooks(withTheme(EmailInput), "");
