
import { useState, useEffect } from "react"


/**
 * Our hook created to fetch data, imported in Hero.js
 * 
 * @param {url} the url seized in the navigator search-bar
 * @param {urls} the API urls where we fetch the data
 * @returns the reponse, the loading, the error boolean and the result of our fetch, the newUser object 
 */

function useFetchMultiple(url, urls) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(null)
    const [newUser, setNewUser] = useState({
        firstName: "Karl",
        metadatas: {
            keyData: { calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50 },
            todayScore: 0.12,
            sessions: {
                activitySessions: [
                    { day: '2020-07-01', kilogram: 80, calories: 240 },
                    { day: '2020-07-02', kilogram: 80, calories: 220 },
                    { day: '2020-07-03', kilogram: 81, calories: 280 },
                    { day: '2020-07-04', kilogram: 81, calories: 290 },
                    { day: '2020-07-05', kilogram: 80, calories: 160 },
                    { day: '2020-07-06', kilogram: 78, calories: 162 },
                    { day: '2020-07-07', kilogram: 76, calories: 390 }],
                averageSessions:
                    [{ day: 1, sessionLength: 30 },
                    { day: 2, sessionLength: 23 },
                    { day: 3, sessionLength: 45 },
                    { day: 4, sessionLength: 50 },
                    { day: 5, sessionLength: 0 },
                    { day: 6, sessionLength: 0 },
                    { day: 7, sessionLength: 60 },
                    ]
            },
            skillData: [
                { value: 80, kind: 1 },
                { value: 120, kind: 2 },
                { value: 140, kind: 3 },
                { value: 50, kind: 4 },
                { value: 200, kind: 5 },
                { value: 90, kind: 6 },
            ],
        },

    }
    )

    useEffect(() => {
        setLoading(true)
        Promise.all(urls.map(url =>
            fetch(url)
                .then(res => res.json())

        )
        )
            .then((data) => {
                setResponse(data)
                setHasError(null)
                setNewUser(prev => {
                    return {
                        // The following line with the spread allows to reccover prev and to overwrite it.
                        ...prev,
                        firstName: data[0].data.userInfos.firstName,
                        metadatas: {
                            sessions: {
                                activitySessions: data[1].data.sessions,
                                averageSessions: data[2].data.sessions,
                            },
                            skillData: data[3].data.data,
                            todayScore: data[0].data.todayScore || data[0].data.score,
                            keyData: data[0].data.keyData
                        },
                    }
                })
            })
            .catch(err => {
                setHasError(err)

            })
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { response, newUser, loading, hasError }


}

export default useFetchMultiple