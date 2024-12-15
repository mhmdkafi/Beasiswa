import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    theme: {
        extend: {
            sans: ["Poppins", ...defaultTheme.fontFamily.sans],
        },
    },
    plugins: [require("flowbite/plugin")],
};
