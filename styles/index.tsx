import { CSSProperties } from "react";
import { CSSProp } from "styled-components";
export * from "./abstract/respond";
export * from "./abstract/layout";
export * from "./abstract/styles";

export interface StyleProps {
  css?: CSSProp;
  className?: string;
  style?: CSSProperties;
}
