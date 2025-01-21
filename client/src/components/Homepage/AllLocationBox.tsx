'use client'
import React from 'react'
import styles from "./homepage.module.css"
import { useRouter } from 'next/navigation'

const AllLocationBox = () => {
  const router = useRouter()
  return (
    <div onClick={()=> router.push("/search")} className={styles.allLocationBox}>
        <div className={styles.allLocationBoxFirst}>
            <h1>1.457</h1>
            <p>Total locations</p>
        </div>
        <div className={styles.allLocationBoxLast}>
            <h1>All</h1>
            <h1>Locations</h1>
            <p>Get access to the results of your locations</p>
        </div>
    </div>
  )
}

export default AllLocationBox