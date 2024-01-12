/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         colors: {
            textPrimary: "var(--text-primary)",
            textSecondary: "var(--text-secondary)",
            textTertiary: "var(--text-tertiary)",

            bgPrimary: "var(--bg-primary)",
            bgSecondary: "var(--bg-secondary)",
            bgTertiary: "var(--bg-primary)",

            customRed: "var(--red)",
            customLightBlue: "var(--light-blue)",
         },
      },
   },
   plugins: [],
};
