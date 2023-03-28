import React from "react"
import styles from './MySpending.module.css'
import data from '../../data.json'

export default function MySpending() {

    // console.log(data.map(day => {
    //     <p>{day.day}</p>
    // }))
    return (
        <div className={styles.container}>
            <p>Spending - Last 7 Days</p>
            <div className={styles.days}>
                {data.map((day, idx) => (
                    <div>{day.day}
                    </div>
                ))}

            </div>
            
        </div>
    )
}