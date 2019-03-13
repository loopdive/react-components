import React from "react";
// @ts-ignore
import isEmail from "validator/lib/isEmail";
import { withTheme } from "styled-components";
import withHooks from "../../../hoc/withHooks";

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

  return (
    <label css={props.theme.input.box(props.valid)}>
      {/* <IoMdMail size={24} style={{ margin: 5 }} /> */}
      e-mail
      <input css={props.theme.input.field(props.valid)} {...props} type="email" onChange={onChange} />
    </label>
  );
};

export default withHooks(withTheme(EmailInput), "");
