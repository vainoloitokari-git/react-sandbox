import { create } from "zustand";

export interface Product {
    id: number;
    title: string;
    price: number;
    category: string;
    thumbnail: string;
}

interface ProductStore {
    products: Product[];
    

}