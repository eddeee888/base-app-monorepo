import React, { ErrorInfo } from "react";
import PageError500 from "common/shared-page-messages/PageError500";
import generateUrlClientSeoStaticImage from "routes/clientSeoStaticImage/generateUrlClientSeoStaticImage";
import Anchor from "common/shared-ui/Anchor";
import Text from "common/shared-ui/Text";
import generateUrlHome from "routes/home/generateUrlHome";

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends React.Component<Record<string, unknown>, State> {
  constructor(props: Record<string, unknown>) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      error,
      errorInfo,
    });
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      return (
        <PageError500
          imageSrc={generateUrlClientSeoStaticImage({ path: { imageName: "500.png" } })}
          link={
            <Text align="center">
              <Anchor href={generateUrlHome()}>Click here to go back to the homepage</Anchor>
            </Text>
          }
        />
      );
    }

    return children;
  }
}

export default ErrorBoundary;
