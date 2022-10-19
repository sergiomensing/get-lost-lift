const defaultTheme = require('lift-lib/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    ...defaultTheme,

    /* override content property because we use the library as an internal package. */
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "../lib/**/*.{ts,tsx}"
    ],
}
