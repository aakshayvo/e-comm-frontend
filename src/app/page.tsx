"use client";

import HeroComponent from "@/components/hero-section/HeroComponent";
import NewProduct from "@/components/new-product/NewProduct";
import Testimonial from "@/components/testimonial/Testimonial";
import BrandsComponent from "@/components/brands/BrandsComponent";

export default function Home() {
  return (
    <>
      <HeroComponent />
      <NewProduct />
      <Testimonial />
      <BrandsComponent />
    </>
  );
}

//for testing
