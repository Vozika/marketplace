import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PerkCard from "@/components/Perks/PerkCard";

describe("PerkCard", () => {
  beforeEach(() => {
    render(
      <PerkCard
        name="test name"
        icon="test icon"
        description="test description"
      />
    );
  });

  it("renders a heading with a name prop", () => {
    const heading = screen.getByRole("heading", { level: 3 });

    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("test name");
  });

  it("renders a description prop", () => {
    const description = screen.getByText("test description");
    expect(description).toBeInTheDocument();
  });

  it("renders an icon background circle", () => {
    const circle = screen.getByTestId("perk-card-circle");

    expect(circle).toBeInTheDocument();
    expect(circle).toHaveTextContent("test icon");
    expect(circle).toHaveClass(
      "h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900"
    );
  });
});
