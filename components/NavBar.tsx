"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useCartStore } from '@/store/useCartStore';
import { Menu } from 'lucide-react';

export function NavBar() {
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setCartOpen = useCartStore((state) => state.setCartOpen);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const total = items.reduce((acc, item) => acc + item.price, 0);
  
  const navLinks = [
    { label: 'Drops', href: '#drops' },
    { label: 'Coleções', href: '#colecoes' },
    { label: 'Manifesto', href: '#manifesto' },
    { label: 'Curta-Metragem', href: '#filme' },
    { label: 'Quem faz', href: '#quem-faz' }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-bg flex justify-between items-center py-4 px-4 md:px-8 border-b-[1.5px] border-ink sticky top-0 z-50">
      
      {/* ── MENU HAMBÚRGUER (MOBILE) ── */}
      <div className="md:hidden flex items-center">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <button className="text-ink hover:text-gold transition-colors p-2 cursor-pointer">
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-bg-panel border-r-2 border-ink w-[80vw] sm:max-w-sm p-0 flex flex-col">
            <SheetHeader className="p-6 border-b-[1.5px] border-ink text-left">
              <SheetTitle className="font-sans font-black uppercase tracking-tighter text-3xl text-ink">Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-space text-base tracking-[0.18em] uppercase text-ink hover:text-gold transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* ── LOGO ── */}
      <a 
        href="#" 
        onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} 
        className="flex-1 flex items-center justify-center md:justify-start gap-3 md:gap-4 no-underline cursor-pointer group"
      >
        <div className="relative w-14 h-14 md:w-18 md:h-18 shrink-0 group-hover:scale-105 transition-transform duration-300">
          <Image 
            src="/drops/logo.jpg" 
            alt="Logo Made in Belo Jardim" 
            fill 
            className="object-contain" 
            priority 
          />
        </div>

        <div className="flex flex-col items-center md:items-start leading-none">
          <div className="flex flex-col items-center md:items-start leading-none mb-1">
            <span className="font-sans font-bold text-ink text-[10px] md:text-xs tracking-tight lowercase">made in</span>
            <span className="font-sans font-black text-ink text-xl md:text-3xl uppercase tracking-tighter">Belo Jardim</span>
          </div>
          
          {/* AJUSTE MOBILE: Fundo preto justo e sem quebra de texto */}
          <div className="bg-ink px-2 py-0.5 inline-block w-fit">
            <span className="font-space text-[8px] md:text-[10px] font-black tracking-[0.15em] uppercase text-gold whitespace-nowrap">
              Sustentabilidade e Cultura
            </span>
          </div>
        </div>
      </a>
      
      {/* ── LINKS DESKTOP ── */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0 items-center">
        {navLinks.map((link) => (
          <li key={link.label}>
            <a 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="font-space text-xs tracking-[0.18em] uppercase text-muted hover:text-ink transition-colors duration-150 font-bold"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
      
      {/* ── PAINEL DA SACOLA ── */}
      <div className="flex items-center justify-end md:flex-none md:ml-12">
        <Sheet open={isCartOpen} onOpenChange={setCartOpen}>
          <SheetTrigger asChild>
            <button className="hidden md:flex font-space text-xs font-bold tracking-widest text-ink border-[1.5px] border-ink px-4 py-2 bg-transparent hover:bg-ink hover:text-gold transition-all duration-150 cursor-pointer items-center justify-center">
              Sacola ({items.length})
            </button>
          </SheetTrigger>
          
          <SheetContent side="right" className="bg-bg-panel border-l-2 border-ink w-full sm:max-w-md p-0 flex flex-col">
            <SheetHeader className="p-6 border-b-[1.5px] border-ink text-left">
              <SheetTitle className="font-sans font-black uppercase tracking-tighter text-3xl text-ink">Sua Relíquia</SheetTitle>
              <p className="font-space text-xs tracking-[0.2em] uppercase text-muted">
                Você tem {items.length} {items.length === 1 ? 'item' : 'itens'} na sacola
              </p>
            </SheetHeader>
            
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center">
                  <span className="font-sans font-black text-5xl text-muted/30 mb-4">✦</span>
                  <p className="font-sans font-bold uppercase tracking-widest text-lg text-ink mb-2">Sua sacola está vazia.</p>
                  <p className="font-space text-xs uppercase tracking-widest text-muted">
                    As peças 1/1 não esperam.
                  </p>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex justify-between items-center bg-bg-card border-[1.5px] border-ink p-4">
                      <div>
                        <h4 className="font-sans font-black uppercase tracking-tighter text-xl text-ink">{item.name}</h4>
                        <p className="font-space text-xs font-bold text-ink">R$ {item.price},00</p>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-ink font-space text-xs tracking-widest uppercase transition-colors cursor-pointer"
                      >
                        Remover
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="p-6 border-t-[1.5px] border-ink bg-bg">
              <div className="flex justify-between font-space text-sm font-bold tracking-widest uppercase text-ink mb-4">
                <span>Subtotal</span>
                <span>R$ {total},00</span>
              </div>
              <button 
                disabled={items.length === 0}
                className={`w-full bg-ink text-gold font-space text-xs tracking-widest uppercase py-4 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] transition-all
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