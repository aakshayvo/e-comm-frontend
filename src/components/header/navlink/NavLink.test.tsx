import { render, screen } from "@testing-library/react";
import NavLink from "./NavLink";
import { links } from "../data/data";

describe("NavLink Component", () => {
  const mockProps = {
    isMenuOpen: false,
    pathName: "/home",
    cartLenght: 2,
  };

  it("renders navigation links", () => {
    render(<NavLink {...mockProps} />);
    links.forEach((link) => {
      const navLink = screen.getByText(link.title);
      expect(navLink).toBeInTheDocument();
      expect(navLink).toHaveAttribute("href", link.path);
    });
  });
  it("does not display the cart badge if cartLenght is 0", () => {
    render(<NavLink {...mockProps} cartLenght={0} />);

    // The cart badge should not be rendered
    const cartBadge = screen.queryByText(mockProps.cartLenght.toString());
    expect(cartBadge).not.toBeInTheDocument();
  });

  it("displays the cart badge with correct count if cartLenght > 0", () => {
    render(<NavLink {...mockProps} />);
    const cartBadge = screen.getByText(mockProps.cartLenght.toString());
    expect(cartBadge).toBeInTheDocument();
    expect(cartBadge).toHaveClass(
      "inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full mx-2"
    );
  });

  it("renders with hidden class when menu is closed", () => {
    render(<NavLink {...mockProps} isMenuOpen={false} />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("hidden");
  });

  it("renders with block class when menu is open", () => {
    render(<NavLink {...mockProps} isMenuOpen={true} />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toHaveClass("block");
  });
});
