"use client";

import ProductCard from "@/components/product-card/ProductCard";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import Loading from "../loading";
import { PRODUCT_QUERY } from "@/quaries/quaries";
import { Product } from "@/interfaces/Props";

export default function ProductsComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const PRODUCTS_PER_PAGE = 10;

  const { data, loading, error } = useQuery(PRODUCT_QUERY, {
    variables: {
      limit: PRODUCTS_PER_PAGE,
      offset: (currentPage - 1) * PRODUCTS_PER_PAGE,
    },
    fetchPolicy: "cache-and-network",
  });

  if (error) return <h2>Error: {error.message}</h2>;

  const products: Product[] = data?.allProduct || [];

  const goToNextPage = () => setCurrentPage((prev) => prev + 1);
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <section className="container py-16 ">
      <section className="flex flex-wrap justify-center  items-center gap-10">
        {loading && [...Array(5)].map((_, index) => <Loading key={index} />)}
        {products.map((product) => (
          <ProductCard key={product._id} {...product} />
        ))}
      </section>
      <section className="flex justify-center mt-5">
        <button onClick={goToPreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="mx-3">{currentPage}</span>
        <button
          onClick={goToNextPage}
          disabled={products.length < PRODUCTS_PER_PAGE}
        >
          Next
        </button>
      </section>
    </section>
  );
}
