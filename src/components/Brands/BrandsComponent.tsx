import Image from "next/image";
import { brand_logo } from "./data";

const BrandsComponent = () => {
  return (
    <section className="bg-[#EEF4F5]">
      <section className="container flex flex-wrap justify-between items-center p-4 mb-2">
        {brand_logo.map((item) => (
          <Image
            src={item.brand_img}
            alt={item.brand_alt}
            key={item.id}
            width={100}
            height={100}
          />
        ))}
      </section>
    </section>
  );
};

export default BrandsComponent;
