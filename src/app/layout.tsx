import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Layout from "@/components/Layout/Layout";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RotaLivre · Portal de viagens",
  description: "Descubra destinos incríveis para a sua próxima viagem.",
};

// Layout raiz do App Router: envolve TODAS as páginas.
// Por isso o componente <Layout> (header + footer) aparece em / e em /destinos.
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={geistSans.variable}>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
