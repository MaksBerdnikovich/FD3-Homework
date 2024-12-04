import React from "react";

import './Pagination.scss';

const Pagination = ({currentPage, totalPages, perPage, perPageKey, handlePerPage, handlePagination}) => {
    const paginationList = [];
    for (let i = 0; i < totalPages; i++) {
        paginationList.push(
            <li key={i}>
                <button onClick={() => handlePagination(i + 1)} className={+currentPage === i + 1 ? 'active' : ''}>
                    {i + 1}
                </button>
            </li>
        )
    }

    return (
        <div className="Pagination">
            <div className="PaginationForm">
                <label>Movies per page:</label>

                <select value={perPageKey} onChange={e => handlePerPage(e.target.value)}>
                    {perPage.map((count, i) => <option key={i} value={count}>{count < 250 ? count : 'All'} Movies</option>)}
                </select>
            </div>

            <div className="PaginationList">
                <span>Page {currentPage} of {totalPages}:</span>

                <ul>
                    <li>
                        <button onClick={() => handlePagination(currentPage - 1)} disabled={currentPage === 1}>Prev</button>
                    </li>

                    {paginationList}

                    <li>
                        <button onClick={() => handlePagination(currentPage + 1)} disabled={currentPage === totalPages}>Next</button>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Pagination)