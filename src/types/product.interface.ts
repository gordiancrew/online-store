export interface Product {
    id: string;
    tittle: string;
}
export interface Products {
    filter(arg0: (_item: string, idx: number) => boolean): unknown;
    length: number;
    status: string;
    totalResults: number;
    products: Product[];
}

export interface Product {
    id: string;
    title: string;
    images:string[];
    category:string;
}
export interface ProductSource {
    id: null | string;
    title: null | string;
}