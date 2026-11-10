import Link from "next/link";
import styles from "./Layout.module.css";

// Layout reutilizado em todas as páginas: cabeçalho com menu, conteúdo e rodapé.
// É aplicado uma única vez em src/app/layout.tsx, que envolve todas as rotas.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.pagina}>
      <header className={styles.cabecalho}>
        <div className={styles.conteudo}>
          <Link href="/" className={styles.logo}>
            Rota<span>Livre</span>
          </Link>

          {/* next/link: navega sem recarregar a página inteira */}
          <nav aria-label="Menu principal">
            <ul className={styles.menu}>
              <li>
                <Link href="/" className={styles.link}>
                  Início
                </Link>
              </li>
              <li>
                <Link href="/destinos" className={styles.link}>
                  Destinos
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className={styles.principal}>{children}</main>

      <footer className={styles.rodape}>
        <p>© {new Date().getFullYear()} RotaLivre · Portal de viagens</p>
        <p className={styles.rodapeSuave}>Exercício do Módulo 22 · EBAC Front-End</p>
      </footer>
    </div>
  );
}
