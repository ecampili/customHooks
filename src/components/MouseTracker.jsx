import React from 'react'

////////////// Hook mouse position import //////////////
import useMousePosition from '../hooks/useMousePosition'
////////////////////////////////////////////////////////

const MouseTracker = () => {
    ///////////// Hook mouse position use its states /////////////
    const position = useMousePosition()
    //////////////////////////////////////////////////////////////

    return (
        <>
            {/* Hook mouse position validation */}
            <hr />
            <p>Checking mouse tracking position in order to use depending on your needs.</p>
            <p>Position on X axis: { position.x }</p>
            <p>Position on Y axis: { position.y }</p>
        </>
    )
}

export default MouseTracker
