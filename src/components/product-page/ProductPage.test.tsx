import { render, screen, fireEvent } from "@testing-library/react";

import { useCartStore } from "@/store/cartStore";
import ProductPage from "./ProductPage";

// Mock the Zustand store
jest.mock("../../store/cartStore", () => ({
  useCartStore: jest.fn(),
}));

// Mock the Next.js Image component
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    const { src, alt, fill, blurDataURL, ...rest } = props;

    // Apply mock styles for 'fill' if true
    const style = fill
      ? { objectFit: "cover", width: "100%", height: "100%" }
      : {};

    return (
      <img
        src={src}
        alt={alt}
        style={style}
        data-blurdataurl={blurDataURL} // Add as a data attribute for testing
        {...rest}
      />
    );
  },
}));

describe("ProductPage Component", () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    // Reset the mock before each test
    (useCartStore as unknown as jest.Mock).mockReturnValue({
      addToCart: mockAddToCart,
    });
  });

  const mockProduct = {
    imageUrl: "/test-image.jpg",
    title: "Product 1",
    category: "Category 1",
    description: "This is a test product.",
    reviews: 4,
    discountedPrice: 100,
    slug: { current: "product-1" },
    price: 150,
    isNew: true,
  };

  it("renders the product page correctly", () => {
    render(<ProductPage {...mockProduct} />);

    // Check if the title is rendered
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();

    // Check if the category is rendered
    expect(screen.getByText(mockProduct.category)).toBeInTheDocument();

    // Check if the description is rendered
    expect(screen.getByText(mockProduct.description)).toBeInTheDocument();

    // Check if the discounted price is rendered
    expect(
      screen.getByText(`$${mockProduct.discountedPrice}`)
    ).toBeInTheDocument();

    // Check if the original price is rendered
    expect(screen.getByText(`$${mockProduct.price}`)).toBeInTheDocument();

    // Check if the image is rendered correctly
    const image = screen.getByAltText(mockProduct.title);
    expect(image).toHaveAttribute("src", mockProduct.imageUrl);
    expect(image).toHaveAttribute("data-blurdataurl", mockProduct.imageUrl);
  });

  it("renders the correct number of star reviews", () => {
    render(<ProductPage {...mockProduct} />);

    // Check if the correct number of filled stars is rendered
  });

  it("calls addToCart when the Add To Cart button is clicked", () => {
    render(<ProductPage {...mockProduct} />);

    // Find the Add To Cart button
    const addToCartButton = screen.getByText("Add To Cart");

    // Click the button
    fireEvent.click(addToCartButton);

    // Check if addToCart was called with the correct arguments
    expect(mockAddToCart).toHaveBeenCalledWith({
      title: mockProduct.title,
      imageUrl: mockProduct.imageUrl,
      slug: mockProduct.slug,
      price: mockProduct.price,
      discountedPrice: mockProduct.discountedPrice,
      category: mockProduct.category,
      reviews: mockProduct.reviews,
    });
  });

  it("renders both Add To Cart and Buy Now buttons", () => {
    render(<ProductPage {...mockProduct} />);

    // Check if the Add To Cart button is present
    const addToCartButton = screen.getByText("Add To Cart");
    expect(addToCartButton).toBeInTheDocument();

    // Check if the Buy Now button is present
    const buyNowButton = screen.getByText("Buy Now");
    expect(buyNowButton).toBeInTheDocument();
  });
});
