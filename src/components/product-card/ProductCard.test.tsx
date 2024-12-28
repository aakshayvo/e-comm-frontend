import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "./ProductCard";
import { ProductCardProps } from "@/interfaces/Props";

jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ alt, src }: { alt: string; src: string }) => (
    <img alt={alt} src={src} />
  ),
}));

describe("ProductCard Component", () => {
  const mockProduct: ProductCardProps = {
    title: "Test Product",
    slug: { current: "test-product" },
    price: 100,
    discountedPrice: 80,
    isNew: true,
    category: "Test Category",
    imageUrl: "/test-image.jpg",
    reviews: 4,
  };

  it("renders the product card component", () => {
    render(<ProductCard {...mockProduct} />);

    // Check if the title is rendered
    expect(screen.getByText("Test Product")).toBeInTheDocument();

    // Check if the category is rendered
    expect(screen.getByText("Test Category")).toBeInTheDocument();

    // Check if the discounted price and original price are rendered
    expect(screen.getByText("$80")).toBeInTheDocument();
    expect(screen.getByText("$100")).toBeInTheDocument();

    // Check if the image is rendered with correct src
    const image = screen.getByAltText("Test Product");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/test-image.jpg");

    // Check if the "Add to Cart" button is present
    const button = screen.getByText("Add To Cart");
    expect(button).toBeInTheDocument();

    // Check if the button is clickable
    fireEvent.click(button);
  });

  it("has the correct class names", () => {
    render(<ProductCard {...mockProduct} />);

    // Check if the product card has the expected class names using aria-label
    const card = screen.getByLabelText("product-card");
    expect(card).toHaveClass("h-[550px]");
    expect(card).toHaveClass("border");
    expect(card).toHaveClass("max-w-sm");
  });
});
