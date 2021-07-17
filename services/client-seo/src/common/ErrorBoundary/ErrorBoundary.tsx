import { ErrorInfo, Component, ReactNode } from "react";
import { PageErrorGeneric } from "@/shared/page-messages";
import { generateUrlClientSeoStaticImage, generateUrlHome } from "@/routes";
import { Anchor, Text } from "@/shared/ui";

interface State {
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Record<string, unknown>, State> {
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
