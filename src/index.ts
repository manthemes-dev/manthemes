import * as daisyui from "./daisyui";

export type ThemeTypes = "daisyui";
export type Theme = "light" | "dark";

export function getTheme(type: ThemeTypes, theme: Theme) {
  switch (type) {
    case "daisyui":
      return daisyui[theme];

    default:
      throw new Error("The type is invalid or an empty string.");
  }
}
