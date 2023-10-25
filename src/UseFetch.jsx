import { useState, useEffect } from "react";

const UseFetch = (url) => {
    
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(true)

    
        useEffect(() => {
            setTimeout(() => {
                fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw Error("Couldn't fetch the data from that url.")
                    }
                    
                    return response.json()
                }).then((data) => {
                    console.log(data)
                    setData(data)
                    setError(null)
                    setIsPending(false)
                })
                .catch(err => {
                    console.log(err.message)
                    setError(err.message)
                })
            }, 1000)
        }, [url])
    
    

    return {data, error, isPending}
    
}
 
export default UseFetch;