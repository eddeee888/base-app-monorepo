import { ErrorInfo, Component, ReactNode } from "react";
import PageErrorGeneric from "~/common/shared-page-messages/PageErrorGeneric";
import { generateUrlClientSeoStaticImage, generateUrlHome } from "~/routes";
import Anchor from "~/common/shared-ui/Anchor";
import Text from "~/common/shared-ui/Text";

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Record<string, unknown>, State> {
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

  render(): ReactNode {
    const { children } = this.props;
    const { error } = this.state;
    if (error) {
      return (
        <PageErrorGeneric
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
