import AddComment from ".";
import { render, screen } from "@testing-library/react";

describe("AddComment", () => {
  it("renders", () => {
    render(<AddComment />);

    expect(screen.getByRole("heading", { name: /add comment/i })).toBeVisible();

    expect(screen.getByRole("textbox")).toBeVisible();

    expect(screen.getByRole("button", { name: /post comment/i })).toBeVisible();
  });
});
