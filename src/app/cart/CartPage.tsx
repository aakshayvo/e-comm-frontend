"use client";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { BreadcrumbWithCustomSeparator } from "@/components/BreadcrumbWithCustom";

const CartPage = () => {
  const { cart, clearCart, removeFromCart } = useCartStore();

  return (
    <section className="container p-6 ">
      <BreadcrumbWithCustomSeparator navText={"Cart"} />
      <h2 className="text-2xl font-bold my-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cart.map((item) => (
              <li key={item.slug.current} className="flex items-center mb-4">
                <section className="w-20 h-20 mr-4">
                  <Image
                    src={item.imageUrl}
                    alt={item.title}
                    width={80}
                    height={80}
                    className="object-cover rounded-md"
                  />
                </section>

                <section className="flex-1">
                  <h4 className="font-bold">{item.title}</h4>
                  <p>${item.discountedPrice || item.price}</p>
                </section>

                <button
                  onClick={() => removeFromCart(item.slug.current)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={clearCart}
            className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-full"
          >
            Clear Cart
          </button>
        </>
      )}
    </section>
  );
};

export default CartPage;
