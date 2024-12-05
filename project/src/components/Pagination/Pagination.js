import React from "react";
import {Link} from "react-router-dom";

import './Pagination.scss';

const Pagination = ({currentPage, totalPages}) => {
    const paginationList = [];
    for (let i = 0; i < totalPages; i++) {
        paginationList.push(
            <li key={i}>
                <Link to={`/${i + 1}/`} className={currentPage === i + 1 ? 'active' : ''}>{i + 1}</Link>
            </li>
        )
    }

    return (
        <div className="Pagination">
            <div className="PaginationForm">
                <label>Movies per page:</label>

                {/*<select value={itemsPerPage} onChange={e => handleItemsPerPage(e.target.value)}>*/}
                {/*    <option value={50}>50 Movies</option>*/}
                {/*    <option value={100}>100 Movies</option>*/}
                {/*    <option value={150}>150 Movies</option>*/}
                {/*    <option value={250}>All Movies</option>*/}
                {/*</select>*/}
            </div>

            <div className="PaginationList">
                <span>Page {currentPage} of {totalPages}:</span>

                <ul>
                    {!(currentPage === 1) && <li><Link to={`/${currentPage - 1}/`}>Prev</Link></li>}

                    {paginationList}

                    {!(currentPage === totalPages) && <li><Link to={`/${currentPage + 1}/`}>Next</Link></li>}
                </ul>
            </div>
        </div>
    );
}

export default React.memo(Pagination)