import React from 'react';

export function Manifesto() {
  return (
    <section id="manifesto" className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-ink">
      
      {/* ── LADO ESQUERDO (Escuro) ── */}
      <div className="bg-ink py-20 px-8 md:px-12 flex flex-col justify-center relative overflow-hidden">
        {/* Cruz de fundo ornamental (opacidade bem sutil) */}
        <svg 
          className="absolute top-0 left-0 w-full h-full opacity-[0.04] pointer-events-none" 
          viewBox="0 0 400 500" 
          preserveAspectRatio="xMidYMid slice" 
          aria-hidden="true"
        >
          <rect x="185" y="20" width="30" height="460" fill="var(--color-gold)"/>
          <rect x="20" y="185" width="360" height="30" fill="var(--color-gold)"/>
        </svg>
        
        <p className="font-space text-[9px] tracking-[0.22em] uppercase text-gold mb-5 relative z-10">
          ✦ Manifesto
        </p>
        <h2 className="font-unifraktur text-5xl md:text-[54px] text-cream leading-none relative z-10">
          Vestir<br/>é um ato<br/>
          <em className="text-gold not-italic">sagrado.</em>
        </h2>
      </div>

      {/* ── LADO DIREITO (Claro) ── */}
      <div className="bg-bg py-20 px-8 md:px-12 flex flex-col justify-center border-t-2 md:border-t-0 md:border-l-2 border-ink">
        <div className="font-imfell text-[14px] italic text-[#6a5a3a] leading-[1.9]">
          <p className="mb-4">
            O Brasil descarta <strong className="text-ink not-italic font-normal">mais de 4 milhões de toneladas</strong> de resíduos têxteis por ano.
            Entre 15% e 20% dos tecidos vão ao lixo ainda no corte — um modelo baseado no excesso e no descarte.
          </p>
          <p className="mb-4">
            Em Belo Jardim, costureiras, bordadeiras e artesãos guardam a memória de um povo na ponta dos dedos.
            <strong className="text-ink not-italic font-normal"> Cada peça descartada é uma história que ainda não foi contada.</strong>
          </p>
          <p>
            <strong className="text-ink not-italic font-normal">Pernambuco não precisa importar narrativas. Sua própria história já é matéria-prima suficiente.</strong>
          </p>
        </div>
      </div>

    </section>
  );
}