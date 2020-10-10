import React from "react";
import dynamic from "next/dynamic";

const NoSsrComponent: React.FunctionComponent = ({ children }) => <React.Fragment>{children}</React.Fragment>;

const NoSsr = dynamic(() => Promise.resolve(NoSsrComponent), {
  ssr: false,
});

export default NoSsr;
