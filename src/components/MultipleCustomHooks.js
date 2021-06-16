import React from 'react'
import useFetch from '../hooks/useFetch'
import usePagination from '../hooks/usePagination';
import List from './List';
import Paginator from './Paginator';


const MultipleCustomHooks = () => {

    //const APP_ID = '5ffd995bfae5180ad0926c02';
    //const options = { headers: { 'app-id': APP_ID } }

    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    //console.log(posts)



    //const users = useFetch('https://dummyapi.io/data/api/user?page=1&limit=50', options)
    const {
        pages,
        currentItems,
        currentPage,
        handleClick,
        pageNumberLimit,
        maxPageNumberLimit,
        minPageNumberLimit,
        setCurrentPage,
        setpageNumberLimit,
        setmaxPageNumberLimit,
        setminPageNumberLimit, } = usePagination(posts.data, 6)



    //-----------------------------------------------------

    // const [itemsPerPage, setItemsPerpage] = useState(10); //para despues poder agregar selector de cuantas paginas
    // const [currentPage, setCurrentPage] = useState(1);

    // const pages = [];
    // for (let i = 1; i <= Math.ceil(users.data?.length / itemsPerPage); i++) {
    //     pages.push(i)//  filteredPokemons =40  40/12 = 3.3333  el MathCeil = 4  [1,2,3,4]
    // }

    // const indexOfLastItem = currentPage * itemsPerPage;// 1*12=12  2*12=24 3*12=36 4*12=48
    // const indexOfFirstItem = indexOfLastItem - itemsPerPage; //12-12=0 24-12=12 36-12=24 48-12=36
    // const currentItems = users.data.slice(indexOfFirstItem, indexOfLastItem) //0-12 12-24 24-36 36-48

    // const handleClick = (e) => {
    //     setCurrentPage(Number(e.target.id))  // esto va a cambiar el indexOfLastItem
    // }

    //---------------------------------------------

    return (
        <>
            <div>
                <h1>Custom Hooks</h1>
            </div>
            <div className="container">
                {(posts.loading)
                    ?
                    (<h2>loading....</h2>)
                    :
                    (posts.error) ?
                        (<h2>{posts.error}</h2>)
                        :
                        <>
                            <Paginator
                                pages={pages}
                                handleClick={handleClick}
                                currentPage={currentPage}
                                minPageNumberLimit={minPageNumberLimit}
                                pageNumberLimit={pageNumberLimit}
                                maxPageNumberLimit={maxPageNumberLimit}
                                setcurrentPage={setCurrentPage}
                                setpageNumberLimit={setpageNumberLimit}
                                setmaxPageNumberLimit={setmaxPageNumberLimit}
                                setminPageNumberLimit={setminPageNumberLimit}
                            />
                            <List currentItems={currentItems} />
                        </>
                }
            </div>
        </>
    )

}

export default MultipleCustomHooks
