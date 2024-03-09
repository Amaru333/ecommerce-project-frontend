export interface IProduct {
  id: number | string;
  category: string;
  name: string;
  image: string;
  cost_price: number;
  selling_price: number;
  rating: number;
  number_of_reviews: number;
  description: string;
  stock: number;
  colors: {
    name: string;
    code: string;
    image: string;
  }[];
}

export interface IProductListProps {
  products: IProduct[];
}

export interface IProductCardProps {
  product: IProduct;
}

export interface IProductListHeaderProps {
  title: string;
}

export interface ILoginSignUpModalProps {
  isOpen: boolean;
  onClose: () => void;
}
