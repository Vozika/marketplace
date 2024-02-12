import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import Logo from "@/components/Logo/Logo";

describe("HeroButtons", () => {
  beforeEach(() => {
    render(<Logo />);
  });

  it("renders a link", () => {
    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/");
  });

  it("renders an icon", () => {
    const icon = screen.getByTestId("logo-icon");

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("h-10 w-10");
  });

  it("renders an icon inside a link", () => {
    const link = screen.getByRole("link");
    const logoInsideLink = within(link).getByTestId("logo-icon");

    expect(logoInsideLink).toBeInTheDocument();
  });
});
