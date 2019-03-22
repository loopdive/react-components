import { CSSProperties } from "react";
import { CSSProp } from "styled-components";
export * from "./respond";
export * from "./layout";
export * from "./styles";

export interface StyleProps {
  css?: CSSProp;
  className?: string;
  style?: CSSProperties;
}
