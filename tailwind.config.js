/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "rgb(var(--color-primary) / <alpha-value>)",
                "primary-alt": "rgb(var(--color-primary-alt) / <alpha-value>)",
                secondary: "rgb(var(--color-secondary) / <alpha-value>)",
                natural: "rgb(var(--color-natural) / <alpha-value>)",
                subtitle: "rgb(var(--color-subtitle) / <alpha-value>)",
                warning: "rgb(var(--color-warning) / <alpha-value>)",
                danger: "rgb(var(--color-danger) / <alpha-value>)",
                background: "rgb(var(--color-background) / <alpha-value>)",
                surface: "rgb(var(--color-surface) / <alpha-value>)",
                "surface-alt": "rgb(var(--color-surface-alt) / <alpha-value>)",
                border: "rgb(var(--color-border) / <alpha-value>)",
            },
        },
    },
    plugins: [],
}
