import axios from 'axios'
import { useState, useEffect } from 'react'

const useFetch = (url, options) => {

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        axios.get(url, options)
            .then(data => {
                setState({
                    loading: false,
                    error: null,
                    data: data.data
                })
            })
            .catch(e => {
                setState({
                    loading: false,
                    data: null,
                    error: e.message
                })
            })
    }, [url, options])

    return state;
}

export default useFetch
