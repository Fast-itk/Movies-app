import {useCallback} from 'react'

const useFetch = () => {

    const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
        try {
            const response = await fetch(url, {method, body, headers})
            const data = await response.json()
            
            return data

        } catch(e) {
            console.log('Ошибка в хуке', e.status)
        }
    }, [])

    return {request}

}

export default useFetch