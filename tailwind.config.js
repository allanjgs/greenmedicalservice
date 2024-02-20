module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Hind Siliguri',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '740px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        accent: '#FF7235',
        accentHover: '#e05216',
        grey: '#F5F5F5',
        main: '#79A44A',
        second: '#198308'
      },
      backgroundImage: {
        bghero: "url('/src/assets/img/bg-hero.png')",
        sobre: "url('/src/assets/img/bg-sobre.svg')",
        bgcontact: "url('/src/assets/img/bg-contact.svg')",
        bgressocontact: "url('/src/assets/img/resso-contact.svg')"
      },
    },
  },
  plugins: [],
};
