"use client";

import React from 'react';
import { useCartStore } from '@/store/useCartStore';

export function Toast() {
  const toastMessage = useCartStore((state) => state.toastMessage);
  const hideToast = useCartStore((state) => state.hideToast);

  // Se não houver mensagem, o componente não renderiza nada
  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-8 right-8 z-999 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-ink text-gold border-2 border-gold shadow-[8px_8px_0_var(--color-ink)] p-5 flex items-center justify-between gap-6">
        <span className="font-space text-xs font-black tracking-widest uppercase">
          {toastMessage}
        </span>
        <button 
          onClick={hideToast}
          className="text-gold hover:text-bg transition-colors font-sans font-black text-lg leading-none cursor-pointer"
        >
          X
        </button>
      </div>
    </div>
  );
}