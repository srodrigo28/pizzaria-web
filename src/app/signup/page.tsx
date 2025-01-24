import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg";

import styles from "../page.module.scss";

export default function Signup() {
    return (
        <div>
            <main className={styles.container}>
                <Image src={logoImg} width={300} alt="logo do nosso app" />

                <section className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form>
                        <input
                            type="text"
                            required
                            name="nome"
                            placeholder="Digite seu nome..."
                            className={styles.input}
                        />
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

                        <button type="submit" className={styles.button}>Cadastrar</button>

                        <Link href="/" className={styles.textCadastrar}>
                            Já possui uma conta? Faça o login.
                        </Link>
                    </form>
                </section>
            </main>
        </div>
    )
}