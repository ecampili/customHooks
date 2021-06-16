import { useState } from 'react'

const usePagination = (array, perPage = 5) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(perPage); //para despues poder agregar selector de cuantas paginas

    const [pageNumberLimit, setpageNumberLimit] = useState(5);
    const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
    const [minPageNumberLimit, setminPageNumberLimit] = useState(0);



    if (!array) return {
        currentItems: []
    }

    const pages = [];
    for (let i = 1; i <= Math.ceil(array.length / itemsPerPage); i++) {
        pages.push(i)//  array.length =40  40/12 = 3.3333  el MathCeil = 4  [1,2,3,4]
    }

    const indexOfLastItem = currentPage * itemsPerPage;// 1*12=12  2*12=24 3*12=36 4*12=48
    const indexOfFirstItem = indexOfLastItem - itemsPerPage; //12-12=0 24-12=12 36-12=24 48-12=36
    const currentItems = array.slice(indexOfFirstItem, indexOfLastItem) //0-12 12-24 24-36 36-48

    const handleClick = (e) => {
        setCurrentPage(Number(e.target.id))  // esto va a cambiar el indexOfLastItem
    }

    return {
        currentItems,
        currentPage,
        handleClick,
        pages,
        pageNumberLimit,
        maxPageNumberLimit,
        minPageNumberLimit,
        setCurrentPage,
        setpageNumberLimit,
        setmaxPageNumberLimit,
        setminPageNumberLimit,
    }

}

export default usePagination
