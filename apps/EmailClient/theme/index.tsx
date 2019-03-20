import * as dark from "./themes/dark";
import * as bright from "./themes/bright";
import { Theme } from "./type";

export const app: { [theme: string]: Theme } = {
  dark,
  bright
};
