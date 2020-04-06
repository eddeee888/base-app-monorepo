import React from "react";
import LogoutLogic from "./LogoutLogic";
import { render } from "@testing-library/react";
import { MemoryRouter, Route } from "react-router";
import { assertTextExists } from "test/utils/react-testing-library";

describe("<Logout />", () => {
  const logout = jest.fn().mockResolvedValueOnce(true);
  const clearViewer = jest.fn();
  it("should clear session and log user out", () => {
    const { container } = render(
      <MemoryRouter initialEntries={["/login?redirect=/redirect-to-this-path"]}>
        <Route exact path="/" render={() => <div>Redirected</div>} />
        <Route path="/login" render={() => <LogoutLogic logout={logout} clearViewer={clearViewer} />} />
      </MemoryRouter>
    );

    assertTextExists(container, "Redirected");

    // useEffect issue: https://github.com/testing-library/react-testing-library/issues/215
    // expect(clearViewer).toBeCalledTimes(1);
  });
});
