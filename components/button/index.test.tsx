import Button from ".";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders button text", () => {
    render(<Button>Button Test</Button>);

    expect(screen.getByRole("button", { name: /button test/i })).toBeVisible();
  });

  it("has a working onClick", () => {
    render(<Button onClick={() => console.log("clicked")}>Button Test</Button>);

    const consoleSpy = jest.spyOn(console, "log");

    const button = screen.getByRole("button", { name: /button test/i });

    userEvent.click(button);

    waitFor(() => expect(consoleSpy).toHaveBeenCalledWith("clicked"));
  });
});
