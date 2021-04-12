import React from "react";
import PageNotFound from "./PageNotFound";
import { render, screen } from "@testing-library/react";

describe("<PageNotFound />", () => {
  it("should show Page Not Found text", () => {
    render(<PageNotFound />);

    expect(screen.getByText(/What you are looking for is not available/)).toBeInTheDocument();
  });
});
