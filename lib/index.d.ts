export declare type ThemeTypes = "daisyui";
export declare type Theme = "light" | "dark";
export declare function getTheme(type: ThemeTypes, theme: Theme): {
    colorScheme: string;
    white: string;
    black: string;
    colors: {
        dark: string[];
        grape: string[];
        pink: string[];
        teal: string[];
        blue: string[];
        green: string[];
        yellow: string[];
        red: string[];
    };
} | {
    colorScheme: string;
    black: string;
    white: string;
    colors: {
        dark: string[];
        grape: string[];
        pink: string[];
        teal: string[];
        blue: string[];
        yellow: string[];
        red: string[];
    };
};
