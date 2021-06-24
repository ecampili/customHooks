import React, { useState } from 'react'
import { useAxios } from '../hooks/useAxios'
import { useDebounce } from '../hooks/useDebounce'

const Search = () => {
    // url a la que se consultara
    let url = 'https://reqres.in/api/users'

    // estado inicial de la informacion traida con axios
    const state = useAxios(url)
    // estado inicial del texto en el input de la search
    const [ text, setText ] = useState('')
    // estado inicial de las sugerencias con base en el texto del input de la search
    const [ suggestions, setSuggestions ] = useState([])

    const onChangeHandler = text => {
        let matches = []
        if (text.length > 0) {
            const res = state.data
            // console.log(res)

            matches = res.data.filter(perItem => {
                const regex = new RegExp(`${text}`, 'gi')
                return perItem.email.match(regex)
            })
        }

        // console.log('these are the search matches', matches)
        setSuggestions(matches)
        setText(text)
    }

    const onSuggestHandler = text => {
        setText(text)
        setSuggestions([])

        // Adicionar aca cualquier otra accion deseada al hacer click en la sugerencia
    }

    return (
        <>
            <hr />
            <p>Checking search 2.</p>
            <form>
                <input
                    onChange = { e => onChangeHandler(e.target.value) }
                    type = "text"
                    value = { text }
                />
                
                { suggestions && suggestions.map((suggestion, i) =>
                    <div
                        key = { i }
                        onClick = { () => onSuggestHandler(suggestion.email) }>
                        { suggestion.email }
                    </div>
                )}
            </form>
        </>
    )
}

export default Search
