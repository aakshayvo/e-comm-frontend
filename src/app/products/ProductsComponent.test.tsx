import { render, screen, waitFor } from "@testing-library/react";

import { useQuery } from "@apollo/client";
import SingleProductPage from "./[slug]/page";

// Mock GraphQL query import
jest.mock("@apollo/client", () => ({
  ...jest.requireActual("@apollo/client"),
  useQuery: jest.fn(),
}));

// Mocked data to simulate a successful query response
const mockProductData = {
  allProduct: [
    {
      _id: "1",
      title: "Product 1",
      description: "A great product",
      imageUrl: "/image1.jpg",
      price: 100,
      discountedPrice: 80,
      isNew: true,
      category: "Category 1",
      reviews: 4,
    },
  ],
};

// Set up the mock for `useQuery` in `beforeEach` so it's done properly
beforeEach(() => {
  (useQuery as jest.Mock).mockReturnValue({
    loading: false,
    error: null,
    data: mockProductData,
  });
});

describe("SingleProductPage", () => {
  it("renders product details when query is successful", async () => {
    render(<SingleProductPage params={{ slug: "product-1" }} />);

    // Wait for the page to load and verify if the product is rendered
    await waitFor(() => {
      expect(screen.getByText("Product 1")).toBeInTheDocument();
      expect(screen.getByText("A great product")).toBeInTheDocument();
      expect(screen.getByText("Price: $100")).toBeInTheDocument();
    });
  });

  it("renders error message when product is not found", async () => {
    // Update mock to simulate no product data (empty array)
    (useQuery as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { allProduct: [] }, // Empty data to simulate "Product not found"
    });

    render(<SingleProductPage params={{ slug: "non-existing-product" }} />);

    // Check if product not found message is displayed
    expect(screen.getByText("Product not found")).toBeInTheDocument();
  });
});
