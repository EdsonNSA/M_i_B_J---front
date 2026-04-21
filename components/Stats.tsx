import React from 'react';

export function Stats() {
  const statsData = [
    { num: "12", label: "Peças criadas" },
    { num: "5", label: "Artesãos parceiros" },
    { num: "100%", label: "Reaproveitado" },
    { num: "1/1", label: "Cada peça única" }
  ];

  return (
    <section className="bg-gold grid grid-cols-2 md:grid-cols-4 py-12 border-t-2 border-ink gap-y-8 md:gap-y-0">
      {statsData.map((stat, index) => (
        <div key={index} className="text-center px-4">
          <span className="font-sans font-black tracking-tighter text-6xl md:text-7xl text-ink block leading-none mb-2">
            {stat.num}
          </span>
          <span className="font-space text-xs font-bold tracking-[0.18em] uppercase text-ink/70">
            {stat.label}
          </span>
        </div>
      ))}
    </section>
  );
}