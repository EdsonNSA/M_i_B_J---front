import type { Metadata } from "next";
import { Space_Mono, UnifrakturMaguntia, IM_Fell_English, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: '--font-space'
});

const unifraktur = UnifrakturMaguntia({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-unifraktur'
});

const imFell = IM_Fell_English({ 
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ["latin"],
  variable: '--font-imfell'
});

export const metadata: Metadata = {
  title: "Made in Belo Jardim",
  description: "Sustentabilidade e Cultura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn(spaceMono.variable, unifraktur.variable, imFell.variable, "font-sans", geist.variable)}>
      <body className="font-imfell antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}