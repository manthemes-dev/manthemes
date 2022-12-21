import { MantineThemeOverride } from "@mantine/core";

export const night: MantineThemeOverride = {
  colorScheme: "dark",
  white: "#b3c5ef",
  black: "#0F172A",

  primaryColor: "neutral",

  colors: {
    dark: [
      "#b3c5ef", // Default fg
      "#385294",
      "#324A85",
      "#2D4276",
      "#273968",
      "#223259",
      "#1C2A4A",
      "#16213B",
      "#11192D",
      "#0B111E",
    ],

    neutral: [
      "#5C7DAD",
      "#5272A3",
      "#4B6895",
      "#445E88",
      "#3E557A",
      "#374C6D",
      "#30435F",
      "#293A51",
      "#223044",
      "#273449", // For focus
    ],

    cyan: [
      "#D8F2FE",
      "#C4ECFD",
      "#B1E5FC",
      "#9DDFFB",
      "#89D9FB",
      "#75D2FA",
      "#62CCF9",
      "#4EC5F9",
      "#3ABFF8",
      "#26B9F7",
    ],

    grape: [
      "#ECEEFE",
      "#D8DDFD",
      "#C5CCFC",
      "#B1BBFB",
      "#9EAAFA",
      "#8B99F9",
      "#7788F8",
      "#6478F7",
      "#5167F6",
      "#3D56F5",
    ],
  },
};

/*
  color: [
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
    "#",
  ],
*/
