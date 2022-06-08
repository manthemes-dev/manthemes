<h1 align="center">Manthemes</h1>
<p align="center">A package that has made mantine themes.</p>

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

To override a theme:

```jsx
// This is just for example, override a theme whatever you want.
import { synthwave } from "manthemes/daisyui";

// Override synthwave, since it's a class you can override, getColor or getColors
const overridedSynthwave = synthwave.override({
  /* props here */
});

function App() {
  return (
    <MantineProvider theme={overridedSynthwave} withGlobalStyles withNormalizeCSS>
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
  - cupcake

----

- [Material](https://mui.com)
  - light
  - dark
  
----

- [Bootstrap](https://getbootstrap.com)
  - light
  - dark

## Contributing

To contribute you must clone this repository and look at the `theme.format.txt` file, there you must follow the instructions in order to add a new theme and contribute too.
