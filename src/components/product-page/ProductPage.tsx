import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";

interface ProductProps {
  title: string; // Title of the product
  imageUrl: string;
  slug: {
    current: string;
  };
  price: number;
  discountedPrice?: number;
  isNew: boolean;
  category: string;
  reviews: number;
  description: string;
}

const ProductPage: React.FC<ProductProps> = ({
  imageUrl,
  title,
  category,
  description,
  reviews,
  discountedPrice,
  price,
}) => {
  return (
    <section className="flex flex-col lg:items-start md:items-center lg:flex-row gap-8 ">
      <div className="w-full sm:w-[400px] h-[300px]  md:h-[500px] relative">
        <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" />
      </div>

      <div className="flex-1  h-full">
        <b className="text-pink-400 uppercase font-semibold block mt-10">
          {category}
        </b>
        <h1 className="text-3xl mt-3 mb-10">{title}</h1>
        <p>{description}</p>
        <div className="flex mt-3 cursor-pointer">
          {[...Array(5)].map((_, index) => (
            <StarFilledIcon
              key={index}
              className={index < reviews ? "text-yellow-500" : "text-gray-300"}
              height={20}
              width={20}
            />
          ))}
        </div>
        <div className="mt-5 flex items-center ">
          <h4 className="text-lg font-bold">GET IT AT -</h4>
          <h3 className="text-3xl mx-3">${discountedPrice}</h3>
          <h3 className="text-3xl line-through text-gray-400 font-extralight">
            ${price}
          </h3>
        </div>
        <div className=" flex flex-wrap  items-center p-2 mt-10">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full mr-3 mt-2">
            Add To Cart
          </button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-8 border border-blue-500 hover:border-transparent rounded-full mt-2">
            Buy Now
          </button>
        </div>
      </div>
    </section>
  );
};
export default ProductPage;
