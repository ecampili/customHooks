import axios from 'axios'
import { useState, useEffect } from 'react'

const useAxios = (url) => {
    const [ state, setState ] = useState({ data: null, error: null, loading: true })

    const axiosCall = async (url) => {
        try {
            const call = await axios.get(url)

            if (!call.data) {
                throw new Error ({
                    err: true,
                    status: call.status,
                    statusText: call.statusText ? call.statusText : 'An error ocurred.'
                })
            }

            setState({
                data: call.data,
                error: null,
                loading: false
            })
        } catch (err) {
            // console.log(err)
            setState({
                // error: err,
                error: err.message,
                loading: true
            })
        }
    }

    useEffect(() => {
        axiosCall(url)
    }, [url])

    return state
}

export default useAxios
