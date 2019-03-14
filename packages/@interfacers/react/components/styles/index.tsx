export * from "./abstract/_functions";
export * from "./abstract/_mixins";
export * from "./abstract/_variables";

import { CSSProperties } from "react";
import { CSSProp } from "styled-components";

export interface StyleProps {
  css?: CSSProp;
  className?: string;
  style?: CSSProperties;
}
