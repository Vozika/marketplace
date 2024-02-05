import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroButtons from "@/components/HeroSection/HeroButtons";

describe("HeroButtons", () => {
  it("renders a button with text", () => {
    render(<HeroButtons />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Our quality promise");
  });

  it("renders a link with text and href", () => {
    render(<HeroButtons />);

    const link = screen.getByRole("link", { name: "Browse Trending" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/products");
  });
});
