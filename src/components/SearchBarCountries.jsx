import React, { useState } from 'react'
import { useAxios } from '../hooks/useAxios'
// import { useDebounce } from '../hooks/useDebounce'

const SearchBarCountries = () => {
    let url = 'https://restcountries.eu/rest/v2/all'

    const state = useAxios(url)
    const [ text, setText ] = useState('')
    const [ suggestions, setSuggestions ] = useState([])
    const [ itemFound, setItemFound ] = useState(true)

    const onChangeHandler = text => {
        let matches = []
        if (text.length > 0) {
            const res = state.data

            matches = res.filter(perItem => {
                const regex = new RegExp(`${text}`, 'gi')
                return perItem.name.match(regex)
            })

            setItemFound(matches.length !== 0 ? true : false)
        }

        setSuggestions(matches)
        setText(text)
    }

    const getSuggestions = () => {
        if (text.length > 0 && suggestions !== '' && !itemFound) {
            return <li>Search content not found</li>
        }

        return (
            <ul>
                { suggestions && suggestions.map((suggestion, i) =>
                    <li
                        key = { i }
                        onClick = { () => onSuggestHandler(suggestion.name.toLowerCase()) }
                        >
                        { `Country: ${suggestion.name}, Capital: ${suggestion.capital}` }
                    </li>
                )}
            </ul>
        )
    }

    const onSuggestHandler = text => {
        setText(text)
        setSuggestions([])
    }

    // const onClickOutside = () => {
    //     setTimeout ( () => {
    //         setText('')
    //         setSuggestions([])
    //     }, 100)
    // }

    // const onClickOutside = () => {
    //     useDebounce(true, 100, setText(''))
    //     useDebounce(true, 100, setSuggestions([]))
    // }

    return (
        <>
            <hr />
            <p>Checking search 3.</p>
            <form>
                <input
                    // onBlur = { () => onClickOutside() }
                    // onBlur = { () => onClickOutside }
                    onChange = { e => onChangeHandler(e.target.value.toLowerCase()) }
                    placeholder = "Search..."
                    type = "text"
                    value = { text }
                />

                { getSuggestions() }
            </form>
        </>
    )
}

export default SearchBarCountries
