import axios from 'axios'
import { useState, useEffect } from 'react'

const useAxios = (url) => {
    const [ state, setState ] = useState({ data: null, error: null, loading: true })

    useEffect(() => {
        const axiosResource = async (url) => {
            try {
                const getCall = await axios.get(url)

                if (!getCall) {
                    throw new Error ({
                        err: true,
                        status: getCall.status,
                        statusText: getCall.statusText ? getCall.statusText : 'An error ocurred.'
                    })
                }

                const resData = getCall

                setState({
                    data: resData.data,
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

        axiosResource(url)
    }, [url])

    return state
}

export default useAxios
