import "@testing-library/jest-dom";
import user from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import NavItem from "@/components/Navbar/NavItem";
import { PRODUCT_CATEGORIES } from "@/config";

describe("NavItem (opened item)", () => {
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
    const button = screen.getByRole("button", { name: "UI Kits" });

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

describe("NavItem (closed item, button only)", () => {
  const handler = jest.fn();

  beforeEach(() => {
    render(
      <NavItem
        category={PRODUCT_CATEGORIES[0]}
        isOpen={false}
        isAnyOpen={false}
        handleOpen={handler}
      />
    );
  });

  it("doesn't render a shadow effect div", () => {
    const shadow = screen.queryByTestId("shadow-div");

    expect(shadow).not.toBeInTheDocument();
  });

  it("renders a button", () => {
    const button = screen.getByRole("button", { name: "UI Kits" });

    expect(button).toBeInTheDocument();
  });

  it("renders a chevron icon", () => {
    const chevron = screen.getByTestId("chevron-icon");

    expect(chevron).toBeInTheDocument();
  });

  it("doesn't render a link", () => {
    const link = screen.queryByRole("link");

    expect(link).not.toBeInTheDocument();
  });

  it("doesn't render an image", () => {
    const img = screen.queryByAltText("Product category image");

    expect(img).not.toBeInTheDocument();
  });

  it("doesn't render the shop now phrase", () => {
    const words = screen.queryByText("Shop now");

    expect(words).not.toBeInTheDocument();
  });

  it("handler function is called", async () => {
    const button = screen.getByRole("button");
    await user.click(button);
    expect(handler).toHaveBeenCalledTimes(1);
  });
});
