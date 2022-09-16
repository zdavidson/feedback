import { render, screen } from "@testing-library/react";

import Box from ".";

describe("Box", () => {
  it("renders children", () => {
    render(
      <Box>
        <div>Box Test</div>
      </Box>
    );

    expect(screen.getByText(/box test/i)).toBeVisible();
  });
});
