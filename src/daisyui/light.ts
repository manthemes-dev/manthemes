import { manthemes } from "../utils";
import { defaultDaisyuiColors } from "../utils/defaultColors";

export const light = manthemes.create({
  colorScheme: "light",
  white: "#ffffff",
  black: "#1f2937",

  primaryColor: "neutral",
  primaryShade: 8,

  colors: {
    dark: [
      "#8B95A7",
      "#7F8A9F",
      "#737F96",
      "#69758C",
      "#606B80",
      "#586274",
      "#4F5869",
      "#464E5D",
      "#3D4451",
      "#353B46",
    ],

    neutral: [
      "#8B95A7",
      "#7F8A9F",
      "#737F96",
      "#69758C",
      "#606B80",
      "#586274",
      "#4F5869",
      "#464E5D",
      "#3D4451",
      "#353B46",
    ],

    violet: [
      "#C8B1FC",
      "#AD89FB",
      "#AD89FB",
      "#9F75FA",
      "#9262F9",
      "#844DF9",
      "#7639F9",
      "#6825F8",
      "#5A12F8",
      "#5007ED",
    ],

    pink: [
      "#FF99E7",
      "#FF85E2",
      "#FF70DE",
      "#FF5CD9",
      "#FF47D4",
      "#FF33CF",
      "#FF1FCB",
      "#FF0AC6",
      "#F500BC",
      "#E000AC",
    ],

    teal: [
      "#BEEEE9",
      "#AEEAE4",
      "#9EE6DF",
      "#8DE2DA",
      "#7CDED5",
      "#6CDACF",
      "#5CD6CA",
      "#4BD2C5",
      "#3BCEBF",
      "#31C4B5",
    ],

    ...defaultDaisyuiColors,
  },
});
