import React from "react";
import './Sorting.scss';

const Sorting = ({moviesCount, sortKey, handleSorting}) => {
    return (
        <div className="Sorting">
            <div className="SortingTotal">Found <span>{moviesCount}</span> movies in total</div>

            <div className="SortingForm">
                <label>Sort by:</label>
                <select value={sortKey} onChange={e => handleSorting(e.target.value)}>
                    <option value>Choose an option</option>
                    <option value="name">Alphabetical</option>
                    <option value="rating">IMDb rating</option>
                    <option value="year">Release date</option>
                </select>
            </div>
        </div>
    )
}

export default React.memo(Sorting)