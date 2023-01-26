const BACKGROUND_COLOR = {
  default: {
    paper: 'rgba(255,255,255,1.00)',
    default: '#000000',
  },
  dim: {
    paper: 'rgba(21, 32, 43)',
    default: '#000000',
  },
  lights_out: {
    paper: 'rgba(0, 0, 0)',
    default: '#000000',
  },
}
export const themeStyles = (backgroundColor, color) =>  {
  return ({
    breakpoints: {
      values: {
        xs: 500,
        sm: 710,
        md: 1020,
        lg: 1110,
        xl: 1295,
      },
    },
    palette: {
      common: {
        black: '#1976d2',
        white: '#ffffff',
      },
      background: {
        paper: '#ffffff',
        default: '#000000',
      },
      primary: {
        main: 'rgb(29, 155, 240)',
        secondary: 'rgb(26, 140, 216)',
        third: 'rgba(29, 155, 240, 0.1)',
        light: 'rgb(142, 205, 248)',
        contrastText: '#ffffff'
      },
      neutral: {
        main: '#ffd400',
      },
      border: {
        lightGrey: 'rgb(239, 243, 244)',
      },
      orangeAccent: {
        main: '#ff7a00',
      },
      greenAccent: {
        main: 'rgb(0, 186, 124)',
        secondary: 'rgba(0, 186, 124, 0.1)',
      },
      redAccent: {
        main: 'rgb(244, 33, 46)',
        secondary: 'rgb(220, 30, 41)',
        third: 'rgba(244, 33, 46, 0.1)',
      },
      blackAccent: {
        main: 'rgb(15, 20, 25)',
        secondary: 'rgb(39, 40, 48)',
      },
      greyAccent: {
        main: 'rgb(83, 100, 113)',
      },
      text: {
        primary: '#000000'
      },
      action: {
        active: '#0f1419'
      }
    },
    typography: {
      fontFamily: "TwitterChirp, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: '4rem',
      },
      h2: {
        fontSize: '2.2rem',
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.95rem',
        color: 'rgb(83, 100, 113)'
      },
      body3: {
        fontSize: '0.8rem',
        color: 'rgb(83, 100, 113)',
        fontFamily: "TwitterChirp, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif",
      },
    },
  });
}
