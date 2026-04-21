"use client";

import React from 'react';
import { useCartStore } from '@/store/useCartStore';

export function FloatingCart() {
  const items = useCartStore((state) => state.items);
  const setCartOpen = useCartStore((state) => state.setCartOpen);

  // Só aparece se houver pelo menos 1 item na sacola
  if (items.length === 0) return null;

  return (
    /* md:hidden garante que ele suma no Desktop */
    <button
      onClick={() => setCartOpen(true)}
      className="md:hidden fixed bottom-6 right-6 z-100 flex items-center bg-ink text-gold px-5 py-4 border-2 border-ink shadow-[5px_5px_0_var(--color-gold)] active:translate-y-0.5 active:translate-x-0.5 active:shadow-[2px_2px_0_var(--color-gold)] transition-all cursor-pointer animate-in fade-in slide-in-from-bottom-4 duration-300"
    >
      {/* Ícone de Sacola Brutalista */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
        className="mr-3"
      >
        <path d="M4 9l1 12h14l1 -12"></path>
        <path d="M10 6v-2a2 2 0 0 1 4 0v2"></path>
        <path d="M2 6h20"></path>
      </svg>
      
      <span className="font-space text-[11px] font-black uppercase tracking-widest">
        Sacola ({items.length})
      </span>
    </button>
  );
}