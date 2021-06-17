import React from 'react'

/////////// Hook tracking window size import ///////////
import useWindowSize from '../hooks/useWindowSize'
////////////////////////////////////////////////////////

const WindowTracker = () => {
    ////////// Hook tracking window size use its states //////////
    const [ windowHeight, windowWidth ] = useWindowSize()
    //////////////////////////////////////////////////////////////

    return (
        <>
            {/* Hook tracking window size validation */}
            <hr />
            <div>
                <p>Checking window tracking size in order to use depending on your needs.</p>
                <p>height: { windowHeight }</p>
                <p>width: { windowWidth }</p>
            </div>
        </>
    )
}

export default WindowTracker
