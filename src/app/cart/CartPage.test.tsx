import { render, screen, fireEvent } from "@testing-library/react";
import CartPage from "@/app/cart/CartPage";
import { useCartStore } from "@/store/cartStore";

// Mock the Zustand store
jest.mock("../../store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

const mockUseCartStore = useCartStore as unknown as jest.Mock;

describe("CartPage", () => {
  const mockClearCart = jest.fn();
  const mockRemoveFromCart = jest.fn();

  beforeEach(() => {
    mockUseCartStore.mockReturnValue({
      cart: [
        {
          slug: { current: "item-1" },
          title: "Test Product 1",
          imageUrl: "/test-image-1.jpg",
          price: 100,
          discountedPrice: 80,
        },
        {
          slug: { current: "item-2" },
          title: "Test Product 2",
          imageUrl: "/test-image-2.jpg",
          price: 150,
        },
      ],
      clearCart: mockClearCart,
      removeFromCart: mockRemoveFromCart,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the component and displays cart items", () => {
    render(<CartPage />);

    expect(screen.getByText("Your Cart")).toBeInTheDocument();
    expect(screen.getByText("Test Product 1")).toBeInTheDocument();
    expect(screen.getByText("$80")).toBeInTheDocument();
    expect(screen.getByText("Clear Cart")).toBeInTheDocument();
  });

  it("removes an item from the cart when 'Remove' is clicked", () => {
    render(<CartPage />);
    fireEvent.click(screen.getAllByText("Remove")[0]);
    expect(mockRemoveFromCart).toHaveBeenCalledWith("item-1");
  });

  it("clears the cart when 'Clear Cart' is clicked", () => {
    render(<CartPage />);
    fireEvent.click(screen.getByText("Clear Cart"));
    expect(mockClearCart).toHaveBeenCalledTimes(1);
  });
});
