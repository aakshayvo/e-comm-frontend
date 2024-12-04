import Link from "next/link";
import { links } from "../data/data";

interface NavLinkProps {
  isMenuOpen: boolean;
  pathName: string;
  cartLenght: number;
}

const NavLink: React.FC<NavLinkProps> = ({
  isMenuOpen,
  pathName,
  cartLenght,
}) => {
  return (
    <nav
      className={`flex flex-1 flex-col md:flex-row gap-6 absolute md:static top-14 left-0 right-0 bg-white md:bg-transparent   text-black text-center z-10 ${
        isMenuOpen ? "block" : "hidden md:flex"
      } md:p-0 p-4`}
    >
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.path}
          className={`${pathName === link.path && "text-blue-400"}`}
        >
          {link.title}
          {link.title === "Cart" && cartLenght > 0 && (
            <span className=" inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-600 rounded-full mx-2">
              {cartLenght}
            </span>
          )}
        </Link>
      ))}
    </nav>
  );
};

export default NavLink;
