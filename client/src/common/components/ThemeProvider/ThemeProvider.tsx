import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
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
    h1: {
      fontSize: '2.5rem'
    },
    h2: {
      fontSize: '2rem'
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
