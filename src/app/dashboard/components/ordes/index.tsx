import { RefreshCw } from 'lucide-react'
import styles from './styles.module.scss'

export function Orders(){
    return(
        <main className={styles.container}>
            <section className={styles.containerHeader}>
                <h1>Últimos pedidos</h1>
                <button className={styles.button}>
                    <RefreshCw size={25} color='#3fffa3' />
                </button>
            </section>
            <section className={styles.listOrders}>
                <button className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa 10</span>
                </button>
            </section>
            <section className={styles.listOrders}>
                <button className={styles.orderItem}>
                    <div className={styles.tag}></div>
                    <span>Mesa 22</span>
                </button>
            </section>
        </main>
    )
}