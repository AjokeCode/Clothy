import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface CartItem {
  id: string;
  title: string;
  price: string;
  quantity: number;
  image: string;
}

// Define the state shape
interface CartStore {
  cart: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateItemQuantity: (id: string, quantity: number) => void;
  inCart: (id: string) => boolean;
  clearCart: () => void;
}

// Create the store
export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      cart: [],
      addItem: (item) => {
        const existingItem = get().cart.find(
          (cartItem) => cartItem.id === item.id
        );
        if (existingItem) {
          set({
            cart: get().cart.map((cartItem) =>
              cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
                : cartItem
            ),
          });
        } else {
          set({
            cart: [...get().cart, { ...item, quantity: item.quantity || 1 }],
          });
        }
      },
      removeItem: (id) => {
        set({
          cart: get().cart.filter((cartItem) => cartItem.id !== id),
        });
      },
      updateItemQuantity: (id, quantity) => {
        if (quantity <= 0) {
          get().removeItem(id);
        } else {
          set({
            cart: get().cart.map((cartItem) =>
              cartItem.id === id ? { ...cartItem, quantity } : cartItem
            ),
          });
        }
      },
      inCart: (id) => {
        return get().cart.some((cartItem) => cartItem.id === id);
      },
      clearCart: () => {
        set({ cart: [] });
      },
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
