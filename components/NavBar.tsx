"use client";

import React, { useState } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from '@/store/useCartStore';
import { Menu } from 'lucide-react';

export function NavBar() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const total = items.reduce((acc, item) => acc + item.price, 0);

  const navLinks = ['Drops', 'Coleções', 'Manifesto', 'Quem faz'];

  return (
    <nav className="bg-bg flex justify-between items-center py-4 px-4 md:px-8 border-b-[1.5px] border-ink sticky top-0 z-50">
      
      {/* ── MENU HAMBÚRGUER (MOBILE) ── */}
      <div className="md:hidden flex items-center">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="text-ink hover:text-gold transition-colors p-2">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg-panel border-r-2 border-ink w-[80vw] sm:max-w-sm p-0 flex flex-col">
            <SheetHeader className="p-6 border-b-[1.5px] border-ink text-left">
              <SheetTitle className="font-unifraktur text-3xl text-ink">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-space text-sm tracking-[0.18em] uppercase text-ink hover:text-gold transition-colors duration-150"
                >
                  {link}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ── LOGO ── */}
      <a href="#" className="font-unifraktur text-xl md:text-2xl text-ink no-underline flex-1 text-center md:text-left">
        Made in Belo Jardim
      </a>
      
      {/* ── LINKS DESKTOP ── */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {navLinks.map((link) => (
          <li key={link}>
            <a href={`#${link.toLowerCase()}`} className="font-space text-[10px] tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-150">
              {link}
            </a>
          </li>
        ))}
      </ul>
      
      {/* ── PAINEL DA SACOLA ── */}
      <div className="flex items-center justify-end md:flex-none">
        <Sheet>
          <SheetTrigger asChild>
            <button className="font-space text-[10px] tracking-widest text-ink border-[1.5px] border-ink px-3 py-1.5 md:px-4 bg-transparent hover:bg-ink hover:text-gold transition-all duration-150 cursor-pointer flex items-center justify-center">
              <span className="hidden md:inline">Sacola ({items.length})</span>
              <span className="md:hidden">({items.length})</span>
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="bg-bg-panel border-l-2 border-ink w-full sm:max-w-md p-0 flex flex-col">
            <SheetHeader className="p-6 border-b-[1.5px] border-ink text-left">
              <SheetTitle className="font-unifraktur text-3xl text-ink">Sua Relíquia</SheetTitle>
              <p className="font-space text-[9px] tracking-[0.2em] uppercase text-muted">
                Você tem {items.length} {items.length === 1 ? 'item' : 'itens'} na sacola
              </p>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <span className="font-imfell text-5xl text-muted/30 mb-4">✦</span>
                  <p className="font-imfell text-lg text-ink italic mb-2">Sua sacola está vazia.</p>
                  <p className="font-space text-[10px] uppercase tracking-widest text-muted">
                    As peças 1/1 não esperam.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-bg-card border-[1.5px] border-ink p-4">
                      <div>
                        <h4 className="font-unifraktur text-xl text-ink">{item.name}</h4>
                        <p className="font-space text-[10px] text-muted">R$ {item.price},00</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red hover:text-ink font-space text-[10px] tracking-widest uppercase transition-colors"
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t-[1.5px] border-ink bg-bg">
              <div className="flex justify-between font-space text-xs tracking-widest uppercase text-ink mb-4">
                <span>Subtotal</span>
                <span>R$ {total},00</span>
              </div>
              <button 
                disabled={items.length === 0}
                className={`w-full bg-ink text-gold font-space text-[10px] tracking-widest uppercase py-4 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] transition-all
                  ${items.length === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_var(--color-gold)] cursor-pointer'}`}
              >
                Finalizar Pedido
              </button>
            </div>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  );
}