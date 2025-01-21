import React from 'react'
import styles from "./homepage.module.css"
import { Button } from 'primereact/button'

const Buttons = () => {
  return (
    <div className={styles.buttonsContainer}>
        <Button label='Report'></Button>
        <Button label='Targets'></Button>
        <Button label='Actions'></Button>
    </div>
  )
}

export default Buttons