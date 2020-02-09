import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import { muiTheme } from '@bit/eddeee888.base-react-app-utils.styles';
import { extractCritical } from 'emotion-server';

export default class MyDocument extends Document<{ emotionStyles: { ids: string[]; css: string } }> {
  render(): JSX.Element {
    return (
      <html lang="en">
        <Head>
          {/* PWA primary color */}
          <meta name="theme-color" content={muiTheme.palette.primary.main} />
          <style
            data-emotion-css={this.props.emotionStyles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: this.props.emotionStyles.css }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />)
    });

  const page = await ctx.renderPage();
  const emotionStyles = extractCritical(page.html);

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    ...page,
    // Styles fragment is rendered after the app and page rendering finish.
    styles: [...React.Children.toArray(initialProps.styles), sheets.getStyleElement()],
    emotionStyles
  };
};
