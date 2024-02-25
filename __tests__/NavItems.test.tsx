import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import NavItems from "@/components/Navbar/NavItems";
import { PRODUCT_CATEGORIES } from "@/config";

describe("NavItems", () => {
  beforeEach(() => {
    render(<NavItems />);
  });

  it("renders 2 buttons", () => {
    const buttons = screen.getAllByRole("button");

    expect(buttons).toHaveLength(2);
  });

  it("renders 2 chevron icons that are not rotated", () => {
    const chevrons = screen.getAllByTestId("chevron-icon");

    expect(chevrons).toHaveLength(2);

    chevrons.map((chevron) => {
      expect(chevron).not.toHaveClass("-rotate-180");
    });
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

  PRODUCT_CATEGORIES.map((item) => {
    it("Each opened menu has all the items", async () => {
      const button = screen.getByText(item.label);

      await userEvent.click(button);

      item.featured.map((item) => {
        const link = screen.getByText(item.name);

        expect(link).toBeInTheDocument();
      });
    });
  });

  PRODUCT_CATEGORIES.map((item) => {
    it("has 3 links, images and texts after clicking each button", async () => {
      const button = screen.getByText(item.label);

      await userEvent.click(button);

      const links = screen.getAllByRole("link");
      expect(links).toHaveLength(3);

      const images = screen.getAllByAltText("Product category image");
      expect(images).toHaveLength(3);

      const text = screen.getAllByText("Shop now");
      expect(text).toHaveLength(3);
    });
  });

  it("renders a shadow effect div after ckicking the button", async () => {
    const button = screen.getByText("UI Kits");

    await userEvent.click(button);
    const text = screen.getByText("Editor Picks");
    expect(text).toBeVisible();
  });
});
