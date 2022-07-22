<p align="center">
  <img src="https://user-images.githubusercontent.com/102006493/180377302-82a734bf-0667-4e9b-9967-be86f50a5073.png" height="200" style="center" />
</p>

<h1 align="center">Manthemes</h1>
<p align="center">A package that has made mantine themes.</p>

---

## Install

with npm:

```bash
npm install manthemes
```

or with yarn:

```bash
yarn add manthemes
```

or with pnpm:

```bash
pnpm add manthemes
```

To install nightly versions of manthemes use `npm install manthemes@next`

---

## Usage

```tsx
import { MantineProvider } from "@mantine/core";
import { retro } from "manthemes/daisyui";

function App() {
  return (
    <MantineProvider theme={retro} withGlobalStyles withNormalizeCSS>
      <YourOutlet />
    </MantineProvider>
  );
}
```

---

For The Documentation pls refer to the [manthemes](https://manthemes.vercel.app) documentation.
