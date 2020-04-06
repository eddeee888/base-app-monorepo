import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import { defaultBackgroundColor, textColor } from "../src/common/shared-styles/colors";
import breakpoints from "../src/common/shared-styles/breakpoints";
import { remValue } from "../src/common/shared-styles/sizes";
import { muiTheme } from "../src/common/shared-styles/muiTheme";
import { CacheProvider, Global, css } from "@emotion/core";
import { cache } from "emotion";

class MyApp extends App {
  componentDidMount(): void {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render(): JSX.Element {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <title>BRA</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <CacheProvider value={cache}>
          <Global
            styles={css`
              html {
                box-sizing: border-box;
              }
              *,
              *::before,
              *::after {
                box-sizing: inherit;
              }
              body {
                margin: 0;
                background-color: ${defaultBackgroundColor};
                color: ${textColor};
                font-size: ${remValue}px;
                line-height: 1.5em;
                ${breakpoints.up("md")} {
                  font-size: 20px;
                }
              }
            `}
          ></Global>
          <ThemeProvider theme={muiTheme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
