
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
            })
            .catch(err => {
                setHasError(err)
                console.log(err)

            })
            .finally(() => {
                setLoading(false)
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url])

    return { response, loading, hasError }


}

export default useFetchMultiple