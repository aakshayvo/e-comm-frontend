"use client";
import {
  HamburgerMenuIcon,
  HeartIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navlink/NavLink";
import { usePathname } from "next/navigation";
import { useCartStore } from "@/store/cartStore";

const HeaderComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCartStore();
  console.log("cart.length ", cart.length);
  const pathName = usePathname();

  return (
    <header className="container flex justify-between items-center px-4 py-4 md:static relative border-b">
      <NavLink
        isMenuOpen={isMenuOpen}
        pathName={pathName}
        cartLenght={cart.length}
      />
      <section className="flex justify-between items-center  flex-1">
        <aside>
          <Link href="/">Logo</Link>
        </aside>
        <aside className="md:flex gap-6 cursor-pointer hidden">
          <HeartIcon />
          <PersonIcon />
        </aside>
      </section>
      <button
        className="md:hidden block"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        <HamburgerMenuIcon />
      </button>
    </header>
  );
};

export default HeaderComponent;
