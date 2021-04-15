import { Fragment, FunctionComponent } from "react";
import dynamic from "next/dynamic";

const NoSsrComponent: FunctionComponent = ({ children }) => <Fragment>{children}</Fragment>;

const NoSsr = dynamic(() => Promise.resolve(NoSsrComponent), {
  ssr: false,
});

export default NoSsr;
