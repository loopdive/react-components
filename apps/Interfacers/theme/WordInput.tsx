import { withTheme } from "styled-components";
import { WordInput } from "@interfacers/react/components";
import { Props, StyleProps } from "@interfacers/react/components/elements/input/WordInput";

/* const csser = css`
  color: green;
  text-transform: uppercase;

  input {
    background: red;
  }
`; */

export default withTheme((props: Props & { theme: StyleProps }) => <WordInput {...props} />);
