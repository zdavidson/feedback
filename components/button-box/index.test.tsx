import ButtonBox from ".";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("ButtonBox", () => {
  it("renders button text", () => {
    render(<ButtonBox>Button Test</ButtonBox>);

    expect(screen.getByText(/button test/i)).toBeVisible();
  });

  it("has a working onClick", () => {
    render(
      <ButtonBox onClick={() => console.log("clicked")}>Button Test</ButtonBox>
    );

    const consoleSpy = jest.spyOn(console, "log");

    const button = screen.getByText(/button test/i);

    userEvent.click(button);

    waitFor(() => expect(consoleSpy).toHaveBeenCalledWith("clicked"));
  });
});
