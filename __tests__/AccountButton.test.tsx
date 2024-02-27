import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AccountButton from "@/components/AccountMenu/AccountButton";

describe("AccountButton", () => {
  beforeEach(() => {
    render(<AccountButton href="/test" text="test" />);
  });

  it("renders a link", () => {
    const link = screen.getByRole("link", { name: "test" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/test");
  });
});
