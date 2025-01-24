import Image from "next/image";
import Link from "next/link";
import logoImg from "/public/logo.svg";

import styles from "../page.module.scss";
import { api } from "@/services/api";
import { redirect } from "next/navigation";

export default function Signup() {
    async function handleRegister(formData: FormData){    
        "use server"
        const name = formData.get('name')
        const email = formData.get('email')
        const password = formData.get('password')

        if( name === "" || email === "" || password === ""){
            alert("Preencha todos campos")
            return
        }

        try{
            await api.post("/users", {
                name, email, password
            })
        }catch(err){
            console.log("error")
            console.log(err)
        }

        redirect("/")
    }
    return (
        <div>
            <main className={styles.container}>
                <Image src={logoImg} width={300} alt="logo do nosso app" />

                <section className={styles.login}>
                    <h1>Criando sua conta</h1>
                    <form action={handleRegister}>
                        <input
                            type="text"
                            required
                            name="name"
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