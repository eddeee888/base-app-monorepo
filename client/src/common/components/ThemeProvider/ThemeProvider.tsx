import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import { muiTheme } from '@bit/eddeee888.base-react-app-utils.styles';

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;

export default ThemeProvider;
