import light from "./light";

import { Tuple, DefaultMantineColor } from '@mantine/core';

type ExtendedCustomColors = 'primaryColorName' | 'secondaryColorName' | DefaultMantineColor;

declare module '@mantine/core' {
  export interface MantineThemeColorsOverride {
    colors: Record<ExtendedCustomColors, Tuple<string, 10>>;
  }
}

export { light };
