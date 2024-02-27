import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AccountMenu from "@/components/AccountMenu/AccountMenu";

describe("AccountMenu", () => {
  beforeEach(() => {
    render(<AccountMenu user={false} />);
  });

  it("renders 2 links", () => {
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });
});
