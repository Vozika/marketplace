import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import HeroHeading from "@/components/HeroSection/HeroHeading";

describe("HeroHeading", () => {
  it("renders a h1 heading", () => {
    render(<HeroHeading />);

    const heading = screen.getByRole("heading", { level: 1 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "Your marketplace for high-quality digital assets"
    );
  });

  it("renders a paragraph with text", () => {
    render(<HeroHeading />);

    const text = screen.getByText(
      "Welcome to DigitalHip. Every asset on our platform is verified by our team to ensure our highest quality standards"
    );

    expect(text).toBeInTheDocument();
  });
});
