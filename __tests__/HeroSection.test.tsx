import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroSection from "@/components/HeroSection/HeroSection";

describe("HeroHeading", () => {
  beforeEach(() => {
    render(<HeroSection />);
  });

  it("renders a h1 heading", () => {
    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Your marketplace for high-quality digital assets"
    );
  });

  it("renders a span with blue text", () => {
    const span = screen.getByTestId("hero-heading-span");

    expect(span).toBeInTheDocument();
    expect(span).toHaveTextContent("digital assets");
    expect(span).toHaveClass("text-blue-600");
  });

  it("renders a paragraph with large gray text", () => {
    const text = screen.getByText(
      "Welcome to DigitalHip. Every asset on our platform is verified by our team to ensure our highest quality standards"
    );

    expect(text).toBeInTheDocument();
    expect(text).toHaveClass("text-lg text-muted-foreground");
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
