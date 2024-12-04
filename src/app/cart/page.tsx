import { Metadata } from "next";
import CartPage from "./CartPage";

export const metadata: Metadata = {
  title: "Your Shopping Cart",
  description:
    "Review and manage your items in the cart. Secure checkout, easy payment options, and fast delivery with E-Comm.",
};

const Cart = () => <CartPage />;

export default Cart;
