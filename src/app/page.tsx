"use client";
import BrandsComponent from "@/components/brands/BrandsComponent"; //becuase I have changed the name of the folder getting issue while deploying
import HeroComponent from "@/components/hero-section/HeroComponent";
import NewProduct from "@/components/new-product/NewProduct";
import Testimonial from "@/components/testimonial/Testimonial";

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
