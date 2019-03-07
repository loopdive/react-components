import React from "react";
import { TextInput } from "../TextInput";
import isAlpha from "validator/lib/isAlpha";
import withHooks from "../../../../hoc/withHooks";
import { withTheme } from "styled-components";

export const WordInput = (
  props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
    onChange: ({ target }: React.ChangeEvent<HTMLInputElement>, valid: boolean) => void;
    theme: any;
    valid?: boolean;
  }
) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isAlpha(event.target.value)) {
      props.onChange && props.onChange(event);
    }
  };
  return <TextInput {...props} onChange={onChange} />;
};

export default withHooks(withTheme(WordInput), "");
