const { colors } = require(`tailwindcss/defaultTheme`);

module.exports = {
  purge: ["./components/**/*.js", "./pages/**/*.js"],
  theme: {
    extend: {
      colors: {
        primary: colors.indigo,
        blue: {
          light: '#85d7ff',
          DEFAULT: '#009BDB',
          dark: '#009eeb',
        },
      },
      container: {
        center: true,
        padding: {
          default: "1rem",
          md: "2rem",
        },
      },
    },
  },
};
