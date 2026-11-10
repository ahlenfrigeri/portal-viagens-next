import Image from "next/image";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  nome: string;
  imagem: string;
  descricao?: string;
}

// Componente reutilizável: mostra um destino com imagem e nome
export default function CardDestino({ nome, imagem, descricao }: CardDestinoProps) {
  return (
    <article className={styles.card}>
      <div className={styles.imagemCaixa}>
        {/* next/image otimiza a imagem (tamanho, formato e lazy loading) */}
        <Image
          src={imagem}
          alt={`Paisagem do destino ${nome}`}
          fill
          sizes="(min-width: 64em) 33vw, (min-width: 40em) 50vw, 100vw"
          className={styles.imagem}
        />
      </div>
      <div className={styles.corpo}>
        <h2 className={styles.nome}>{nome}</h2>
        {descricao && <p className={styles.descricao}>{descricao}</p>}
      </div>
    </article>
  );
}
