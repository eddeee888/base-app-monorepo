import { createMuiTheme } from "@material-ui/core/styles";
import { primaryColor, secondaryColor, textOnPrimaryColor, textOnSecondaryColor, textColor, primaryBackgroundColor } from "./colors";
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
      fontSize: "1.2rem",
      fontWeight: 400,
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
  },
});
