import { ReactNode } from "react";
import { Component, ErrorInfo } from "react";
import { Error500 } from "../Error500";

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
      console.error(error);
      return <Error500 />;
    }

    return children;
  }
}
