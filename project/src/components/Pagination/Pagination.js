import React from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";

import {filterQuery} from "../../utils/utils";
import {selectPerPageFilter, setPerPageFilter} from "../../redux/slices/filterSlice";
import queryString from "query-string";
import {useDispatch, useSelector} from "react-redux";

import './Pagination.scss';

const Pagination = ({currentPage, totalPages}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const perPageFilter = useSelector(selectPerPageFilter)
    const dispatch = useDispatch()

    const paginationList = [];
    for (let i = 0; i < totalPages; i++) {
        paginationList.push(
            <li key={i}>
                <Link to={`/${i + 1}/`} className={currentPage === i + 1 ? 'active' : ''}>{i + 1}</Link>
            </li>
        )
    }

    const handleItemsPerPageChange = (e) => {
        navigate(filterQuery(query, {perPage: e.target.value}))
        dispatch(setPerPageFilter(e.target.value))
    }

    return (
        <div className="Pagination">
            <div className="PaginationForm">
                <label>Movies per page:</label>

                <select value={perPageFilter} onChange={handleItemsPerPageChange}>
                    <option value={60}>60 Movies</option>
                    <option value={100}>100 Movies</option>
                    <option value={160}>160 Movies</option>
                    <option value={250}>All Movies</option>
                </select>
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