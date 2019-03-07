import { useState } from "react";

function withHooks(WrappedComponent: any, defaultValue: any) {
  return (props: any) => {
    const [value, setValue] = useState(defaultValue);
    const [valid, setValid] = useState(false);

    return (
      <WrappedComponent
        {...props}
        {...{ value, valid }}
        onChange={({ target }: React.ChangeEvent<HTMLInputElement>, valid: boolean) => {
          setValue(target.value);
          setValid(valid);
        }}
      />
    );
  };
}

export default withHooks;
