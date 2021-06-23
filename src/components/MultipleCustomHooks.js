import React from 'react'
import useFetch from '../hooks/useFetch'
import usePagination from '../hooks/usePagination';
import List from './List';

import Paginator from './Paginator';

import WindowTracker from './WindowTracker'
import MouseTracker from './MouseTracker'
import CounterClicks from './CounterClicks'
import Todos from './Todos'

import AxiosCaller from './AxiosCaller'

const MultipleCustomHooks = () => {
    //const posts = useFetch('https://jsonplaceholder.typicode.com/posts')
    const characters = useFetch('https://rickandmortyapi.com/api/character')
    // if (characters) { console.log(characters.data?.results) }

    const {
        pages,
        currentItems,
        currentPage,
        setCurrentPage,
        handleClick } = usePagination(characters.data?.results, 5)

    return (
        <>


            <div>
                <h1>Custom Hooks</h1>
            </div>
            <div className="container">
                {(characters.loading)
                    ?
                    (<h2>loading....</h2>)
                    :
                    (characters.error) ?
                        (<h2>{characters.error}</h2>)
                        :
                        <>
                            <Paginator
                                pages={pages}
                                handleClick={handleClick}
                                currentPage={currentPage}
                                setcurrentPage={setCurrentPage}

                            />
                            <List currentItems={currentItems} />
                        </>
                }
            </div>


            <WindowTracker />

            <MouseTracker />

            <CounterClicks />

            <Todos />

            <AxiosCaller />

        </>
    )

}

export default MultipleCustomHooks
