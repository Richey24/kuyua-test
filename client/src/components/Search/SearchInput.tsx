import React, { useEffect, useState } from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import styles from "./searchPage.module.css"
import { useRouter, useSearchParams } from 'next/navigation'

const SearchInput = () => {
  const router = useRouter()
  const params = useSearchParams()
  const [search, setSearch] = useState("")
  const [minScore, setMinScore] = useState(0)
  const [maxScore, setMaxScore] = useState(100)
  const [sortValue, setSortValue] = useState("")

  useEffect(()=> {
    const query = Object.fromEntries(params.entries())
    if (query.search) {
      setSearch(query.search)
    }
    if (query.minScore) {
      setMinScore(Number(query.minScore))
    }
    if (query.maxScore) {
      setMaxScore(Number(query.maxScore))
    }
    if (query.sortBy) {
      setSortValue(query.sortBy)
    }
  }, [params])

  const handleSearch = () => {
    router.push(`/search?search=${search}&minScore=${minScore}&maxScore=${maxScore}&sortBy=${sortValue}`)
  }

  const handleEnter = (e: any) => {
    if (e.keyCode === 13) {
      router.push(`/search?search=${search}&minScore=${minScore}&maxScore=${maxScore}&sortBy=${sortValue}`)
    }
  }

  const handleSort = (sortVal: string) => {
    setSortValue(sortVal)
    router.push(`/search?search=${search}&minScore=${minScore}&maxScore=${maxScore}&sortBy=${sortVal}`)
  }

  const handleRange = (score: number, type: string) => {
    if (type === "min") {
      setMinScore(score)
      router.push(`/search?search=${search}&minScore=${score}&maxScore=${maxScore}&sortBy=${sortValue}`)
    } else {
      setMaxScore(score)
      router.push(`/search?search=${search}&minScore=${minScore}&maxScore=${score}&sortBy=${sortValue}`)
    }
  }

  return (
    <div className={styles.searchInput}>
      <div className={styles.inputBox}>
        <input onKeyDown={handleEnter} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='Search...' />
        <div onClick={handleSearch}><IoSearchOutline color='white' size={24} /></div>
      </div>
      <input value={minScore} onChange={(e) => handleRange(Number(e.target.value), "min")} type="number" placeholder='Min Score' />
      <input value={maxScore} onChange={(e) => handleRange(Number(e.target.value), "max")} type="number" placeholder='Max Score' />
      <div className={styles.sortBox}>
        <p>Sort by</p>
        <div>
          <input checked={sortValue === "default"} onChange={() => handleSort("default")} type="radio" name='sort' id='sort1' />
          <label htmlFor="sort1">Default</label>
        </div>
        <div>
          <input checked={sortValue === "score"} onChange={() => handleSort("score")} type="radio" name='sort' id='sort2' />
          <label htmlFor="sort2">Score</label>
        </div>
        <div>
          <input checked={sortValue === "name"} onChange={() => handleSort("name")} type="radio" name='sort' id='sort3' />
          <label htmlFor="sort3">Name</label>
        </div>
      </div>
      <button>Export list</button>
    </div>
  )
}

export default SearchInput