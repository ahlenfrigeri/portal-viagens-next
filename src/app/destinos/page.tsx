import type { Metadata } from "next";
import CardDestino from "@/components/CardDestino/CardDestino";
import { destinos } from "@/data/destinos";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Destinos · RotaLivre",
  description: "Conheça os destinos turísticos do portal RotaLivre.",
};

// Rota "/destinos": criada só por existir a pasta src/app/destinos com um page.tsx
export default function Destinos() {
  return (
    <div className={styles.secao}>
      <header className={styles.topo}>
        <h1 className={styles.titulo}>Destinos</h1>
        <p className={styles.subtitulo}>
          {destinos.length} lugares para inspirar a sua próxima viagem.
        </p>
      </header>

      <div className={styles.grade}>
        {/* map() transforma cada item do array em um <CardDestino /> */}
        {destinos.map((destino) => (
          <CardDestino
            key={destino.id}
            nome={destino.nome}
            imagem={destino.imagem}
            descricao={destino.descricao}
          />
        ))}
      </div>
    </div>
  );
}
