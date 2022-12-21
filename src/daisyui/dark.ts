import { MantineThemeOverride } from "@mantine/core";
import { defaultDaisyuiColors } from "../utils/defaultColors";

export const dark = (theme?: MantineThemeOverride) => ({
  colorScheme: "dark",
  white: "#A6ADBB",
  black: "#2A303C",

  primaryColor: "neutral",

  colors: {
    dark: [
      "#A6ADBB", // Default fg
      "#4B566C",
      "#434D60",
      "#3B4454",
      "#333A48",
      "#2A303C",
      "#212630",
      "#191D24",
      "#111318",
      "#08090C",
    ],

    neutral: [
      "#5A6587",
      "#525C7A",
      "#49536E",
      "#414962",
      "#394056",
      "#313749",
      "#292E3D",
      "#212530",
      "#191C24",
      "#111318",
    ],

    violet: [
      "#CDB6F7",
      "#C1A3F5",
      "#B591F3",
      "#A87EF1",
      "#9C6CEF",
      "#905AED",
      "#8347EB",
      "#7735E9",
      "#6A23E7",
      "#6018DC",
    ],

    pink: [
      "#F3B9E4",
      "#F0A8DD",
      "#ED96D6",
      "#EA85CF",
      "#E774C8",
      "#E363C1",
      "#E052BA",
      "#DD40B3",
      "#DA2FAD",
      "#D025A2",
    ],

    teal: [
      "#96EDE6",
      "#85EAE2",
      "#74E7DD",
      "#63E3D9",
      "#52E0D4",
      "#40DDD0",
      "#25D0C2",
      "#25D0C2",
      "#22BFB2",
      "#1FADA2",
    ],

    ...defaultDaisyuiColors,
  },
  ...theme,
});
