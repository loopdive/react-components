import * as interfacers from "./themes/interfacers";
import * as brightAdvertisingSolutions from "./themes/brightAdvertisingSolutions";
import { Theme } from "./type";

export const app: { [theme: string]: Theme } = {
  interfacers,
  brightAdvertisingSolutions
};
