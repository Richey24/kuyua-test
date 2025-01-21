import React, { Suspense } from 'react'
import styles from "./search.module.css"
import SearchComponent from '@/components/Search/SearchComponent'

const page = () => {
  return (
    <div className={styles.searchPage}>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchComponent />
      </Suspense>
    </div>
  )
}

export default page