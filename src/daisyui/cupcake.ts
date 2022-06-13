import { ManTheme } from "../utils";

const cupcake = new ManTheme().create({
  colorScheme: "light",
  white: "#faf7f5",
  black: "#291334",

  primaryColor: "dark",

  colors: {
    primary: [
      "#D2EDEE",
      "#C3E7E9",
      "#B4E2E4",
      "#A5DCDF",
      "#96D6D9",
      "#87D0D4",
      "#78CACE",
      "#69C4C9",
      "#5ABEC4",
      "#4BB8BE",
    ],

    secondary: [
      "#F6CBDB",
      "#F3B9CE",
      "#F0A8C2",
      "#ED96B6",
      "#EA85AA",
      "#E7739E",
      "#E46292",
      "#E15186",
      "#DE3F7A",
      "#DC2E6D",
    ],

    accent: [
      "#F7D9A1",
      "#F6D18E",
      "#F4CA7C",
      "#F2C269",
      "#F0BA56",
      "#EFB343",
      "#EDAB31",
      "#EBA31E",
      "#E19914",
      "#CE8C12",
    ],

    info: [
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

    success: [
      "#BCF1DD",
      "#ABEDD5",
      "#9BE9CC",
      "#8AE5C4",
      "#79E2BB",
      "#68DEB3",
      "#58DAAA",
      "#47D7A2",
      "#36D399",
      "#2CC98F",
    ],

    warning: [
      "#FDEDC3",
      "#FDE7AF",
      "#FDE19B",
      "#FDDB87",
      "#FCD573",
      "#FCCF5F",
      "#FBC94B",
      "#FBC337",
      "#FBBD23",
      "#FAB80F",
    ],

    error: [
      "#FFFFFF",
      "#FEEBEB",
      "#FED8D8",
      "#FDC4C4",
      "#FCB1B1",
      "#FB9D9D",
      "#FA8989",
      "#F97777",
      "#F86363",
      "#F75050",
    ],
  }
});

export default cupcake;
