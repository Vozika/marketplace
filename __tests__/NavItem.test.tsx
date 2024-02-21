import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import NavItem from "@/components/Navbar/NavItem";
import { PRODUCT_CATEGORIES } from "@/config";

describe("NavItem", () => {
  const handler = jest.fn();

  beforeEach(() => {
    render(
      <NavItem
        category={PRODUCT_CATEGORIES[0]}
        isOpen={true}
        isAnyOpen={true}
        handleOpen={handler}
      />
    );
  });

  it("renders a button", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("renders a chevron icon", () => {
    const chevron = screen.getByTestId("chevron-icon");

    expect(chevron).toBeInTheDocument();
  });

  it("renders a shadow effect div", () => {
    const shadow = screen.getByTestId("shadow-div");

    expect(shadow).toBeInTheDocument();
  });

  it("handler function is called", async () => {
    const button = screen.getByRole("button");
    await user.click(button);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
