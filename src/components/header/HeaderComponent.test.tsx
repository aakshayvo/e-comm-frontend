import { render, screen, fireEvent } from "@testing-library/react";
import HeaderComponent from "./HeaderComponent";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

jest.mock("../../store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

jest.mock("./navlink/NavLink", () => (props: any) => (
  <div data-testid="nav-link" data-ismenuopen={props.isMenuOpen}>
    {JSON.stringify(props)}
  </div>
));

jest.mock("./ToggleComponent", () => ({
  ModeToggle: () => <div data-testid="mode-toggle">ModeToggle</div>,
}));

describe("HeaderComponent", () => {
  const mockPathname = "/home";
  const mockCart = { cart: [{ id: 1 }, { id: 2 }] };

  beforeEach(() => {
    (usePathname as jest.Mock).mockReturnValue(mockPathname);

    (useCartStore as unknown as jest.Mock).mockReturnValue(mockCart);
  });

  it("renders the header component", () => {
    render(<HeaderComponent />);
    expect(screen.getByRole("banner")).toBeInTheDocument();
  });

  it("renders the NavLink component with correct props", () => {
    render(<HeaderComponent />);
    const navLink = screen.getByTestId("nav-link");

    const navLinkProps = JSON.parse(navLink.textContent || "{}");
    expect(navLinkProps.isMenuOpen).toBe(false);
    expect(navLinkProps.pathName).toBe(mockPathname);
    expect(navLinkProps.cartLenght).toBe(mockCart.cart.length);
  });

  it("renders the ModeToggle component", () => {
    render(<HeaderComponent />);
    const modeToggle = screen.getAllByTestId("mode-toggle");

    expect(modeToggle).toHaveLength(2);
  });

  it("toggles the menu when the hamburger button is clicked", () => {
    render(<HeaderComponent />);
    const toggleButton = screen.getByLabelText("Toggle menu");

    fireEvent.click(toggleButton);
    const navLink = screen.getByTestId("nav-link");
    expect(navLink).toHaveAttribute("data-ismenuopen", "true");

    fireEvent.click(toggleButton);
    expect(navLink).toHaveAttribute("data-ismenuopen", "false");
  });
});
