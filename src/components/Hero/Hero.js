
import '../../styles/Hero/Hero.css'

import { useParams } from 'react-router-dom'
// import React, { useState } from 'react'
import useFetchMultiple from '../../useFetchMultiple'
import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import Model from '../../Model'


/**
 * 
 * @returns the whole organization of the page main content, depending on the response given by useFetch
 */

function Hero() {

    const { id = 12 } = useParams()


    const BASE_URL = `http://localhost:3000/user/${id}`
    const URLS = [
        BASE_URL,
        `${BASE_URL}/activity`,
        `${BASE_URL}/average-sessions`,
        `${BASE_URL}/performance`,
    ]
    // eslint-disable-next-line no-unused-vars
    const { response, user, loading, hasError } = useFetchMultiple(BASE_URL, URLS)


    /** Here are our model classes, used to format data the right way. Classes and new user are imported
     * from different files.
     */

    console.log(user)
    const modelUser = new Model(user)
    const finalUser = modelUser.user
    console.log(finalUser)

    /**
     * Conditional render depending on response, loading and error
     */

    if (hasError) {
        return <div className="info-div">NO USER TO DISPLAY !</div>
    }
    if (loading) {
        return <div className="info-div">LOADING...</div>
    }
    return (
        <div className="hero">
            <Banner firstName={finalUser.firstName} />
            <MainInfo
                activitySessions={finalUser.activitySessions}
                averageSessions={finalUser.averageSessions}
                skillData={finalUser.skillData}
                score={finalUser.todayScore}
            />
            <NutritionInfo keyData={finalUser.keyData} />
        </div>
    )

}

export default Hero

// return response === null ? (
    //     <div className="hero">
    //         <Banner firstName={modelizedUser.firstName} />
    //         <MainInfo
    //             activitySessions={modelizedUser.metadatas.sessions.activitySessions}
    //             averageSessions={modelizedUser.metadatas.sessions.averageSessions}
    //             skillData={modelizedUser.metadatas.skillData}
    //             score={modelizedUser.metadatas.todayScore}
    //         />
    //         <NutritionInfo keyData={modelizedUser.metadatas.keyData} />
    //     </div>
    // ) : (
    //     <div className="hero">
    //         <Banner firstName={modelizedNewUser.firstName} />
    //         <MainInfo
    //             activitySessions={modelizedNewUser.metadatas.sessions.activitySessions}
    //             averageSessions={modelizedNewUser.metadatas.sessions.averageSessions}
    //             skillData={modelizedNewUser.metadatas.skillData}
    //             score={modelizedNewUser.metadatas.todayScore}
    //         />
    //         <NutritionInfo keyData={modelizedNewUser.metadatas.keyData} />
    //     </div>
    // )