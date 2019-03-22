import React, { ChangeEvent } from "react";

export type BoxProps = { children?: any };

export type BoxComponent = any; // can be any component with BoxProps

export type InputProps = {
  label?: string;
  value: string;
  placeholder?: string;
  onChange?: ((event: ChangeEvent<HTMLInputElement>) => void) | undefined;
};

export type InputComponent = any; // any component with InputProps

interface Props {
  Box: BoxComponent;
  Input: InputComponent;
}

export default ({ Box, Input }: Props) => {
  return (
    <Box>
      <Input />
    </Box>
  );
};
