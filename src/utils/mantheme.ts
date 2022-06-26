import { MantineColor, MantineThemeOverride } from "@mantine/core";

import type { overrideProps } from "./mantheme.types";

export default class ManTheme {
  /**
   * Create a new theme
   * @param props - the props to create
   */
  public create(props: MantineThemeOverride) {
    if (Object.keys(props).length === 0)
      throw new Error("Props must be specified");

    return Object.assign(this, props);
  }

  /**
   * Override an existing theme props or create a new one
   * @param props - the props to override
   */
  public override({ props, theme }: overrideProps) {
    if (Object.keys(props).length === 0)
      throw new Error("Props must be specified");

    Object.assign(theme || this, props);
    return this;
  }

  /**
   * Get a specified color and return the shades of it
   * @param color - the color to specified
   */
  public getColor(color: MantineColor, theme?: MantineThemeOverride) {
    return (
      theme?.colors?.[color] || (this as MantineThemeOverride).colors?.[color]
    );
  }

  /**
   * Get the colors of a theme
   * @param theme - The theme to retrieve colors (This is optional)
   */
  public getColors(theme?: any) {
    return (theme || (this as MantineThemeOverride)).colors;
  }
}
