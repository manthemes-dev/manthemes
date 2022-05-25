# ManThemes

For mantine users that wants different themes!

## Usage

To get started import the `getTheme` from the package and put the function to the themeProvider
and specify a type and a theme.

```tsx
import { getTheme } from "manthemes";

<MantineProvider theme={getTheme("daisyui", "dark")} withNormalizeCSS>
  {/* The children here */}
</MantineProvider>;
```

or

```jsx
const getTheme = require("manthemes");

<MantineProvider theme={getTheme("daisyui", "dark")} withNormalizeCSS>
  {/* The children here */}
</MantineProvider>;
```

and you're done!

**Note:** This is still in progress.
