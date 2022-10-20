<p align="center">
    <a href="https://lift.getlost.games/" rel="noopener" target="_blank">
        <img width="150" src="./docs/public/logo.svg" alt="Lift logo">
    </a>
</p>

# Lift

Design System base for Get Lost products.

## Setup

This package is not transpiled or bundled, any project that used this component library is reponsible for it's on transpiling and bundling.

### Next.js Example

To setup this project is a Next.js application follow the steps below:

1. Install the package by running `npm install @getlost/lift`
2. Install and setup tailwind using the [Next.js guide](https://tailwindcss.com/docs/guides/nextjs).
3. Modify the `tailwind.config.js` file and import/export the default theme from the `@getlost/theme`.



#### Modifying the content property

We assume your sourcecode is in the folder `src` but you can override this by modifying the `content` property.

```js
const defaultTheme = require('@getlost/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...defaultTheme,

    /* override content property */
    content: [
        ...defaultTheme.content,
        "./pages/**/*.{js,jsx,ts,tsx}",
    ],
}
```