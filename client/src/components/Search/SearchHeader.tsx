import React, { useEffect, useState } from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa6'
import styles from "./searchPage.module.css"
import { useRouter, useSearchParams } from 'next/navigation'

const SearchHeader: React.FC<{ currentPage: number, totalPage: number }> = ({ currentPage, totalPage }) => {
  const router = useRouter()
  const params = useSearchParams()
  const [queries, setQueries] = useState({search: "", minScore: 0, maxScore: 100, sortBy: "default"})

  useEffect(()=> {
    const query = Object.fromEntries(params.entries())
    if (query.search) {
      setQueries((prev)=> ({...prev, search: query.search}))
    }
    if (query.minScore) {
      setQueries((prev)=> ({...prev, minScore: Number(query.minScore)}))
    }
    if (query.maxScore) {
      setQueries((prev)=> ({...prev, maxScore: Number(query.maxScore)}))
    }
    if (query.sortBy) {
      setQueries((prev)=> ({...prev, sortBy: query.sortBy}))
    }
  }, [params])

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerFirst}>
        <h1>Kuyua</h1>
        <p>All Location</p>
      </div>
      <div className={styles.headerLast}>
        <FaCaretLeft onClick={() => router.push(`/search?search=${queries.search}&minScore=${queries.minScore}&maxScore=${queries.maxScore}&sortBy=${queries.sortBy}&page=${Number(currentPage) > 1 ? Number(currentPage) - 1 : Number(currentPage)}`)} />
        <p>{currentPage} of {totalPage} pages</p>
        <FaCaretRight onClick={() => router.push(`/search?search=${queries.search}&minScore=${queries.minScore}&maxScore=${queries.maxScore}&sortBy=${queries.sortBy}&page=${Number(currentPage) >= Number(totalPage) ? Number(currentPage) : Number(currentPage) + 1}`)} />
      </div>
    </div>
  )
}

export default SearchHeader