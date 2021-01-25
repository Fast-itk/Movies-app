import {useState, useCallback} from 'react'

const useFetch = () => {

    const [loading, setLoading] = useState(false)
    // const [error, setError] = useState(null)

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        setLoading(true)
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()

            setLoading(false)
            
            return data

        } catch(e) {
            setLoading(false)
            console.log('Ошибка в хуке', e.status)
        }
    }, [])



    return {loading, request}

}

export default useFetch