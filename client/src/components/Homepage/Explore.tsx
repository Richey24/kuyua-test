'use client'
import React from 'react'
import styles from "./homepage.module.css"
import dynamic from 'next/dynamic';
const MapUI = dynamic(() => import('../MapUI'), {
    ssr: false,
});

const Explore = () => {
    return (
        <div className={styles.exploreContainer}>
            <div>
                <h1>Explore</h1>
                <p>Move the globe and see all your locations, click on a location to expand the informations</p>
            </div>
            <MapUI width='50%' height='380px' />
        </div>
    )
}

export default Explore