import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Perks from "@/components/Perks/Perks";
import { perks } from "@/lib/perks";

describe("PerkCard", () => {
  beforeEach(() => {
    render(<Perks />);
  });

  it("renders 3 perk card", () => {
    const heading = screen.getAllByTestId("perk-card");
    expect(heading).toHaveLength(3);
  });

  it("renders 3 h3 headings", () => {
    const heading = screen.getAllByRole("heading", { level: 3 });
    expect(heading).toHaveLength(3);
  });

  it("renders 3 descriptions", () => {
    const heading = screen.getAllByTestId("perk-card-description");
    expect(heading).toHaveLength(3);
  });

  it("renders 3 icons", () => {
    const heading = screen.getAllByTestId("perk-icon");
    expect(heading).toHaveLength(3);
  });

  it("renders all names properly", () => {
    perks.map((perk) => {
      const text = screen.getByText(perk.name);
      expect(text).toBeInTheDocument();
    });
  });

  it("renders all descriptions properly", () => {
    perks.map((perk) => {
      const text = screen.getByText(perk.description);
      expect(text).toBeInTheDocument();
    });
  });
});
