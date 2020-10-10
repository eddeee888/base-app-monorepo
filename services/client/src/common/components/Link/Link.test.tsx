import React from "react";
import { MemoryRouter } from "react-router-dom";
import Link from "./Link";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Route } from "react-router";

describe("<Link />", () => {
  it("should follow link correctly to the destination", () => {
    render(
      <MemoryRouter>
        <Route exact path="/login" render={() => <div>Login page</div>} />
        <Link to="/login">Linkage</Link>
      </MemoryRouter>
    );

    expect(screen.queryByText("Login page")).not.toBeInTheDocument();

    userEvent.click(screen.getByText("Linkage"));

    expect(screen.getByText("Login page")).toBeInTheDocument();
  });
});
