"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/store/useCartStore';

type DropItem = {
  id: string; 
  name: string; 
  tech: string; 
  price: number; 
  status: string; 
  img: string; 
  gif?: string; 
  description: string;
  images?: string[]; 
};

export function Hero() {
  const addItem = useCartStore((state) => state.addItem);
  const showToast = useCartStore((state) => state.showToast);
  
  const [selectedProduct, setSelectedProduct] = useState<DropItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ── LISTA COMPLETA ──
  const allDrops: DropItem[] = [
    { 
      id: "001", 
      name: "CALÇA FUXICOS", 
      tech: "Fuxico e Xilogravura", 
      price: 150, 
      status: "available", 
      img: "/drops/fuxicos.jpg", 
      gif: "/drops/fuxicos.gif",
      description: "Calça de corte reto em tecido preto, que se destaca pela customização artesanal, transformando-a em uma calça fuxico. A peça exibe uma aplicação de bolso lateral com estampas de xilogravura em preto e branco." 
    },
    { 
      id: "002", 
      name: "MAIÔ RAIADO", 
      tech: "Listras & Sol", 
      price: 130, 
      status: "available", 
      img: "/drops/maio-neon-perfil.jpg",
      images: ["/drops/maio-neon-perfil.jpg", "/drops/maio-neon-detalhe.jpg"],
      description: "Um mergulho psicodélico nas cores. Este maiô de corte assimétrico traz listras vibrantes em neon. O destaque é a customização artesanal da modelagem e cores que ressaltam no corpo." 
    },
    { 
      id: "003", 
      name: "CONJUNTO RENDA ALVA", 
      tech: "Renda Renascença & Arte", 
      price: 180, 
      status: "available", 
      img: "/drops/renda-branca.jpg",
      description: "A pureza da renda renascença encontra a força da arte popular. Este conjunto é uma releitura contemporânea da tradição têxtil de Belo Jardim. Perfeito como obra de arte vestível." 
    },
    { id: "004", name: "CROPPED BRASIL-JARDIM", tech: "Upcycling", price: 110, status: "sold_out", img: "/drops/cropped-futebol.jpg", description: "Camisa customizada à mão. Peça única 1/1." },
    { id: "005", name: "SAIA-CALÇÃO", tech: "Colagem Têxtil", price: 100, status: "available", img: "/drops/skort.jpg", description: "Saia-calção assimétrica vibrante." },
    { id: "006", name: "SAIA MIDI", tech: "Painel Narrativo", price: 100, status: "available", img: "/drops/saia-midi.jpg", description: "Peça que evoca tradições locais." },
    { id: "007", name: "CAMISETA PERNAMBUCO IMORTAL", tech: "Oversized", price: 120, status: "available", img: "/drops/pernambuco-imortal.jpg", description: "Ode à resiliência pernambucana." },
    { id: "008", name: "REGATA 1817", tech: "Histórica", price: 90, status: "coming_soon", img: "/drops/regata-1817.jpg", description: "Simbologia religiosa e histórica." }
  ];

  // ── LÓGICA DO CARROSSEL ──
  const carouselProducts = allDrops.slice(0, 3); 
  const activeItem = carouselProducts[currentIndex]; // RESOLVE O ERRO Cannot find name 'activeItem'

  const staticProducts = {
    esquerda: allDrops[6], 
    direita: allDrops[7]   
  };

  const openModal = (item: DropItem) => {
    setSelectedProduct(item);
    setCurrentImageIndex(0);
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % carouselProducts.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + carouselProducts.length) % carouselProducts.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  return (
    <>
      <section id="drops" className="grid grid-cols-1 md:grid-cols-[260px_1fr_260px] min-h-[96vh] border-b-2 border-ink relative overflow-hidden bg-bg">
        
        {/* PAINEL ESQUERDO */}
        <div className="hidden md:flex bg-bg-panel border-r-2 border-ink flex-col items-center justify-between p-6 relative z-30">
          <div className="w-full border-2 border-ink bg-bg-card p-4 text-center mt-4">
            <span className="font-space text-[10px] font-bold tracking-widest text-muted block mb-1 uppercase">Origem</span>
            <span className="font-sans font-black text-xs uppercase text-ink tracking-widest">Belo Jardim, PE</span>
          </div>

          <div className="w-full border-2 border-ink py-6 text-center my-auto flex flex-col bg-ink/5 relative overflow-hidden">
            <span className="absolute -left-3 top-2 font-sans font-black text-5xl text-ink/5 rotate-90">01</span>
            <span className="font-space text-[9px] font-bold tracking-widest text-muted uppercase relative z-10 mb-2">Técnica Principal</span>
            <span className="font-sans font-black text-sm uppercase text-ink tracking-tight relative z-10 leading-none">Upcycling Têxtil<br/>& Costura Manual</span>
          </div>

          <div 
            onClick={() => openModal(staticProducts.esquerda)}
            className="w-full border-2 border-ink bg-bg-card p-3 text-center relative mb-4 cursor-pointer hover:bg-gold/20 transition-colors group"
          >
            <span className="absolute -top-2 right-1 font-space text-[9px] tracking-widest uppercase bg-ink text-gold px-2 py-0.5 z-20">Destaque</span>
            <div className="w-full aspect-3/4 relative mb-3 overflow-hidden border-2 border-ink/10">
              <Image src={staticProducts.esquerda.img} alt={staticProducts.esquerda.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="font-sans font-black uppercase tracking-tighter text-base text-ink leading-none mb-1 group-hover:text-gold transition-colors">{staticProducts.esquerda.name}</div>
          </div>
        </div>

        {/* ALTAR CENTRAL */}
        <div className="flex flex-col items-center justify-center py-10 px-0 md:px-8 relative overflow-hidden bg-bg w-full">
          <div className="absolute w-80 h-80 pointer-events-none z-10 animate-[spin_35s_linear_infinite]" aria-hidden="true">
            <svg viewBox="0 0 320 320">
              <circle cx="160" cy="160" r="75" fill="none" stroke="var(--color-gold)" strokeWidth=".5" opacity=".16"/>
              <circle cx="160" cy="160" r="110" fill="none" stroke="var(--color-gold)" strokeWidth=".4" opacity=".12"/>
              <circle cx="160" cy="160" r="150" fill="none" stroke="var(--color-gold)" strokeWidth=".3" opacity=".08"/>
            </svg>
          </div>
          
          <p className="font-space text-xs font-black tracking-[0.22em] uppercase text-ink/80 text-center mb-3 relative z-20">
            ✦ DROP #{activeItem.id} · DESTAQUES ✦
          </p>
          
          <div className="h-25 md:h-30 w-full flex flex-col items-center justify-center relative z-20 mb-4 cursor-pointer" onClick={() => openModal(activeItem)}>
            <h1 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-5xl lg:text-6xl text-ink text-center leading-[0.9] hover:text-gold transition-colors px-4">
              {activeItem.name.split(' ')[0]}<br/>{activeItem.name.split(' ').slice(1).join(' ')}
            </h1>
          </div>
          
          <div className="relative w-full h-80 md:h-100 flex items-center justify-center z-20 mb-8">
            <button onClick={prevSlide} className="absolute left-2 md:left-4 z-40 w-10 h-10 md:w-12 md:h-12 border-2 border-ink bg-bg flex items-center justify-center font-sans font-black text-xl text-ink hover:bg-gold hover:scale-110 transition-all cursor-pointer shadow-[2px_2px_0_var(--color-ink)]">
              &lt;
            </button>
            <button onClick={nextSlide} className="absolute right-2 md:right-4 z-40 w-10 h-10 md:w-12 md:h-12 border-2 border-ink bg-bg flex items-center justify-center font-sans font-black text-xl text-ink hover:bg-gold hover:scale-110 transition-all cursor-pointer shadow-[2px_2px_0_var(--color-ink)]">
              &gt;
            </button>

            {carouselProducts.map((item, index) => {
              const len = carouselProducts.length;
              let diff = index - currentIndex;
              if (diff < -1) diff += len;
              if (diff > 1) diff -= len;

              let transformClass = "translate-x-[300%] opacity-0 scale-75 z-0 pointer-events-none"; 
              if (diff === 0) transformClass = "translate-x-0 opacity-100 scale-100 z-30 shadow-[12px_12px_0_var(--color-ink)] animate-float"; 
              else if (diff === -1) transformClass = "-translate-x-[75%] md:-translate-x-[110%] opacity-40 scale-85 z-10 blur-[2px]"; 
              else if (diff === 1) transformClass = "translate-x-[75%] md:translate-x-[110%] opacity-40 scale-85 z-10 blur-[2px]"; 

              return (
                <div 
                   key={item.id}
                   onClick={() => { if (diff !== 0) diff === -1 ? prevSlide() : nextSlide(); else openModal(item); }}
                   className={`absolute transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] w-50 h-70 md:w-65 md:h-87.5 border-2 border-ink bg-bg flex items-center justify-center overflow-hidden group cursor-pointer ${transformClass}`}
                >
                   <Image 
                     src={(diff === 0 && item.gif) ? item.gif : item.img} 
                     alt={item.name} fill 
                     className="object-cover transition-transform duration-500 group-hover:scale-105" 
                     priority={diff === 0} 
                   />
                </div>
              );
            })}
          </div>

          <button 
            onClick={() => { addItem(activeItem); showToast(`✦ ${activeItem.name} ADICIONADO`); }}
            className="w-64 md:w-80 bg-ink text-gold font-space text-[10px] md:text-sm font-black tracking-widest uppercase py-5 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] active:translate-y-0.5 active:translate-x-0.5 transition-all cursor-pointer z-20"
          >
            ✦ Adicionar · R$ {activeItem.price} ✦
          </button>
        </div>

        {/* PAINEL DIREITO */}
        <div className="hidden md:flex bg-bg-panel border-l-2 border-ink flex-col items-center justify-between p-6 relative z-30 gap-6">
          <div className="w-full border-2 border-ink bg-ink text-gold py-5 text-center flex flex-col justify-center shrink-0 mt-4">
            <span className="font-space text-[9px] font-bold tracking-widest uppercase block mb-1">Selo de Garantia</span>
            <span className="font-sans font-black text-xl uppercase tracking-tighter leading-none">100%<br/>Material<br/>Recuperado</span>
          </div>

          <div 
            onClick={() => openModal(activeItem)}
            className="w-full h-85 shrink-0 bg-bg-card border-2 border-ink border-l-4 border-l-gold p-5 cursor-pointer hover:bg-gold/5 transition-all group flex flex-col justify-start overflow-y-auto"
          >
            <span className="font-space text-[10px] font-bold tracking-widest uppercase text-gold mb-4 block shrink-0">✦ A história desta peça</span>
            <p className="font-sans font-bold uppercase tracking-wide text-xs text-ink/80 leading-relaxed animate-in fade-in duration-500">
              "{activeItem.description}"
            </p>
          </div>

          <div 
            onClick={() => openModal(staticProducts.direita)}
            className="w-full border-2 border-ink bg-bg-card p-3 text-center relative mb-4 cursor-pointer hover:bg-gold/20 transition-colors group shrink-0"
          >
            <span className="absolute -top-2 right-1 font-space text-[9px] tracking-widest uppercase bg-gold text-ink px-2 py-0.5 z-20">Em breve</span>
            <div className="w-full aspect-3/4 relative mb-3 border-2 border-ink/10 overflow-hidden">
               <Image src={staticProducts.direita.img} alt={staticProducts.direita.name} fill className="object-cover opacity-50 grayscale group-hover:scale-105 transition-transform duration-500" />
            </div>
            <div className="font-sans font-black uppercase tracking-tighter text-base text-ink leading-none mb-1 group-hover:text-gold transition-colors">{staticProducts.direita.name}</div>
          </div>
        </div>
      </section>

      {/* MODAL COM GALERIA */}
      {selectedProduct && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedProduct(null)}>
          <div className="bg-bg w-full max-w-[90%] md:max-w-4xl max-h-[85vh] flex flex-col md:flex-row relative border-2 border-ink shadow-[8px_8px_0_var(--color-gold)] overflow-hidden" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 z-50 text-ink bg-bg border-2 border-ink w-8 h-8 flex items-center justify-center font-sans font-black cursor-pointer shadow-[2px_2px_0_var(--color-ink)] hover:bg-gold transition-colors">X</button>
            
            <div className="w-full h-75 md:h-auto md:w-1/2 md:min-h-125 shrink-0 relative border-b-2 md:border-b-0 md:border-r-2 border-ink bg-ink/5">
              <Image 
                src={selectedProduct.images ? selectedProduct.images[currentImageIndex] : (selectedProduct.gif || selectedProduct.img)} 
                alt={selectedProduct.name} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />

              {selectedProduct.images && selectedProduct.images.length > 1 && (
                <div className="absolute inset-0 flex items-center justify-between px-4 z-20">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === 0 ? selectedProduct.images!.length - 1 : prev - 1));
                    }}
                    className="w-10 h-10 bg-bg/90 border-2 border-ink flex items-center justify-center font-black hover:bg-gold hover:scale-110 transition-all cursor-pointer shadow-[2px_2px_0_var(--color-ink)]"
                  >&lt;</button>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex((prev) => (prev === selectedProduct.images!.length - 1 ? 0 : prev + 1));
                    }}
                    className="w-10 h-10 bg-bg/90 border-2 border-ink flex items-center justify-center font-black hover:bg-gold hover:scale-110 transition-all cursor-pointer shadow-[2px_2px_0_var(--color-ink)]"
                  >&gt;</button>
                </div>
              )}
            </div>

            <div className="w-full flex-1 md:w-1/2 flex flex-col bg-bg overflow-y-auto p-5 md:p-10">
              <span className="font-space text-[10px] uppercase text-ink/50 mb-2">Drop #{selectedProduct.id}</span>
              <p className="font-space text-xs font-bold text-gold mb-2 uppercase">{selectedProduct.tech}</p>
              <h2 className="font-sans font-black uppercase text-3xl md:text-4xl text-ink mb-3 leading-none">{selectedProduct.name}</h2>
              <div className="h-0.5 w-12 bg-ink mb-4"></div>
              <p className="font-sans font-bold uppercase text-[10px] md:text-sm text-ink/80 leading-relaxed italic mb-6">"{selectedProduct.description}"</p>
              
              <div className="mt-auto pt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="font-space text-2xl md:text-3xl font-black text-ink">R$ {selectedProduct.price}</p>
                <button 
                  onClick={() => { addItem(selectedProduct); showToast(`✦ ${selectedProduct.name} ADICIONADO`); setSelectedProduct(null); }}
                  className="w-full sm:w-auto bg-ink text-gold font-space text-xs font-bold uppercase px-8 py-4 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] active:translate-y-0.5 active:shadow-[2px_2px_0_var(--color-gold)] cursor-pointer"
                >+ Sacola</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}