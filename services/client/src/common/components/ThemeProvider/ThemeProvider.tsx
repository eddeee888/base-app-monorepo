import React from "react";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { muiTheme } from "common/shared-styles/muiTheme";

interface Props {
  children: React.ReactNode;
}

const ThemeProvider: React.FunctionComponent<Props> = ({ children }) => <MuiThemeProvider theme={muiTheme}>{children}</MuiThemeProvider>;

export default ThemeProvider;
