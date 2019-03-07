import React from "react";
import withHooks from "../../../../hoc/withHooks";
import { withTheme } from "styled-components";

export const TextInput = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>, valid: boolean) => void;
    theme: any;
    valid?: boolean;
  }
) => (
  <input
    css={props.theme.input(props.valid)}
    {...props}
    type="text"
    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
      props.onChange && props.onChange(event, true);
    }}
  />
);

export default withHooks(withTheme(TextInput), "");
