import React from "react";
import { MemoryRouter } from "react-router-dom";
import Link from "./Link";
import { render, getByText, fireEvent } from "@testing-library/react";
import { Route } from "react-router";
import { assertTextLink } from "test/utils/react-testing-library/assertTextLink";

describe("<Link />", () => {
  it("should follow link correctly to the destination", () => {
    const { container } = render(
      <MemoryRouter>
        <Route exact path="/login" render={() => <div>Login page</div>} />
        <Link to="/login">Linkage</Link>
      </MemoryRouter>
    );

    expect(container.innerHTML).not.toContain("Login page");

    assertTextLink(container, { text: "Linkage", href: "/login" });

    fireEvent(
      getByText(container, "Linkage"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(container.innerHTML).toContain("Login page");
  });
});
