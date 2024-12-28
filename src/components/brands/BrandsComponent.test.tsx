import { render, screen } from "@testing-library/react";
import BrandsComponent from "./BrandsComponent";
import { brand_logo } from "./data";

jest.mock("next/image", () => {
  const MockImage = (props: any) => {
    const { src, alt, ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  };
  MockImage.displayName = "NextImageMock"; // Set the display name
  return MockImage;
});

describe("Brands Component", () => {
  it("renders the Brands element", () => {
    render(<BrandsComponent />);
    const brandElement = screen.getByRole("region", { name: "Brands Section" });
    expect(brandElement).toBeInTheDocument();
  });
  it("renders brand imgaes properly", () => {
    render(<BrandsComponent />);
    brand_logo.forEach((brand) => {
      const brandLogo = screen.getByAltText(brand.brand_alt);
      expect(brandLogo).toBeInTheDocument();
    });
  });
  it("renders the correct number of brand logos", () => {
    render(<BrandsComponent />);
    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(brand_logo.length);
  });
});
