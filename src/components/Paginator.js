import React from 'react'

const Paginator = ({
    pages,
    handleClick,
    currentPage,
    minPageNumberLimit,
    maxPageNumberLimit,
    pageNumberLimit,
    setminPageNumberLimit,
    setcurrentPage,
    setmaxPageNumberLimit,
    setpageNumberLimit,

}) => {

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={handleClick}
                    className={currentPage === number ? "active" : null}
                >
                    {number}
                </li>
            );
        } else {
            return null;
        }
    });

    const handleNextbtn = () => {
        setcurrentPage(currentPage + 1);

        if (currentPage + 1 > maxPageNumberLimit) {
            setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };

    const handlePrevbtn = () => {
        setcurrentPage(currentPage - 1);

        if ((currentPage - 1) % pageNumberLimit === 0) {
            setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
            setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    let pageIncrementBtn = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
    }

    let pageDecrementBtn = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
    }




    return (
        <ul className="page-numbers">
            <li>
                <button
                    onClick={handlePrevbtn}
                    disabled={currentPage === pages[0] ? true : false}
                >
                    Prev
                </button>
            </li>
            {pageDecrementBtn}
            {renderPageNumbers}

            {/* {pages.map(p => (
                <li key={p} id={p} onClick={handleClick}
                    className={currentPage === p ? "active" : null}>
                    {p}
                </li>
            ))} */}
            {/* {renderPageNumbers} */}
            {pageIncrementBtn}

            <li>
                <button
                    onClick={handleNextbtn}
                    disabled={currentPage === pages[pages.length - 1] ? true : false}
                >
                    Next
                </button>
            </li>
        </ul>
    )

    // return (
    //     <ul className="pageNumbers">
    //         <li>
    //             <button
    //                 onClick={handlePrevbtn}
    //                 disabled={currentPage == pages[0] ? true : false}
    //             >
    //                 Prev
    //             </button>
    //         </li>
    //         {pageDecrementBtn}
    //         {renderPageNumbers}
    //         {pageIncrementBtn}

    //         <li>
    //             <button
    //                 onClick={handleNextbtn}
    //                 disabled={currentPage == pages[pages.length - 1] ? true : false}
    //             >
    //                 Next
    //             </button>
    //         </li>
    //     </ul>
    // )
}

export default Paginator
