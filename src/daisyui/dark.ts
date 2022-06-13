import { ManTheme } from "../utils";
import { defaultDaisyuiColors } from "../utils/defaultColors";

const theme = new ManTheme();

const dark = theme.create({
  colorScheme: "dark",
  black: "#2A303C",
  white: "#EBEBEB",

  primaryColor: "dark",

  colors: {
    dark: [
      "#6C809D",
      "#627693",
      "#5A6C87",
      "#52627A",
      "#49586E",
      "#414E62",
      "#394456",
      "#313A49",
      "#29303D",
      "#212630",
    ],

    primary: [
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

    secondary: [
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

    accent: [
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
});

export default dark;
