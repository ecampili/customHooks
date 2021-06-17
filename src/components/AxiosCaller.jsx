import React from 'react'

//////////////// Hook axios call import ////////////////
import useAxios from '../hooks/useAxios'
////////////////////////////////////////////////////////

const AxiosCaller = () => {
    // let url = 'http://localhost:3001'
    let url = 'https://jsonplaceholder.typicode.com/users'

    /////////////// Hook axios call use its states ///////////////
    const state = useAxios(url)
    //////////////////////////////////////////////////////////////

    return (
        <>
            {/* Hook axios call validation */}
            <hr />
            <div>
                <p>Checking axios call in order to use depending on your needs.</p>
                <p>Data: { JSON.stringify(state.data) }</p>
                <p>Error: { JSON.stringify(state.error) }</p>
                <p>Loading: { JSON.stringify(state.loading) }</p>
            </div>
        </>
    )
}

export default AxiosCaller
