import React from "react";
import { useState } from "react";

function withHooks(WrappedComponent: any, defaultValue: any) {
  return (props: any) => {
    const [value, setValue] = useState(defaultValue);
    const [valid, setValid] = useState(false);

    const setValidHandler = (valid: any) => {
      setValid(valid);
    };

    return (
      <WrappedComponent
        {...props}
        {...{ value, valid }}
        onChange={(
          { target }: React.ChangeEvent<HTMLInputElement>,
          valid: boolean
        ) => {
          setValue(target.value);
          setValidHandler(valid);
        }}
      />
    );
  };
}

export default withHooks;
