import { ViewerContext } from "common/components/ViewerProvider";
import React from "react";
import { MockedProvider } from "@apollo/react-testing";
import { StaticRouter, MemoryRouter, Route } from "react-router";
import Signup from "./Signup";
import { assertTextExists, assertTextLink } from "test/utils/react-testing-library";
import { render } from "@testing-library/react";

describe("<Signup />", () => {
  const contextValue = {
    viewer: null,
    setViewerValue: jest.fn(),
  };

  it("should show signup form if viewer is not logged in", () => {
    const { container } = render(
      <MockedProvider>
        <StaticRouter context={{}}>
          <ViewerContext.Provider value={contextValue}>
            <Signup />
          </ViewerContext.Provider>
        </StaticRouter>
      </MockedProvider>
    );

    assertTextLink(container, {
      text: "Log in",
      href: "/login",
    });
  });

  it("should show signup form if viewer is not logged in and correct header", () => {
    const { container } = render(
      <MockedProvider>
        <MemoryRouter initialEntries={["/signup?redirect=/redirect-to-this-path"]}>
          <ViewerContext.Provider value={contextValue}>
            <Route exact path="/signup" component={Signup} />
          </ViewerContext.Provider>
        </MemoryRouter>
      </MockedProvider>
    );
    assertTextExists(container, /Sign upto continue/); // This is supposed to be on the next line
  });

  it("should redirect to dashboard if viewer is logged in", () => {
    const { container } = render(
      <MockedProvider>
        <ViewerContext.Provider
          value={{
            ...contextValue,
            viewer: { id: "100", firstName: "one" },
          }}
        >
          <MemoryRouter initialEntries={["/signup"]}>
            <Route exact path="/me" render={() => <div>Redirected</div>} />
            <Route path="/signup" render={() => <Signup />} />
          </MemoryRouter>
        </ViewerContext.Provider>
      </MockedProvider>
    );
    assertTextExists(container, "Redirected");
  });

  it("should redirect to where ever dictated by the Url Query", () => {
    const { container } = render(
      <MockedProvider>
        <ViewerContext.Provider
          value={{
            ...contextValue,
            viewer: { id: "100", firstName: "One" },
          }}
        >
          <MemoryRouter initialEntries={["/signup?redirect=/redirect-to-this-path"]}>
            <Route exact path="/users" render={() => <div>Not redirected here</div>} />
            <Route exact path="/redirect-to-this-path" render={() => <div>Redirected here</div>} />
            <Route path="/signup" render={() => <Signup />} />
          </MemoryRouter>
        </ViewerContext.Provider>
      </MockedProvider>
    );

    assertTextExists(container, "Redirected here");
  });
});
