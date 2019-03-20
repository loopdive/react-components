import React from "react";
import { MdSearch as SearchIcon } from "react-icons/md";
import { TextInput, Props as TextInputProps } from "../input/TextInput";

type DivProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface Props {
  box?: DivProps;
  icon?: any;
  textInput?: TextInputProps;
}

export default ({ box, icon, textInput }: Props) => {
  return (
    <div {...box} css={box && box.css}>
      <SearchIcon {...icon} css={icon && icon.css} />
      <TextInput {...textInput} />
    </div>
  );
};
