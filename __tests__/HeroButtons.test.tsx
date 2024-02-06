import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroButtons from "@/components/HeroSection/HeroButtons";

describe("HeroButtons", () => {
  beforeEach(() => {
    render(<HeroButtons />);
  });

  it("renders a button with text", () => {
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Our quality promise");

    // TODO: test HTML character entity &rarr; inside the button
  });

  it("renders a link with text and href", () => {
    const link = screen.getByRole("link", { name: "Browse Trending" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/products");
  });
});
