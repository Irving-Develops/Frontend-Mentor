import React, { useState } from "react"
import styles from './MySpending.module.css'
import data from '../../data.json'

export default function MySpending() {
    const [total, setTotal] = useState(() =>
        data.reduce((accum, currentDay) => accum += currentDay.amount, 0
        ))

    const [activeIndex, setActiveIndex] = useState(false)

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index)
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Spending - Last 7 Days</p>
            <div className={styles.days}>
                {data.map((day, idx) => {
                    const isActive = activeIndex === idx
                    const graphBar = isActive ? 'greenGraphBar' : 'redGraphBar'
                    // console.log(graphBar, "graphbar")
                    return (
                        <div key={idx} className={styles.graph}>
  
                            <div onClick={() => handleClick(idx)} className={styles[`${graphBar}`]} style={{
                                height: `${day.amount / total * 100 * 2}%`,
                            }} >
                                {isActive ?
                                    <div className={styles.amountSpent}>${day.amount}</div>
                                    :
                                    <></>
                                }
                            </div>
                            <p className={styles.text}>
                                {day.day}
                            </p>
                        </div>
                    )
                })}
            </div>
            <div className={styles.cardBottom}>
                <div className={styles.left}>
                    <p style={{textAlign: "left"}}className={styles.text}>Total this month</p>
                    <p style={{fontSize: "2rem"}}className={styles.title}>${total}</p>
                </div>
                <div className={styles.right}>
                    <p style={{ textAlign: "right", color: "#392316", fontSize: "14px", fontWeight: "bold" }} className={styles.text}>+2.4%</p>
                    <p style={{ textAlign: "right" }} className={styles.text}>from last month</p>
                </div>
            </div>
        </div>
    )
}
