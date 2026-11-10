import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { destinos } from "@/data/destinos";

// Rota "/": o arquivo src/app/page.tsx vira a página inicial
export default function Inicio() {
  return (
    <>
      <section className={styles.hero}>
        <Image
          src="https://picsum.photos/id/1018/1600/900"
          alt=""
          fill
          priority
          sizes="100vw"
          className={styles.heroImagem}
        />
        <div className={styles.heroConteudo}>
          <p className={styles.etiqueta}>Sua próxima aventura começa aqui</p>
          <h1 className={styles.titulo}>Viaje mais. Planeje menos.</h1>
          <p className={styles.texto}>
            Reunimos destinos de montanha, praia, floresta e cidade com dicas para você escolher o
            lugar certo para as suas férias.
          </p>
          <Link href="/destinos" className={styles.botao}>
            Ver destinos →
          </Link>
        </div>
      </section>

      <section className={styles.vantagens}>
        <div className={styles.vantagem}>
          <span aria-hidden="true">🗺️</span>
          <h2>{destinos.length} destinos</h2>
          <p>Selecionados para todos os estilos de viagem.</p>
        </div>
        <div className={styles.vantagem}>
          <span aria-hidden="true">💬</span>
          <h2>Dicas reais</h2>
          <p>O que fazer, quando ir e o que levar na mala.</p>
        </div>
        <div className={styles.vantagem}>
          <span aria-hidden="true">💸</span>
          <h2>Sem custo</h2>
          <p>Todo o conteúdo do portal é gratuito.</p>
        </div>
      </section>
    </>
  );
}
