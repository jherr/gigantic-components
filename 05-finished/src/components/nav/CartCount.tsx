"use client";
import { useCart } from "@/state";

export function CartCount() {
  const cart = useCart((s) => s.cart);
  return <span>{cart}</span>;
}
