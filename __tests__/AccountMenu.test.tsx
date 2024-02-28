import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AccountMenu from "@/components/AccountMenu/AccountMenu";

describe("AccountMenu with no user", () => {
  beforeEach(() => {
    render(<AccountMenu user={null} />);
  });

  it("renders 2 links", () => {
    const links = screen.getAllByRole("link");

    expect(links).toHaveLength(2);
  });

  it("renders Sign In", () => {
    const signin = screen.getByRole("link", { name: "Sign In" });

    expect(signin).toBeInTheDocument();
    expect(signin).toHaveAttribute("href", "/sign-in");
  });

  it("renders Create Account", () => {
    const signup = screen.getByRole("link", { name: "Create Account" });

    expect(signup).toBeInTheDocument();
    expect(signup).toHaveAttribute("href", "/sign-up");
  });

  it("renders 2 dividers", () => {
    const dividers = screen.getAllByTestId("divider");

    expect(dividers).toHaveLength(2);
  });
});

describe("AccountMenu with with user", () => {
  beforeEach(() => {
    render(<AccountMenu user={true} />);
  });

  it("renders Sign In", () => {
    const signin = screen.getByText("User Menu");

    expect(signin).toBeInTheDocument();
  });

  it("doesn't render Create Account", () => {
    const signup = screen.queryByRole("link", { name: "Create Account" });

    expect(signup).not.toBeInTheDocument();
  });

  it("doesn't render Sign In", () => {
    const signin = screen.queryByRole("link", { name: "Sign In" });

    expect(signin).not.toBeInTheDocument();
  });

  it("renders 1 divider", () => {
    const divider = screen.getByTestId("divider");

    expect(divider).toBeInTheDocument();
  });
});
