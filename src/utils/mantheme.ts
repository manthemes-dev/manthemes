import { MantineThemeOverride } from "@mantine/core";

export default class ManTheme {
  constructor(props: MantineThemeOverride) {
    if (Object.keys(props).length === 0) throw new Error("Props must be specified");
    Object.assign(this, props);
  }

  /**
    * Override existing props or create a new one.
    * @param props - the props to override
  */
  public override(props: MantineThemeOverride) {
    if (Object.keys(props).length === 0) throw new Error("Props must be specified");
    Object.assign(this, props)
    return this;
  }

  /**
    * Get a specified color and return the shades of it.
    * @param color - the color to specified
  */
  public getColor(color: string) {
    return (this as any).colors?.[color];
  }

  /**
    * Get the colors of a theme.
  */
  public getColors() {
    return (this as MantineThemeOverride).colors;
  }
}
