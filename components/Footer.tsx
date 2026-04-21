import React from 'react';

export function Footer() {
  return (
    <footer className="bg-ink flex flex-col md:flex-row justify-between items-center py-8 px-8 border-t-2 border-gold gap-4 md:gap-0">
      <div className="flex flex-col items-center md:items-start leading-none">
        <span className="font-sans font-bold text-gold text-sm tracking-tight lowercase">made in</span>
        <span className="font-sans font-black text-gold text-xl md:text-2xl uppercase tracking-tighter">Belo Jardim</span>
      </div>
      
      {/* Atualizado: Maior (text-xs), em negrito (font-bold) e cor mais contrastante */}
      <span className="font-space text-xs font-bold tracking-widest uppercase text-muted">
        Sustentabilidade & Cultura
      </span>
    </footer>
  );
}