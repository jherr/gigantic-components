import { create } from "zustand";

export const useMenuOpen = create<{
  open: boolean;
  setOpen: (open: boolean) => void;
}>((set) => ({
  open: false,
  setOpen: (open: boolean) => set({ open }),
}));

export const useCart = create<{
  cart: number;
  addToCart: () => void;
}>((set) => ({
  cart: 0,
  addToCart: () => set((s) => ({ cart: s.cart + 1 })),
}));
