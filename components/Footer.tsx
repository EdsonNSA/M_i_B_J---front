import React from 'react';

export function Footer() {
  return (
    <footer className="bg-ink flex flex-col md:flex-row justify-between items-center py-6 px-8 border-t-2 border-gold gap-4 md:gap-0">
      <span className="font-unifraktur text-lg text-gold">
        Made in Belo Jardim
      </span>
      <span className="font-space text-[8px] tracking-widest text-[#5a4a2a]">
        Sustentabilidade & Cultura · Belo Jardim, PE
      </span>
    </footer>
  );
}