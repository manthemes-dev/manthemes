import { DefaultMantineColor, Tuple } from "@mantine/core";

/* DaisyUI Colors */
namespace DaisyUIColors {
  export type BrandColors = "primary" | "secondary" | "accent";
  export type StateColors = "info" | "success" | "warning" | "error"
}

/* Material Colors */
namespace MaterialColors {
  export type Colors = "primary" | "secondary" | "error" | "warning" | "info" | "success"
}

/* Bootstrap Colors */
namespace BootstrapColors {
  export type Colors = "primary" | "secondary" | "success" | "danger" | "warning" | "info";
}

type ExtendedCustomColors = DaisyUIColors.BrandColors | DaisyUIColors.StateColors | MaterialColors.Colors | BootstrapColors.Colors | DefaultMantineColor;

declare module "@mantine/core" {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}
