import Image from "next/image";
import styles from "./page.module.scss";
import logoImg from "/public/logo.svg";
import Link from "next/link";
export default function Home() {
  return (
    <div className={styles.container}>

      <Image src={logoImg} width={300} alt="logo do nosso app" />

      <section className={styles.login}>
        <form>
          <input
            type="text"
            required
            name="email"
            placeholder="Digite seu email..."
            className={styles.input}
          />

          <input
            type="password"
            required
            name="password"
            placeholder="*******"
            className={styles.input}
          />

          <button type="submit" className={styles.button}>Acessar</button>

          <Link href="/signup" className={styles.textCadastrar}>
            Não tenho uma conta ? Cadastre-se
          </Link>
        </form>
      </section>

    </div>
  );
}
