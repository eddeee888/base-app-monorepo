import { createTheme } from "@material-ui/core";
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textOnSecondaryColor,
  textColor,
  primaryBackgroundColor,
  subtitleTextColor,
  borderColor,
} from "./colors";
import { fontFamily } from "./fonts";

export const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: textOnPrimaryColor,
    },
    secondary: {
      main: secondaryColor,
      contrastText: textOnSecondaryColor,
    },
    text: {
      primary: textColor,
    },
  },
  typography: {
    fontFamily,
    h1: {
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "2rem",
    },
    h3: {
      fontSize: "1.8rem",
    },
    h4: {
      fontSize: "1.6rem",
    },
    h5: {
      fontSize: "1.4rem",
    },
    h6: {
      fontSize: "1.3rem",
      fontWeight: 700,
    },
    body1: {
      fontSize: "1rem",
    },
    subtitle1: {
      fontSize: "0.9rem",
      color: subtitleTextColor,
    },
    button: {
      fontFamily,
      fontSize: "1rem",
      fontWeight: "normal",
      textTransform: "none",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: primaryBackgroundColor,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: primaryBackgroundColor,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        sizeLarge: {
          height: "54px",
          fontSize: "1.1rem",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        formControl: {
          background: primaryBackgroundColor,
          paddingLeft: "3px",
          paddingRight: "3px",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        colorPrimary: {
          backgroundColor: borderColor,
        },
      },
    },
  },
});
