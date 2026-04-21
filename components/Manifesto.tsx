import React from 'react';

export function Manifesto() {
  return (
    <section id="manifesto" className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-ink">
      
      <div className="bg-ink py-20 px-8 md:px-12 flex flex-col justify-center relative overflow-hidden">
        <p className="font-space text-xs tracking-[0.22em] uppercase text-gold mb-5 relative z-10">
          ✦ Manifesto
        </p>
        <h2 className="font-sans font-black uppercase tracking-tighter text-5xl md:text-[64px] text-cream leading-none relative z-10">
          A NOSSA<br/>HISTÓRIA<br/>
          <span className="text-gold">NÃO SE DESCARTA.</span>
        </h2>
      </div>

      <div className="bg-bg py-20 px-8 md:px-12 flex flex-col justify-center border-t-2 md:border-t-0 md:border-l-2 border-ink">
        {/* Aumentei a fonte de text-[11px] para text-sm (14px) e deixei a cor mais densa */}
        <div className="font-sans font-bold uppercase tracking-wide text-sm text-ink/80 leading-relaxed">
          <p className="mb-5">
            O Brasil descarta <strong className="text-ink font-black">mais de 4 milhões de toneladas</strong> de resíduos têxteis por ano.
            Entre 15% e 20% dos tecidos vão ao lixo ainda no corte — um modelo baseado no excesso e no descarte.
          </p>
          <p className="mb-5">
            Em Belo Jardim, costureiras, bordadeiras e artesãos guardam a memória de um povo na ponta dos dedos.
            <strong className="text-ink font-black"> Cada peça descartada é uma história que ainda não foi contada.</strong>
          </p>
          <p>
            <strong className="text-ink font-black">Pernambuco não precisa importar narrativas. Sua própria história já é matéria-prima suficiente.</strong>
          </p>
        </div>
      </div>

    </section>
  );
}