declare module "*.svg" {
  import React from "react";

  const Component: React.FunctionComponent<{ width?: string; height?: string; viewBox?: string }>;

  export default Component;
}
