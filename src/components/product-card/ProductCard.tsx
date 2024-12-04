import { useCartStore } from "@/store/cartStore";
import { HeartIcon, StarIcon, StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  title: string;
  imageUrl: string;
  slug: {
    current: string;
  };
  price: number;
  discountedPrice?: number;
  isNew: boolean;
  category: string;
  reviews: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  slug,
  price,
  discountedPrice,
  isNew,
  category,
  imageUrl,
  reviews,
}) => {
  const { addToCart } = useCartStore();

  const handleAddToCart = () => {
    addToCart({
      title,
      imageUrl,
      slug,
      price,
      discountedPrice,
      category,
      reviews,
    });
  };

  return (
    <div className="h-[550px] border max-w-sm rounded-lg p-2 flex flex-col">
      <Link href={`/products/${slug.current}`} className="flex-1">
        {/* Image */}
        <div className="relative h-64 w-full bg-gray-100">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-contain rounded-lg"
            sizes="(max-width: 640px) 100vw, 320px"
          />
        </div>
        {/* Product Details */}
        <div className="mt-5 px-1">
          <b className="text-pink-400 uppercase font-semibold">{category}</b>
          <h4 className="text-lg font-bold">{title}</h4>
          <div className="flex my-3">
            {[...Array(5)].map((_, index) => (
              <StarFilledIcon
                key={index}
                className={
                  index < reviews ? "text-yellow-500" : "text-gray-300"
                }
                height={20}
                width={20}
              />
            ))}
          </div>
          <div className="mt-2 flex items-center">
            <h4 className="text-lg font-bold">GET IT AT -</h4>
            <h3 className="text-2xl mx-3">${discountedPrice}</h3>
            <h3 className="text-2xl line-through text-gray-400 font-extralight">
              ${price}
            </h3>
          </div>
        </div>
      </Link>
      {/* Fixed Bottom Section */}
      <div className="mt-auto flex justify-between items-center p-2 ">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-full"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
        <HeartIcon className="text-gray-500 hover:text-red-500 cursor-pointer" />
      </div>
    </div>
  );
};

export default ProductCard;
