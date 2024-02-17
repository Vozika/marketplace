import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import NavItemCard from "@/components/Navbar/NavItemCard";

describe("NavItemCard", () => {
  beforeEach(() => {
    render(
      <NavItemCard imageSrc="/test_src" href="/test_href" name="test name" />
    );
  });

  it("renders a link", () => {
    const link = screen.getByRole("link", { name: "test name" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test_href");
  });

  it("renders an image", () => {
    const img = screen.getByAltText("Product category image");

    expect(img).toBeInTheDocument();
  });

  it("renders a shop now phrase", () => {
    const words = screen.getByText("Shop now");

    expect(words).toBeInTheDocument();
  });
});
