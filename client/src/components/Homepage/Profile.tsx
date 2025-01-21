import { dummyProfileData, dummyProfilePlaces, profileStatColor, profileStatRange } from '@/data/homepage'
import React from 'react'
import styles from "./homepage.module.css"

const Profile = () => {
    return (
        <div className={styles.profileContainer}>
            <div>
                <h1>Profiles</h1>
                <div>
                    {
                        profileStatRange?.map((range) => (
                            <div key={range}>
                                <div style={{ backgroundColor: profileStatColor[range] }}></div>
                                <p>{range}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className={styles.profileData}>
                {
                    dummyProfileData?.map((profileData) => (
                        <div key={profileData.title}>
                            <p>{profileData.title}</p>
                            {
                                profileData.datas?.map((data, i) => (
                                    <div key={i} style={{ backgroundColor: profileStatColor[data] }}></div>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
                <div className={styles.placeRow}>
                    {
                        dummyProfilePlaces.map((place, i) => (
                            <div key={i}>
                                <p>{place?.name}</p>
                                <p>{place?.shortCode}</p>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}

export default Profile