import { useState, useEffect } from 'react'
import axios from 'axios'

export const useAxios = (url) => {
    const [ state, setState ] = useState({ data: null, error: null, loading: true })

    // const httpReqMethod = options
    // let call = ''

    // switch(httpReqMethod) {
    //     case 'post':
    //         call = axios.post(url)
        
    //     case 'put':
    //         call = axios.put(url)
        
    //     case 'delete':
    //         call = axios.delete(url)
        
    //     default:
    //         call = axios.get(url)
    // }

    const axiosCall = async (url) => {
        try {
            const res = await axios.get(url)

            if (!res.data) {
                throw new Error ({
                    err: true,
                    status: res.status,
                    statusText: res.statusText ? res.statusText : 'An error ocurred.'
                })
            }

            setState({
                data: res.data,
                error: null,
                loading: false
            })
        } catch (err) {
            // console.log(err)
            setState({
                // error: err,
                error: err.message,
                loading: false
            })
        }
    }

    useEffect(() => {
        axiosCall(url)
    }, [url])

    return state
}
