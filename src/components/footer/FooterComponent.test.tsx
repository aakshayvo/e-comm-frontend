import { render, screen } from "@testing-library/react";
import FooterComponent from "./FooterComponent";

describe("FooterComponent", () => {
  it("renders the footer element", () => {
    render(<FooterComponent />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
  });

  it("renders the correct className for styling", () => {
    render(<FooterComponent />);
    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass(
      "container flex md:flex-row flex-col text-center justify-between px-4 py-4 mt-auto border-t pt-2"
    );
  });

  it("displays the correct text in the first aside", () => {
    render(<FooterComponent />);
    const firstAside = screen.getByText(/Ecomm/i);
    expect(firstAside).toBeInTheDocument();
  });

  it("displays the correct text in the second aside", () => {
    render(<FooterComponent />);
    const secondAside = screen.getByText(/All Rights Reserved/i);
    expect(secondAside).toBeInTheDocument();
  });
});
