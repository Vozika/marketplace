import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AccountMenuDivider from "@/components/AccountMenu/AccountMenuDivider";

describe("AccountMenuDivider", () => {
  beforeEach(() => {
    render(<AccountMenuDivider />);
  });

  it("renders a divider", () => {
    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
    expect(divider).toHaveClass("h-6 w-px bg-gray-200");
  });
});
