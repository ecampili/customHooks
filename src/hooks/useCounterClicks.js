import { useState } from 'react'

const useCounterClicks = (initialValue=0) => {
    const [ counter, setCounter ] = useState(initialValue)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1)
        }
        return
    }

    const reset = () => {
        setCounter(initialValue)
    }

    return [
        counter,
        increment,
        decrement,
        reset
    ]
}

export default useCounterClicks
