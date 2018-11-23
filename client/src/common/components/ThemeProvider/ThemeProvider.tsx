import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textOnSecondaryColor
} from 'src/common/styles/color';
import { primaryFont } from 'src/common/styles/fonts';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: primaryColor,
      contrastText: textOnPrimaryColor
    },
    secondary: {
      main: secondaryColor,
      contrastText: textOnSecondaryColor
    }
  },
  typography: {
    fontFamily: [primaryFont, '"Helvetica Neue"', 'Arial', 'sans-serif'].join(
      ','
    ),
    useNextVariants: true
  }
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
