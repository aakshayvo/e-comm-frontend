import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  title: string;
  imageUrl: string;
  slug: { current: string };
  price: number;
  discountedPrice?: number;
  category: string;
  reviews: number;
};

interface CartState {
  cart: Product[];
  wishlist: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (slug: string) => void;
  clearCart: () => void;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (slug: string) => void;
}

// Zustand store with persistence
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      addToCart: (product) =>
        set((state) => ({
          cart: [...state.cart, product],
        })),
      removeFromCart: (slug) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.slug.current !== slug),
        })),
      clearCart: () => set({ cart: [] }),
      addToWishlist: (product) =>
        set((state) => ({
          wishlist: [...state.wishlist, product],
        })),
      removeFromWishlist: (slug) =>
        set((state) => ({
          wishlist: state.wishlist.filter((item) => item.slug.current !== slug),
        })),
    }),
    {
      name: "cart-storage",
    }
  )
);
