import React from 'react';

export function Stats() {
  const statsData = [
    { num: "47", label: "Peças criadas" },
    { num: "12", label: "Artesãos parceiros" },
    { num: "100%", label: "Reciclado" },
    { num: "1/1", label: "Cada peça única" }
  ];

  return (
    <section className="bg-gold flex flex-col md:flex-row justify-around py-8 border-t-2 border-ink gap-8 md:gap-0">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center">
          <span className="font-unifraktur text-[42px] text-ink block leading-none mb-1">
            {stat.num}
          </span>
          <span className="font-space text-[8px] tracking-[0.18em] uppercase text-ink/50">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
}