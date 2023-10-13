/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0E4B5E",
        secondary: "#474747",
        search_bg: "#ffb700",
        button_hover: "#176279",
      },
      maxWidth: {
        default: "1110px",
        login: "450px",
      },
      spacing: {
        default: "1rem",
      },
      borderRadius: {
        default: "0.25rem",
        header_button: "2rem",
      },
      fontSize: {
        header: '1rem',
        MailTitle: '3rem',
        subtitle: '0.7rem',
        subtitle2: '0.8rem',
        subtitle3: '0.9rem',
        title: '1.5rem',
        title2: '1.3rem',
      },
      fontFamily: {
        'sans': ['Avenir Next', 'BlinkMacSystemFont', '-apple-system', "Segoe UI", 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
      },
      screens: {
        sm: "320px",
        md: "600px",
        lg: "1024px",
        xl: "1500px",
      },
    },
  },
  plugins: [],
};
