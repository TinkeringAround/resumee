const theme = {
  global: {
    breakpoints: {
      xsmall: {
        value: 500
      },
      small: {
        value: 980
      },
      medium: {
        value: 1250
      },
      middle: {
        value: 1500
      },
      large: {
        value: 2000
      }
    },
    colors: {
      dark: 'rgb(95, 95, 95)',
      black: 'rgb(50,50,50)',
      blue: 'rgb(36, 32, 135)',
      red: '#f0232d',
      pink: '#e60064'
    }
  },
  text: {
    extend: {
      fontFamily: 'Muli'
    }
  },
  heading: {
    extend: {
      fontFamily: 'Montserrat'
    }
  }
}

export default theme
