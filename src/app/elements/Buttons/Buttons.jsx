"use client"
import styles from './Buttons.module.css'
export default function Buttons() {
  return (
    <button className={styles.logout} onClick={()=>{console.log("logout");
    }}>logout</button>
  )
}