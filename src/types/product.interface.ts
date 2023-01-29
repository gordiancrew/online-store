export interface interfaceProduct {
  id: string;
  tittle: string;
}
export interface interfaceProducts {
  filter(arg0: (_item: string, idx: number) => boolean): unknown;
  length: number;
  status: string;
  totalResults: number;
  products: interfaceProduct[];
}

export interface interfaceProduct {
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
  amount: null | number;
}

export interface interfaceProductSource {
  id: null | string;
  title: null | string;
}

export interface interfaceFilterCheckbox {
  name: string;
  current: number;
  max: number;
  checked?: boolean;
}
export interface interfaceFilterSlider {
  currentMin: number;
  currentMax: number;
  min: number;
  max: number;
}

export interface interfaceProductFilter {
  category: interfaceFilterCheckbox[];
  brand: interfaceFilterCheckbox[];
  price: interfaceFilterSlider;
  stock: interfaceFilterSlider;
}

export enum enumSort {
  priceAsc = 'price-asc',
  priceDesc = 'price-desc',
  raitingAsc = 'raiting-asc',
  raitingDesc = 'raiting-desc',
}
