import React from "react";
import FormError from "./FormError";
import { render, screen } from "@testing-library/react";

describe("<FormError />", () => {
  it("should show error if string", () => {
    render(<FormError error="ERROR" />);
    expect(screen.getByText(/ERROR/)).toBeInTheDocument();
  });
  it("should show error if ReactChild", () => {
    render(<FormError error={<button>Hello</button>} />);
    expect(screen.getByRole("button", { name: "Hello" })).toBeInTheDocument();
  });
});
