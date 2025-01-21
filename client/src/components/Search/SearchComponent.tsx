'use client'
import React, { useEffect, useState } from 'react'
import SearchInput from './SearchInput'
import styles from "./searchPage.module.css"
import debounce from "lodash/debounce";
import { Location } from '@/types/location'
import { fetchLocations } from '@/api/location'
import { useSearchParams } from 'next/navigation'
import SearchHeader from './SearchHeader'
import SearchResult from './SearchResult'
import LocationSkeleton from '@/utils/LocationSkeleton'

const SearchComponent = () => {
    const [locations, setLocations] = useState<Location[]>([])
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPage, setTotalPage] = useState(100)
    const [load, setLoad] = useState(true)
    const params = useSearchParams()


    useEffect(() => {
        const delayedSearch = debounce(async ()=> {
            setLoad(true)
            const query = Object.fromEntries(params.entries())
            let queryString = ''
            Object.entries(query)?.forEach((obj) => {
                queryString += `${obj[0]}=${obj[1]}&`
            })
            const theLocations = await fetchLocations(`${queryString}limit=14`)
            if (theLocations?.status === 200) {
                setLocations(theLocations.data!.locations)
                setCurrentPage(theLocations.data!.currentPage)
                setTotalPage(theLocations.data!.totalPages)
            }
            setLoad(false)
        }, 300)

        delayedSearch()

        return () => delayedSearch.cancel()
    }, [params])

    return (
        <div>
            <SearchHeader currentPage={currentPage} totalPage={totalPage} />
            <div className={styles.searchContainer}>
                <SearchInput />
                <div className={styles.resultBox}>
                    <div className={styles.resultTitle}>
                        <p>Priority Score</p>
                        <p>Site Name</p>
                        <p>State ID</p>
                        <p>Address</p>
                        <p>Country</p>
                        <p>Site type</p>
                    </div>
                    {
                        load ? <LocationSkeleton /> :
                        locations?.map((location) => <SearchResult key={location?.id} location={location} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchComponent