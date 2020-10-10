import { createMuiTheme } from "@material-ui/core/styles";
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textOnSecondaryColor,
  textColor,
  primaryBackgroundColor,
  subtitleTextColor,
} from "./colors";
import { fontFamily } from "./fonts";

export const muiTheme = createMuiTheme({
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
      fontSize: "1.1rem",
      fontWeight: 700,
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
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: primaryBackgroundColor,
      },
    },
    MuiSelect: {
      root: {
        backgroundColor: primaryBackgroundColor,
      },
    },
    MuiButton: {
      sizeLarge: {
        height: "54px",
        fontSize: "1.1rem",
      },
    },
    MuiInputLabel: {
      formControl: {
        background: primaryBackgroundColor,
        paddingLeft: "3px",
        paddingRight: "3px",
      },
    },
  },
});
