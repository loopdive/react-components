import React, { ChangeEvent } from "react";
import { TextInput, Props } from "../TextInput";
import isAlpha from "validator/lib/isAlpha";

export const WordInput = (props: Props) => (
  <TextInput
    {...props}
    input={{
      ...props.input,
      onChange: (event: ChangeEvent<HTMLInputElement>) => {
        if (isAlpha(event.target.value, "de-DE") || event.target.value === "") {
          props.input && props.input.onChange && props.input.onChange(event);
        }
      }
    }}
  />
);

export default WordInput;
