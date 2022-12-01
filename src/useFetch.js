
import React, { useState, useEffect } from "react"
import axios from "axios"

function useFetch(url, urls) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    // const [hasError, setHasError] = useState(false)

    const [hasError, setHasError] = useState(null)
    const [user, setUser] = useState({ firstName: null, metadatas: null, })

    useEffect(() => {
        setLoading(true)
        Promise.all(urls.map(url =>
            fetch(url)
                .then(res => res.json())

        )
        )
            .then((data) => {
                setResponse(data)
                console.log(data)
                setHasError(null)
                setUser(prev => {
                    return {
                        // La ligne suivante avec le spread permet de reprendre prev et de l'écraser.
                        ...prev,
                        firstName: data[0].data.userInfos.firstName,
                        metadatas: {
                            sessions: {
                                activitySessions: data[1].data.sessions,
                                averageSessions: data[2].data.sessions
                            },
                            skillData: data[3].data.data,
                            todayScore: data[0].data.todayScore || data[0].data.score,
                            keyData: data[0].data.keyData
                        },
                    }
                })

                console.log(user)

            })
            .catch(err => {
                setHasError(err)

            })
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { response, loading, hasError }


}

export default useFetch