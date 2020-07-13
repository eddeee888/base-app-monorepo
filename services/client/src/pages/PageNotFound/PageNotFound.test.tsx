import React from "react";
import PageNotFound from "./PageNotFound";
import { assertTextExists } from "test/utils/react-testing-library";
import { render } from "@testing-library/react";

describe("<PageNotFound />", () => {
  it("should show Page Not Found text", () => {
    const { container } = render(<PageNotFound />);

    assertTextExists(container, /Sorry! This content is unavailable!/);
  });
});
