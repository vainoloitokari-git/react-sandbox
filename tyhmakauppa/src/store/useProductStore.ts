import { create } from 'zustand';
import type {Product} from '../types/'


interface ProductState {
  products: Product[];
  isLoading: boolean;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],
  isLoading: false,
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const response = await fetch('https://dummyjson.com/products');
      const data = await response.json();
      set({ products: data.products, isLoading: false });
    } catch (error) {
      console.error("Virhe haettaessa tuotteita:", error);
      set({ isLoading: false });
    }
  },
}));