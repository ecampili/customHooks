import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const Search = () => {
    const [ keyword, setKeyword ] = useState('')
    const [ location, goToLocation ] = useLocation()

    const handleSubmit = e => {
        e.preventDefault()
        goToLocation(`/search/${keyword}`)
    }

    const handleInputChange = e => {
        setKeyword(e.target.value)
    }

    return (
        <div>
            <form
                action = ""
                onSubmit = { handleSubmit }>
                <input
                    name = "search-bar"
                    onChange = { handleInputChange }
                    placeholder = "Search..."
                    type = "text"
                    value = { keyword }
                />
                <button type="submit">
                    Img-Lupa
                </button>
            </form>
        </div>
    )
}

export default Search
