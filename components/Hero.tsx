"use client";

import React from 'react';
import { useCartStore } from '@/store/useCartStore';

export function Hero() {
  const addItem = useCartStore((state) => state.addItem);

  const handleAddDrop001 = () => {
    addItem({
      id: "001",
      name: "Caatinga Imortal",
      price: 280
    });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-[200px_1fr_200px] min-h-[96vh] border-b-2 border-ink relative">
      
      {/* ── PAINEL ESQUERDO ── */}
      <div className="hidden md:flex bg-bg-panel border-r-[1.5px] border-ink flex-col items-center justify-between p-6 overflow-hidden relative">
        <svg className="w-full" viewBox="0 0 160 55" fill="none" aria-hidden="true">
          <path d="M0 28 Q20 8 40 28 Q60 48 80 28 Q100 8 120 28 Q140 48 160 28" stroke="var(--color-muted)" strokeWidth="1.2"/>
          <circle cx="80" cy="28" r="5" fill="var(--color-gold)" opacity=".6"/>
          <circle cx="40" cy="28" r="3" fill="var(--color-muted)" opacity=".4"/>
          <circle cx="120" cy="28" r="3" fill="var(--color-muted)" opacity=".4"/>
        </svg>

        <div className="w-full border-[1.5px] border-ink bg-bg-card p-2 text-center my-4">
          <span className="font-space text-[7px] tracking-widest text-muted block mb-1 uppercase">ex-voto</span>
          <span className="font-imfell text-[10px] italic text-ink tracking-wider">Graças Recebidas</span>
        </div>

        <div className="w-full border-[1.5px] border-ink bg-bg-card p-2 text-center relative cursor-pointer hover:bg-bg-panel transition-colors mb-4">
          <span className="absolute -top-2 right-1 font-space text-[7px] tracking-widest uppercase bg-ink text-gold px-2 py-0.5">1/1</span>
          <span className="font-space text-[8px] tracking-widest text-muted block mb-1">— #002 —</span>
          <div className="w-full aspect-3/4 bg-ink/5 mb-2"></div>
          <div className="font-unifraktur text-[17px] text-ink leading-none">Regata Cruz</div>
          <div className="font-imfell text-[11px] text-muted italic">R$ 260</div>
        </div>
      </div>

      {/* ── ALTAR CENTRAL ── */}
      <div className="flex flex-col items-center justify-center py-10 px-8 relative overflow-hidden bg-bg">
        <div className="absolute w-[320px] h-80 pointer-events-none z-10 animate-[spin_35s_linear_infinite]" aria-hidden="true">
          <svg viewBox="0 0 320 320">
            <circle cx="160" cy="160" r="75" fill="none" stroke="var(--color-gold)" strokeWidth=".5" opacity=".16"/>
            <circle cx="160" cy="160" r="110" fill="none" stroke="var(--color-gold)" strokeWidth=".4" opacity=".12"/>
            <circle cx="160" cy="160" r="150" fill="none" stroke="var(--color-gold)" strokeWidth=".3" opacity=".08"/>
            <g stroke="var(--color-gold)" strokeWidth=".6" opacity=".22">
              <line x1="160" y1="160" x2="160" y2="6"/>
              <line x1="160" y1="160" x2="292" y2="88"/>
              <line x1="160" y1="160" x2="88" y2="292"/>
              <line x1="160" y1="160" x2="28" y2="88"/>
            </g>
          </svg>
        </div>
        
        <p className="font-space text-[9px] tracking-[0.22em] uppercase text-muted text-center mt-6 mb-2 relative z-20">
          ✦ Made in Belo Jardim · Drop #001 ✦
        </p>
        <h1 className="font-unifraktur text-5xl md:text-6xl text-ink text-center leading-[0.95] mb-1 relative z-20">
          Caatinga<br/>Imortal
        </h1>
        <p className="font-imfell text-[13px] italic text-muted text-center mb-6 relative z-20">
          Camiseta bordada · Peça única 1/1
        </p>

        <div className="animate-float relative z-20 mb-6">
          <div className="w-60 h-67.5 bg-ink/5 border border-ink/10 flex items-center justify-center">
             <span className="font-space text-muted text-xs uppercase tracking-widest">Foto do Produto</span>
          </div>
        </div>

        {/* O BOTÃO CORRETO COM A FUNÇÃO ONCLICK ESTÁ AQUI */}
        <button 
          onClick={handleAddDrop001}
          className="bg-ink text-gold font-space text-[10px] tracking-widest uppercase px-8 py-3 border-2 border-ink shadow-[4px_4px_0_var(--color-gold)] hover:translate-y-0.5 hover:translate-x-0.5 hover:shadow-[2px_2px_0_var(--color-gold)] transition-all relative z-20 cursor-pointer"
        >
          ✦ Adicionar · R$ 280 ✦
        </button>
        <p className="font-space text-[8px] tracking-widest text-muted text-center mt-3 relative z-20">
          ✦ Peça única — 1 unidade ✦
        </p>
      </div>

      {/* ── PAINEL DIREITO ── */}
      <div className="hidden md:flex bg-bg-panel border-l-[1.5px] border-ink flex-col items-center justify-between p-6 overflow-hidden relative">
        <svg className="w-full" viewBox="0 0 160 55" fill="none" aria-hidden="true">
          <path d="M0 28 Q20 48 40 28 Q60 8 80 28 Q100 48 120 28 Q140 8 160 28" stroke="var(--color-muted)" strokeWidth="1.2"/>
          <circle cx="80" cy="28" r="5" fill="var(--color-gold)" opacity=".6"/>
        </svg>

        <div className="w-full bg-bg-card border-[1.5px] border-ink border-l-[3px] border-l-gold p-3 my-4">
          <span className="font-space text-[8px] tracking-widest uppercase text-gold mb-2 block">✦ A história desta peça</span>
          <p className="font-imfell text-[11px] italic text-[#5a4a2a] leading-relaxed">
            "Cada linha bordada carrega a memória do sertão. Os símbolos da fé nordestina vivem na costura."
          </p>
          <p className="font-space text-[7px] text-muted mt-2 tracking-wider">Artesã: Maria José · Belo Jardim, PE</p>
        </div>

        <div className="w-full border-[1.5px] border-ink bg-bg-card p-2 text-center relative cursor-pointer hover:bg-bg-panel transition-colors">
          <span className="absolute -top-2 right-1 font-space text-[7px] tracking-widest uppercase bg-gold text-ink px-2 py-0.5">Em breve</span>
          <span className="font-space text-[8px] tracking-widest text-muted block mb-1">— #004 —</span>
          <div className="w-full aspect-3/4 bg-ink/5 mb-2"></div>
          <div className="font-unifraktur text-[17px] text-ink leading-none">Short Colagem</div>
        </div>
      </div>

    </section>
  );
}