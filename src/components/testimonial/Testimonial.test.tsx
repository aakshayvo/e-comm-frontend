import { render, screen } from "@testing-library/react";
import Testimonial from "./Testimonial";
import {
  section_heading,
  testimonial_section,
  discount_section,
} from "./data/data";

// Mock Next.js Image Component
jest.mock("next/image", () => {
  const MockNextImage = (props: any) => {
    const { src, alt, ...rest } = props;
    return <img src={src} alt={alt} {...rest} />;
  };
  MockNextImage.displayName = "NextImageMock"; // Set display name
  return MockNextImage;
});

describe("Testimonial Component", () => {
  it("renders the Testimonial Section with correct heading", () => {
    render(<Testimonial />);
    const heading = screen.getByText(section_heading);
    expect(heading).toBeInTheDocument();
  });
  it("renders the user information in the left section", () => {
    render(<Testimonial />);
    const userIcon = screen.getByAltText(testimonial_section.user_alt);
    expect(userIcon).toBeInTheDocument();
    expect(userIcon).toHaveAttribute("src", testimonial_section.user_icon);

    // Check user name
    const userName = screen.getByText(testimonial_section.user_name);
    expect(userName).toBeInTheDocument();
    // Check user profession
    const userPro = screen.getByText(testimonial_section.user_pro);
    expect(userPro).toBeInTheDocument();
    const userFavIcon = screen.getByAltText(testimonial_section.favIcon_alt);
    expect(userFavIcon).toBeInTheDocument();
    expect(userFavIcon).toHaveAttribute(
      "src",
      testimonial_section.user_favIcon
    );
  });
  it("renders the discount section in the right section", () => {
    render(<Testimonial />); // Check discount percentage
    const discountPercentage = screen.getByText(
      discount_section.discount_percentage
    );
    expect(discountPercentage).toBeInTheDocument();

    // Check collection type
    const collectionType = screen.getByText(discount_section.collection_type);
    expect(collectionType).toBeInTheDocument();
  });

  it("has appropriate structure and accessibility", () => {
    render(<Testimonial />);
    const testimonialElement = screen.getByRole("region", {
      name: "Testimonial Section",
    });
    expect(testimonialElement).toBeInTheDocument();
    const asides = testimonialElement.querySelectorAll("aside");
    expect(asides).toHaveLength(asides.length);
  });
});
