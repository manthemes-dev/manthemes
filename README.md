<h1 class="center">Manthemes</h1>
<p class="center">A package that has made mantine themes.</p>

---

## Usage

To use a theme and to know what themes go to **Available Themes** here's an example:

```jsx
import { MantineProvider } from "@mantine/core";
import { synthwave } from "manthemes/daisyui";

function App() {
  return (
    <MantineProvider theme={synthwave} withGlobalStyles withNormalizeCSS>
      <YourOutlet />
    </MantineProvider>
  );
}
```

## Available Themes

- [Daisyui](https://daisyui.com)
  - dark
  - light
  - synthwave
  - dracula
  - bumblebee

- [Material](https://mui.com)
  - light

## Contributing

To contribute you must clone this repository and look at the `theme.format` there you must follow the instructions in order to add a new theme.
