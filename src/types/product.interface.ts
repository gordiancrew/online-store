export interface IProduct {
  id: string;
  tittle: string;
}
export interface IProducts {
  filter(arg0: (_item: string, idx: number) => boolean): unknown;
  length: number;
  status: string;
  totalResults: number;
  products: IProduct[];
}

export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  thumbnail: string;
  images: string[];
  category: string;
  stock: number;
}

export interface IProductSource {
  id: null | string;
  title: null | string;
}

export interface IFilterCheckbox {
  name: string;
  current: number;
  max: number;
  checked?: boolean;
}
export interface IFilterSlider {
  currentMin: number;
  currentMax: number;
  min: number;
  max: number;
}

export interface IProductFilter {
  category: IFilterCheckbox[];
  brand: IFilterCheckbox[];
  price: IFilterSlider;
  stock: IFilterSlider;
}
