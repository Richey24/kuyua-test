import { Location } from '@/types/location'
import React from 'react'
import styles from "./searchPage.module.css"

const SearchResult: React.FC<{location: Location}> = ({location}) => {
  return (
    <div className={styles.resultMain}>
        <p>{location?.score}</p>
        <p>{location?.name}</p>
        <p>{location?.id}</p>
        <p>{location?.address}</p>
        <p>{location?.country}</p>
        <p>own</p>
    </div>
  )
}

export default SearchResult