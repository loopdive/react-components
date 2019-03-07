import React from "react";
import TextInput from "../TextInput";
import isAlpha from "validator/lib/isAlpha";

export default (props: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (isAlpha(event.target.value)) {
      props.onChange && props.onChange(event);
    }
  };
  return <TextInput {...props} onChange={onChange} />;
};
