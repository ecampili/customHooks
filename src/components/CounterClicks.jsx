import React from 'react'

////////////// Hook counter clicks import //////////////
import useCounterClicks from '../hooks/useCounterClicks'
////////////////////////////////////////////////////////

const CounterClicks = () => {
    ///////////// Hook counter clicks use its states /////////////
    const [ counter, increment, decrement, reset ] = useCounterClicks()
    //////////////////////////////////////////////////////////////

    return (
        <>
            {/* Hook counter clicks validation */}
            <hr />
            <div>
                <p>Checking counter clicks in order to use depending on your needs.</p>
                <p>Clicks: { counter }</p>
                <button
                    onClick = { increment }>
                    Aumentar
                </button>
                <button
                    onClick = { decrement }>
                    Disminuir
                </button>
                <button
                    onClick = { reset }>
                    Reiniciar
                </button>
            </div>
        </>
    )
}

export default CounterClicks
