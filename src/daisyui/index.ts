import light from "./light";
import dark from "./dark";

import dracula from "./dracula";
import synthwave from "./synthwave";
import bumblebee from "./bumblebee";

import { DefaultMantineColor, Tuple } from "@mantine/core";

type BrandColors = "primary" | "secondary" | "accent";
type StateColors = "info" | "success" | "warning" | "error";

type ExtendedCustomColors = BrandColors | StateColors | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export { light, dark, dracula, synthwave, bumblebee };
