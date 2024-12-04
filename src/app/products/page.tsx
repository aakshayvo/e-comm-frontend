import { Metadata } from "next";
import ProductsComponent from "./ProductsComponent";

export const metadata: Metadata = {
  title: "Browse Our Wide Range of Products ",
  description:
    "Explore a variety of products across categories like electronics, clothing, accessories, and more. Find exactly what you need at E-Comm.",
};

const ProductsPage = () => <ProductsComponent />;
export default ProductsPage;
