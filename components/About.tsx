"use client";

import React from 'react';
import Image from 'next/image';

export function About() {
  return (
    <section id="quem-faz" className="bg-bg border-t-2 border-ink grid grid-cols-1 md:grid-cols-2 min-h-[70vh]">
      
      {/* Lado Esquerdo: Foto da Equipe */}
      <div className="relative border-b-2 md:border-b-0 md:border-r-2 border-ink h-112.5 md:h-auto bg-ink/5 overflow-hidden">
        <Image 
          src="/equipe-made.jpg" 
          alt="Equipe Made in Belo Jardim"
          fill
          className="object-cover object-left md:object-center group-hover:scale-105 transition-transform duration-500" 
          priority
        />
        <div className="absolute inset-0 bg-ink/5" />
        
        {/* Rótulo "Hub Criativo" (Ajustado para não cobrir rostos no mobile) */}
        <span className="absolute bottom-4 left-4 md:bottom-6 md:left-6 font-space text-[9px] md:text-[10px] font-black uppercase text-bg bg-ink px-3 py-1 tracking-widest z-10 select-none">
          EQUIPE
        </span>
      </div>

      {/* Lado Direito: Texto adaptado para "Com as próprias mãos" */}
      <div className="p-8 md:p-16 flex flex-col justify-center">
        <span className="font-space text-xs font-bold tracking-[0.3em] uppercase text-gold mb-6 block">
          ✦ O valor do fazer manual
        </span>
        
        <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-6xl text-ink leading-none mb-8">
          COM AS<br/>PRÓPRIAS MÃOS
        </h2>

        <div className="space-y-6">
          <p className="font-sans font-bold uppercase tracking-wide text-sm md:text-base text-ink/80 leading-relaxed">
            Nada aqui é automatizado. O que você veste é fruto de um processo detalhado, cuidadoso e genuinamente humano. A Made in Belo Jardim é a prova de que a beleza nasce da persistência e do toque.
          </p>
          
          <p className="font-sans font-bold uppercase tracking-wide text-sm md:text-base text-ink/80 leading-relaxed italic">
            "Cada ponto costurado à mão é um protesto contra o esquecimento da nossa cultura."
          </p>
        </div>

        {/* Assinatura Visual */}
        <div className="mt-12 pt-8 border-t border-ink/20 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full border-2 border-ink overflow-hidden relative">
             <Image src="/drops/logo.jpg" alt="Selo" fill className="object-contain p-2" />
          </div>
          <div>
            <span className="font-space text-[10px] font-black uppercase text-ink block">Processo Artesanal</span>
            <span className="font-sans font-bold text-xs text-muted uppercase">Feito em Belo Jardim · PE</span>
          </div>
        </div>
      </div>
    </section>
  );
}