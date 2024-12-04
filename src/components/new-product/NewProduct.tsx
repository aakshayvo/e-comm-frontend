import { useQuery } from "@apollo/client";
import ProductCard from "../product-card/ProductCard";
import Loading from "@/app/loading";
import { NEW_PRODUCT_QUERY } from "@/quaries/quaries";

const NewProduct = () => {
  const { data, loading, error } = useQuery(NEW_PRODUCT_QUERY);

  if (error) return <h2>Error fetching data</h2>;

  return (
    <section className="container pt-16">
      <h2 className="font-medium text-2xl pb-4">New Products</h2>
      {loading && (
        <section className=" flex flex-wrap justify-center lg:justify-between items-center gap-10">
          {[...Array(5)].map((_, index) => (
            <Loading key={index} />
          ))}
        </section>
      )}
      <section className="flex flex-wrap justify-center lg:justify-between items-center gap-10 ">
        {data?.allProduct?.slice(0, 6).map((product: any) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </section>
    </section>
  );
};

export default NewProduct;
