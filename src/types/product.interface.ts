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