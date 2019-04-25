import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import {
  primaryColor,
  secondaryColor,
  textOnPrimaryColor,
  textOnSecondaryColor
} from 'common/styles/color';
import { primaryFont } from 'common/styles/fonts';
import React from 'react';

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
    useNextVariants: true,
    h1: {
      fontSize: '4.25rem'
    }
  }
});

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => (
  <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
);

export default ThemeProvider;
