import React from 'react'
import styles from "./homepage.module.css"

const Header = () => {
  return (
    <div className={styles.headerContainer}>
        <div>
            <h1>Kuyua</h1>
            <p>Dashboard</p>
        </div>
        <div className={styles.headerLogo}>REWE</div>
    </div>
  )
}

export default Header