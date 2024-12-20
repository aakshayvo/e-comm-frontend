export interface NavLinkProps {
  isMenuOpen: boolean;
  pathName: string;
  cartLenght: number;
}

export interface SlideProps {
  img: string;
}

export interface ProductCardProps {
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

export interface ProductProps {
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

export interface Product {
  _id: string;
  title: string;
  description: string;
  slug: {
    current: string;
  };
  price: number;
  discountedPrice?: number;
  isNew: boolean;
  category: string;
  imageUrl: string;
  reviews: number;
}
