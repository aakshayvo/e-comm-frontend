import { GET_PRODUCT_BY_SLUG } from "@/quaries/quaries";
import { getClient } from "@/lib/apollo-client";
import ProductPage from "@/components/product-page/ProductPage";

interface Product {
  title: string;
  description: string;
  imageUrl: string;
  price: number;
  discountedPrice?: number;
  isNew: boolean;
  category: string;
  reviews: number;
}

interface PageProps {
  params: {
    slug: any;
  };
}

export default async function SingleProductPage({ params }: any) {
  const { slug } = params;
  const apolloClient = getClient();

  // Fetch product data using Apollo Client
  const { data } = await apolloClient.query({
    query: GET_PRODUCT_BY_SLUG,
    variables: { slug },
  });

  const product = data?.allProduct?.[0];

  if (!product) <h1>Product not found</h1>;

  return (
    <section className="container py-16 ">
      <ProductPage {...product} />
    </section>
  );
}
