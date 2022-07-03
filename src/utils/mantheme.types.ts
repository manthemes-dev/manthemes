import { MantineThemeColors, MantineThemeOverride } from "@mantine/core";
import { PartialDeep } from "type-fest";

export type ThemeTypes = "daisyui" | "material" | "bootstrap";
export type Props = MantineThemeOverride;
export type Colors = PartialDeep<MantineThemeColors>;
