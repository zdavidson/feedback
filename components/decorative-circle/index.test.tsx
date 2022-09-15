import DecorativeCircle from ".";
import { render, screen, waitFor } from "@testing-library/react";

describe("DecorativeCircle", () => {
  it("renders with children and background colors", () => {
    render(<DecorativeCircle>Inner Circle</DecorativeCircle>);

    const circle = screen.getByText(/inner circle/i);

    expect(circle).toBeVisible();

    waitFor(() =>
      expect(circle).toHaveAttribute(
        "background",
        "linear-gradient(0.55turn, #E84D70, #A337F6, #28A7ED)"
      )
    );
  });
});
