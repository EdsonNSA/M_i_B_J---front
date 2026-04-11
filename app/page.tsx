import { NavBar } from "@/components/NavBar";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { DropsGrid } from "@/components/DropsGrid";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";

export default function Home() {
  const tickerItems = [
    "✦ Made in Belo Jardim",
    "✦ Drop #001",
    "✦ Pernambuco, meu País",
    "✦ Bordado à mão",
    "✦ Xilogravura",
    "✦ Peça única 1/1",
    "✦ Memória viva",
    "✦ Caatinga"
  ];

  return (
    <main className="min-h-screen">
      <NavBar />
      <Ticker items={tickerItems} direction="left" />
      
      <Hero /> 
      <Manifesto />
      <DropsGrid />
      <Stats />
      
      {/* Ticker inferior invertido */}
      <Ticker items={tickerItems} direction="right" />
      <Footer />
    </main>
  );
}