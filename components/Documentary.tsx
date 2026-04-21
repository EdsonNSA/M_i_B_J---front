"use client";

import React from 'react';

export function Documentary() {
  return (
    <section id="filme" className="bg-ink py-16 md:py-24 border-t-2 border-gold relative overflow-hidden">
      {/* Elementos decorativos de fundo para preencher o visual */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 font-sans font-black text-9xl text-gold uppercase rotate-12 select-none">Filme</div>
        <div className="absolute bottom-10 right-10 font-sans font-black text-9xl text-gold uppercase -rotate-12 select-none">Curta</div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="font-space text-xs font-bold tracking-[0.4em] uppercase text-gold mb-4 block">
            ✦ Registro Visual
          </span>
          <h2 className="font-sans font-black uppercase tracking-tighter text-4xl md:text-7xl text-bg leading-none">
            CURTA-METRAGEM<br/>MADE IN BELO JARDIM
          </h2>
        </div>

        {/* Container do Vídeo Adaptado com o Novo Link */}
        <div className="relative aspect-video w-full border-4 border-gold shadow-[15px_15px_0_var(--color-ink),15px_15px_0_2px_var(--color-gold)] bg-black overflow-hidden">
          <iframe 
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/15Am0cehphM?si=296YaDqNm2puLmQX" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="font-sans font-bold uppercase tracking-widest text-[10px] md:text-xs text-gold/80 max-w-md text-center md:text-left leading-relaxed">
            "Uma imersão no processo artesanal, história, cultura e acima de tudo, do nosso povo."
          </p>
          
          <a 
            href="https://www.youtube.com/watch?v=15Am0cehphM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-sans font-black text-xs uppercase tracking-widest text-ink bg-gold px-8 py-4 border-2 border-gold hover:bg-bg hover:text-ink transition-all cursor-pointer shadow-[4px_4px_0_var(--color-ink)]"
          >
            Ver no YouTube ↗
          </a>
        </div>
      </div>
    </section>
  );
}