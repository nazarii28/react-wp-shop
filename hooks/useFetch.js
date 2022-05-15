
import { useState, useEffect } from 'react';
import axiosAuth from "../axios/axiosAuth";

function useFetch(url, ready = true) {
    const [data, setData] = useState(null)
    const [pagination, setPagination] = useState({})
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        if(ready) {
            axiosAuth.get(url)
                .then(res => {

                    setPagination({
                        pages: res.headers['x-wp-totalpages'],
                        total: res.headers['x-wp-total'],
                    })
                    res.data && setData(res.data)
                    setLoading(false)
                })
                .catch(err => {
                    setError(err.message)
                    setLoading(false)
                })
        }
    }, [url])

    return {data, loading, error, pagination}
}

export default useFetch