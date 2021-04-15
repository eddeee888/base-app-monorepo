import { FunctionComponent } from "react";

declare module "*.svg" {
  const Component: FunctionComponent<{ width?: string; height?: string; viewBox?: string }>;

  export default Component;
}
