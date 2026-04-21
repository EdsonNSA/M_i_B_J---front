"use client";

import React, { useState } from 'react';
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

export function DropsGrid() {
  const addItem = useCartStore((state) => state.addItem);
  const showToast = useCartStore((state) => state.showToast);
  const [selectedProduct, setSelectedProduct] = useState<DropItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (item: DropItem) => {
    setSelectedProduct(item);
    setCurrentImageIndex(0);
  };

  // ── LISTA DEFINITIVA E ORDENADA (001 a 008) PARA A VITRINE ──
  const drops: DropItem[] = [
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
    { 
      id: "004", 
      name: "CROPPED BRASIL-JARDIM", 
      tech: "Upcycling de Memória", 
      price: 110, 
      status: "sold_out", 
      img: "/drops/cropped-futebol.jpg",
      description: "Um patrimônio da cultura brasileira transformado em relíquia. Esta camisa de futebol foi customizada à mão. Peça única 1/1." 
    },
        { 
      id: "005", 
      name: "CAMISETA PERNAMBUCO IMORTAL", 
      tech: "Oversized / Desconstruída", 
      price: 120, 
      status: "available", 
      img: "/drops/pernambuco-imortal.jpg",
      description: "Esta camiseta oversized preta é uma ode à resiliência do povo pernambucano, trazendo elementos da bandeira de forma desconstruída e artística." 
    },
    { 
      id: "006", 
      name: "REGATA 1817", 
      tech: "Simbologia Histórica", 
      price: 90, 
      status: "coming_soon", 
      img: "/drops/regata-1817.jpg",
      description: "Uma peça de impacto que transforma o patriotismo regional em moda urbana. Esta regata preta foca na simbologia religiosa e histórica da bandeira pernambucana." 
    },
    { 
      id: "007", 
      name: "SAIA-CALÇÃO", 
      tech: "Colagem Têxtil", 
      price: 100, 
      status: "available", 
      img: "/drops/skort.jpg",
      description: "Esta peça autoral e vibrante é um verdadeiro trabalho de colagem têxtil e narrativa visual. Trata-se de uma saia-calção (skort) assimétrica." 
    },
    { 
      id: "008", 
      name: "SAIA MIDI", 
      tech: "Painel Narrativo", 
      price: 100, 
      status: "available", 
      img: "/drops/saia-midi.jpg",
      description: "Uma peça que transcende o vestuário para se tornar um painel narrativo. Esta saia midi evoca a nostalgia e o charme das tradições locais." 
    },

  ];

  return (
    <>
      <section id="colecoes" className="flex flex-col border-t-2 border-ink">
        <div className="flex justify-between items-center py-6 px-8 bg-bg-panel border-b-[1.5px] border-ink">
          <span className="font-space text-xs font-bold tracking-[0.2em] uppercase text-ink/70">
            — Vitrine de Relíquias
          </span>
          <span className="font-space text-[10px] font-bold tracking-[0.15em] uppercase text-ink">
            {drops.length} Peças no total
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 bg-bg-panel">
          {drops.map((item) => (
            <div key={item.id} className="border-b-[1.5px] border-ink md:border-r-[1.5px] flex flex-col hover:bg-[#e8dfc8] transition-colors group">
              
              <div 
                onClick={() => openModal(item)}
                className="aspect-3/4 bg-bg relative border-b-[1.5px] border-ink overflow-hidden cursor-pointer"
              >
                {item.gif && (
                  <Image src={item.gif} alt={item.name} fill className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-0" />
                )}
                
                <Image src={item.img} alt={item.name} fill className={`object-cover absolute top-0 left-0 transition-all duration-700 z-10 ${item.gif ? 'group-hover:opacity-0' : 'group-hover:scale-105'} ${item.status === 'sold_out' ? 'grayscale opacity-80' : ''}`} />
                
                <span className="absolute top-4 left-4 font-space text-[10px] font-bold text-ink bg-bg px-2 py-1 z-20 border-[1.5px] border-ink">
                  #{item.id}
                </span>
                
                {item.status === 'coming_soon' && (
                  <span className="absolute top-4 right-4 font-space text-[9px] font-bold tracking-widest uppercase bg-gold text-ink px-2 py-1 z-20">
                    Em breve
                  </span>
                )}

                {item.status === 'sold_out' && (
                  <span className="absolute top-4 right-4 font-space text-[9px] font-bold tracking-widest uppercase bg-ink text-bg px-2 py-1 z-20">
                    Esgotado
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div onClick={() => openModal(item)} className="cursor-pointer">
                  <p className="font-space text-[10px] font-bold tracking-[0.12em] uppercase text-gold mb-2">{item.tech}</p>
                  <h3 className="font-sans font-black uppercase tracking-tighter text-2xl text-ink leading-tight mb-4">{item.name}</h3>
                </div>
                
                <div className="flex items-center justify-between mt-auto">
                  <p className="font-space text-base font-black text-ink">R$ {item.price}</p>
                  
                  {item.status === 'available' ? (
                    <button 
                      onClick={() => {
                        addItem({ id: item.id, name: item.name, price: item.price });
                        showToast(`✦ ${item.name} ADICIONADO`);
                      }}
                      className="font-sans font-black text-xs uppercase tracking-widest text-gold bg-ink px-4 py-2 hover:bg-gold hover:text-ink transition-all cursor-pointer border-2 border-ink"
                    >
                      + Sacola
                    </button>
                  ) : (
                    <button disabled className="font-sans font-black text-xs uppercase tracking-widest text-muted border-2 border-muted px-4 py-2 cursor-not-allowed">
                      {item.status === 'sold_out' ? 'Esgotado' : 'Breve'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL "QUICK VIEW" ADAPTÁVEL (MESMO ESTILO DO HERO) */}
      {selectedProduct && (
        <div className="fixed inset-0 z-110 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 animate-in fade-in duration-200" onClick={() => setSelectedProduct(null)}>
          <div className="bg-bg w-full max-w-[90%] md:max-w-4xl max-h-[85vh] flex flex-col md:flex-row relative border-2 border-ink shadow-[8px_8px_0_var(--color-gold)] overflow-hidden" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedProduct(null)} className="absolute top-2 right-2 z-50 text-ink bg-bg border-2 border-ink w-8 h-8 flex items-center justify-center font-sans font-black cursor-pointer shadow-[2px_2px_0_var(--color-ink)]">X</button>
            
            <div className="w-full h-75 md:h-auto md:w-1/2 md:min-h-125 shrink-0 relative border-b-2 md:border-b-0 md:border-r-2 border-ink bg-ink/5">
              <Image 
                src={selectedProduct.gif || selectedProduct.img} 
                alt={selectedProduct.name} 
                fill 
                className="object-cover" 
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
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
                  disabled={selectedProduct.status !== 'available'}
                  onClick={() => {
                    addItem(selectedProduct);
                    showToast(`✦ ${selectedProduct.name} ADICIONADO`);
                    setSelectedProduct(null);
                  }}
                  className={`w-full sm:w-auto font-space text-xs font-bold uppercase px-8 py-4 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] active:translate-y-0.5 active:shadow-[2px_2px_0_var(--color-gold)] cursor-pointer ${selectedProduct.status === 'available' ? 'bg-ink text-gold' : 'bg-muted text-bg opacity-50 cursor-not-allowed'}`}
                >
                  {selectedProduct.status === 'available' ? '+ Sacola' : 'Indisponível'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}