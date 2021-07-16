import { render, screen } from "@testing-library/react";
import { Footer } from "./Footer";

describe("<Footer />", () => {
  it("renders footer correctly", () => {
    render(<Footer />);

    expect(screen.getByText("GET STARTED")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
    expect(screen.getByText("Log in")).toBeInTheDocument();
    expect(screen.getByText("LEGALS")).toBeInTheDocument();
    expect(screen.getByText("Terms and Conditions")).toBeInTheDocument();
    expect(screen.getByText("Privacy")).toBeInTheDocument();
  });
});
