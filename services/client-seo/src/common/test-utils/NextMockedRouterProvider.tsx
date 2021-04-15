import { FunctionComponent } from "react";
import { RouterContext } from "next/dist/next-server/lib/router-context";
import { NextRouter } from "next/router";

export const mockRouter: NextRouter = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push: jest.fn(),
  replace: jest.fn(),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn(),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isPreview: true,
  isReady: true,
};

export const NextMockedRouterProvider: FunctionComponent<{ value: Partial<NextRouter> }> = ({ children, value }) => {
  return <RouterContext.Provider value={{ ...mockRouter, ...value }}>{children}</RouterContext.Provider>;
};
