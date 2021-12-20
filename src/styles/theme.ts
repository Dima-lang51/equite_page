import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';



declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true; // removes the `xs` breakpoint
    sm: true;
    md: true;
    lg: true;
    xl: true;
    //mobile: true; // adds the `mobile` breakpoint
    tablet: true;
    //laptop: true;
    //desktop: true;
  }
}

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#AE8DE5',
    },
    error: {
      main: red.A400,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      tablet: 950, //tablet
      md: 1150,
      lg: 1280,
      xl: 1920,
    },
  },
  
});

export default theme;
