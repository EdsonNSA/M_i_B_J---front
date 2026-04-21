import { create } from 'zustand';

type CartItem = {
  id: string;
  name: string;
  price: number;
};

type CartStore = {
  items: CartItem[];
  isCartOpen: boolean;
  toastMessage: string | null; // Novo: Estado da mensagem
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  setCartOpen: (isOpen: boolean) => void;
  showToast: (msg: string) => void; // Novo: Função para mostrar
  hideToast: () => void; // Novo: Função para esconder
};

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isCartOpen: false,
  toastMessage: null,
  
  addItem: (item) => set((state) => ({ items: [...state.items, item] })),
  removeItem: (id) => set((state) => ({ items: state.items.filter((i) => i.id !== id) })),
  setCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
  
  // Função que mostra a mensagem e apaga sozinha após 3 segundos
  showToast: (msg) => {
    set({ toastMessage: msg });
    setTimeout(() => {
      set({ toastMessage: null });
    }, 3000);
  },
  hideToast: () => set({ toastMessage: null }),
}));