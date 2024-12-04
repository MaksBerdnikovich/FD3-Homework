import {Link} from "react-router-dom";
import './Pagination.scss';
import {useState} from "react";


const Pagination = ({currentPage, totalPages, handlePagination}) => {
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
                <select>
                    <option defaultValue="10">10 Movies</option>
                    <option defaultValue="20">20 Movies</option>
                    <option defaultValue="ALL">All Movies</option>
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

export default Pagination