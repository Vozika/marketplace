import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import NavItems from "@/components/Navbar/NavItems";

describe("NavItem", () => {
  beforeEach(() => {
    render(<NavItems />);
  });

  it("renders buttons", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
  });

  it("renders chevron icons", () => {
    const chevrons = screen.getAllByTestId("chevron-icon");

    expect(chevrons).toHaveLength(2);
  });

  it("renders a shadow effect div after ckicking the button", async () => {
    const button = screen.getByText("UI Kits");

    await userEvent.click(button);
    const text = screen.getByText("Editor Picks");
    expect(text).toBeVisible();
  });
});
