import React from "react"
import styles from './MyBalance.module.css'

export default function MyBalance () {

    return (
        <section className={styles.container}>
            <div className={styles.group}>
                <p>My Balance</p>
                <p className={styles.balance}>$921.48</p>
            </div>
            <img className={styles.logo} src="/logo.svg"></img>
        </section>
    )
}