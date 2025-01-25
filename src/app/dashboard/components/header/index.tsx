"use client"

import Link from 'next/link'
import styles from './styles.module.scss'
import Image from 'next/image'
import logoImg from "/public/logo.svg";
import {  LogOutIcon } from 'lucide-react'
import { deleteCookie } from 'cookies-next'
import { useRouter } from 'next/navigation';

export function Header(){
    const router = useRouter()

    async function handleLogout(){
        let confirme = window.confirm("Deseja sair ?")
        
        if(confirme){
            deleteCookie("session", { path: "/"} )
            router.replace("/")
        }

    }
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <Image alt='Logo do site' src={logoImg}
                    width={100} height={60} priority={true} quality={100} />
                </Link>

                <nav>
                    <Link href="/dashboard/category">
                        Categoria
                    </Link>
                    <Link href="/dashboard/product">
                        Produto
                    </Link>

                    <form action={handleLogout}>
                        <button type='submit'>
                            <LogOutIcon size={25} color='#fff' />
                        </button>
                    </form>

                </nav>
            </div>
        </header>
    )
}