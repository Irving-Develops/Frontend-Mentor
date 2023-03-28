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
                            {isActive ?
                            <div className={styles.amountSpent}>{day.amount}</div>
                            :
                            <></>
                        }
                            <div onClick={() => handleClick(idx)} className={styles[`${graphBar}`]} style={{
                                height: `${day.amount / total * 100 * 2}%`,
                            }} >
                            </div>
                            <p>
                                {day.day}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
