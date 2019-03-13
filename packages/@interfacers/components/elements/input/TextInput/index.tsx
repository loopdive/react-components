import React from "react";
import withHooks from "../../../hoc/withHooks";
import { withTheme } from "styled-components";

export const TextInput = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    icon?: any;
    label?: string;
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>, valid: boolean) => void;
    theme: any;
    valid?: boolean;
  }
) => (
  <label css={props.theme.input.box(props.valid)}>
    {props.icon}
    {props.label}
    <input
      css={props.theme.input.field(props.valid)}
      {...props}
      type="text"
      onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
        props.onChange && props.onChange(event, true);
      }}
    />
  </label>
);

export default withHooks(withTheme(TextInput), "");
