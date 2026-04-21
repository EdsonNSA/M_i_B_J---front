import { NavBar } from "@/components/NavBar";
import { Ticker } from "@/components/Ticker";
import { Hero } from "@/components/Hero";
import { Manifesto } from "@/components/Manifesto";
import { DropsGrid } from "@/components/DropsGrid";
import { Documentary } from "@/components/Documentary";
import { About } from "@/components/About";
import { Stats } from "@/components/Stats";
import { Footer } from "@/components/Footer";
import { Toast } from "@/components/Toast";
import { FloatingCart } from "@/components/FloatingCart";

export default function Home() {
  const tickerItems = [
    "✦ MADE IN BELO JARDIM",
    "✦ DROP #001",
    "✦ PERNAMBUCO, MEU PAÍS",
    "✦ BELO JARDIM, MEU ESTADO",
    "✦ BORDADO À MÃO",
    "✦ XILOGRAVURA",
    "✦ PEÇA ÚNICA 1/1",
    "✦ MEMÓRIA VIVA",
    "✦ AGRESTE"
  ];

  return (
    <main className="min-h-screen bg-bg">
      <NavBar />
      
      {/* Ticker Superior */}
      <Ticker items={tickerItems} direction="left" />
      
      <Hero /> 
      
      {/* O Manifesto entra logo após o impacto visual do Hero */}
      <Manifesto />
      
      {/* Grade de Produtos */}
      <DropsGrid />

      {/* 🎬 O vídeo entra aqui como o clímax da experiência */}
      <Documentary />
      
      {/* Quem Faz: A alma por trás das peças */}
      <About />
      
      {/* Estatísticas e Impacto */}
      <Stats />
      
      {/* Ticker inferior invertido para fechar o loop visual */}
      <Ticker items={tickerItems} direction="right" />
      
      <Footer />

      <Toast /> {/* ⬅️ Coloque no finalzinho */}

      <FloatingCart /> {/* ⬅️ ADICIONE AQUI */}
    </main>
  );
}