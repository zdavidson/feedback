import AddNewSuggestion from "./add";
import { render, screen } from "@testing-library/react";

describe("AddNewSuggestion", () => {
  it("renders", () => {
    render(<AddNewSuggestion />);

    const heading = screen.getByRole("heading", {
      name: /create new feedback/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
