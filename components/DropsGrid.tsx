"use client";

import React from 'react';
import { useCartStore } from '@/store/useCartStore';

export function DropsGrid() {
  const addItem = useCartStore((state) => state.addItem);

  // Transformei o preço em número (ex: 280 em vez de "R$ 280") para o carrinho conseguir somar
  const drops = [
    { id: "001", name: "Caatinga Imortal", tech: "Bordado artesanal", price: 280, status: "available" },
    { id: "002", name: "Regata Cruz", tech: "Serigrafia artesanal", price: 260, status: "available" },
    { id: "003", name: "Saia Cordel", tech: "Ilustração bordada", price: 340, status: "sold_out" },
    { id: "005", name: "Vestido Flor", tech: "Aplicação 3D artesanal", price: 380, status: "available" }
  ];

  return (
    <section id="colecoes" className="flex flex-col">
      {/* ── HEADER DA SEÇÃO ── */}
      <div className="flex justify-between items-center py-6 px-8 border-t-2 border-ink bg-bg-panel">
        <span className="font-space text-[9px] tracking-[0.2em] uppercase text-muted">
          — Todos os drops
        </span>
        <a href="#" className="font-space text-[9px] tracking-[0.15em] uppercase text-ink hover:text-gold transition-colors">
          Ver arquivo →
        </a>
      </div>

      {/* ── GRID DE PRODUTOS ── */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-bg-panel">
        {drops.map((item, index) => (
          <div 
            key={item.id} 
            className={`border-b-[1.5px] border-ink flex flex-col hover:bg-[#e8dfc8] transition-colors 
            ${(index + 1) % 2 !== 0 ? 'border-r-[1.5px]' : ''} 
            md:not-nth-[4n]:border-r-[1.5px] md:nth-[2n]:border-r-[1.5px] 
            ${item.status === 'sold_out' ? 'opacity-65' : ''}`}
          >
            {/* Imagem (Placeholder) */}
            <div className="aspect-3/4 bg-[#e8dfc8] relative border-b-[1.5px] border-ink flex items-center justify-center overflow-hidden">
              <span className="absolute top-2 left-2.5 font-space text-[7px] text-muted tracking-widest">
                #{item.id}
              </span>
              
              {item.status === 'sold_out' ? (
                <span className="absolute top-2 right-2 font-space text-[7px] tracking-widest uppercase bg-muted text-bg px-1.5 py-0.5">
                  Esgotado
                </span>
              ) : (
                <span className="absolute top-2 right-2 font-space text-[7px] tracking-widest uppercase bg-ink text-gold px-1.5 py-0.5">
                  1/1
                </span>
              )}
              
              <span className="font-space text-muted text-[10px] uppercase tracking-widest opacity-50">Foto da Peça</span>
            </div>

            {/* Informações */}
            <div className="p-3 pb-4 flex flex-col justify-between flex-1">
              <div>
                <p className="font-space text-[7px] tracking-[0.12em] uppercase text-muted mb-1">
                  {item.tech}
                </p>
                <h3 className="font-unifraktur text-[18px] text-ink leading-[1.1] mb-2">
                  {item.name}
                </h3>
              </div>
              
              <div className="flex items-center justify-between mt-auto pt-2">
                <p className={`font-space text-[10px] ${item.status === 'sold_out' ? 'text-muted line-through' : 'text-ink'}`}>
                  R$ {item.price}
                </p>
                
                {/* Botão de Adicionar (Só aparece se não estiver esgotado) */}
                {item.status === 'available' && (
                  <button 
                    onClick={() => addItem({ id: item.id, name: item.name, price: item.price })}
                    className="font-space text-[8px] uppercase tracking-widest text-gold bg-ink px-2 py-1 hover:bg-gold hover:text-ink transition-colors cursor-pointer"
                  >
                    + Sacola
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}