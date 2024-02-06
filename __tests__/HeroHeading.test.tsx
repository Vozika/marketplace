import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroHeading from "@/components/HeroSection/HeroHeading";

describe("HeroHeading", () => {
  beforeEach(() => {
    render(<HeroHeading />);
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
});
