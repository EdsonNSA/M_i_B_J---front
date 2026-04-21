import React from 'react';

interface TickerProps {
  items: string[];
  direction?: 'left' | 'right';
}

export function Ticker({ items, direction = 'left' }: TickerProps) {
  const isRight = direction === 'right';
  
  return (
    <div className={`overflow-hidden whitespace-nowrap py-3 border-ink ${isRight ? 'bg-bg border-t-2' : 'bg-ink border-b-2 border-b-gold'}`}>
      <div className={`inline-flex ${isRight ? 'animate-tick-r' : 'animate-tick-l'}`}>
        {/* Renderizamos a lista duas vezes para o loop infinito ficar suave */}
        {[...items, ...items].map((item, index) => (
          <span 
            key={index} 
            className={`font-space text-xs font-bold tracking-widest uppercase px-8 ${isRight ? 'text-ink/80' : 'text-gold'}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}