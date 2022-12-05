
import { useState, useEffect } from "react"


/**
 * Our hook created to fetch data, imported in Hero.js
 * 
 * @param {url} the url seized in the navigator search-bar
 * @param {urls} the API urls where we fetch the data
 * @returns the reponse, the loading, the error boolean and the result of our fetch, the newUser object 
 */

function useFetch(url, urls) {
    const [response, setResponse] = useState(null)
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(null)
    const [newUser, setNewUser] = useState({
        firstName: null,
        metadatas: null,
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

export default useFetch