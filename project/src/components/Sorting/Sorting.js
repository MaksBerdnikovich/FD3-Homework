import React from "react";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {filterQuery} from "../../utils/utils";
import {useDispatch, useSelector} from "react-redux";
import {selectOrderFilter, setOrderFilter} from "../../redux/slices/filterSlice";

import './Sorting.scss';

const Sorting = ({allCount, currentCount}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const orderFilter = useSelector(selectOrderFilter)
    const dispatch = useDispatch()

    const handleSortingChange = (e) => {
        navigate(filterQuery(query, {order: e.target.value}))
        dispatch(setOrderFilter(e.target.value))
    }

    return (
        <div className="Sorting">
            <div className="SortingTotal">Found <span>{currentCount} of {allCount}</span> movies in page</div>

            <div className="SortingForm">
                <label>Sort by:</label>
                <select value={orderFilter} onChange={handleSortingChange}>
                    <option value="">Choose an option</option>
                    <option value="rating">IMDb rating</option>
                    <option value="name">Alphabetical</option>
                    <option value="year">Release date</option>
                </select>
            </div>
        </div>
    )
}

export default Sorting