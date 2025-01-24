import Image from "next/image";
import styles from "./page.module.scss";
import logoImg from "/public/logo.svg";
import Link from "next/link";
import { api } from "@/services/api";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
export default function Home() {

  // usuario: amandaoliveira@gmail.com
  // senha: 123

  async function handleLogin(formData: FormData){
    "use server"

    const email = formData.get('email')
    const password = formData.get('password')

    if(email === "" || password === ""){
      return;
    }

    try{
      const response = await api.post("/session", {
        email: email, password: password
      })

      if(!response.data.token){
        return
      }
      console.log(response.data)

      const expressTime = 60 * 60 * 24 * 30 * 1000
        cookies().set("session", response.data.token, {
        maxAge: expressTime,
        path: "/",
        httpOnly: false,
        secure: process.env.Node_ENV === "production"
      })

    }catch(err){
      console.log(err)
      return
    }

    // caso sucesso
    redirect("/dashboard")
  }
  return (
    <div className={styles.container}>

      <Image src={logoImg} width={300} alt="logo do nosso app" />

      <section className={styles.login}>
        <form action={handleLogin}>
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
