"use client";
import { hero_images } from "./data/data";
import SlideComponent from "./slide/SlideComponet";
import Slider from "react-slick";

const HeroComponent = () => {
  let settings = {
    dots: true,
    infinite: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  return (
    <section className="container pt-6 lg:pt-3">
      <Slider {...settings}>
        {hero_images.map((item, id) => {
          return <SlideComponent key={id} img={item} />;
        })}
      </Slider>
    </section>
  );
};

export default HeroComponent;
