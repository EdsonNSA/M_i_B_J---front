import { create } from 'zustand';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imagePlaceholder?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  addItem: (item) => set((state) => {
    // Evita adicionar a mesma peça única 1/1 duas vezes
    if (state.items.find(i => i.id === item.id)) return state;
    return { items: [...state.items, item] };
  }),
  removeItem: (id) => set((state) => ({ 
    items: state.items.filter((i) => i.id !== id) 
  })),
}));