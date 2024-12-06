import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    resetFilters, selectDirectorFilter, selectGenreFilter,
    selectNameFilter,
    setDirectorFilter,
    setGenreFilter,
    setNameFilter
} from "../../redux/slices/filterSlice";
import {selectMovies} from "../../redux/slices/moviesSlice";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";
import {filterParams, filterQuery} from "../../utils/utils";

import './Filter.scss';


const Filter = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const nameFilter = useSelector(selectNameFilter)
    const genreFilter = useSelector(selectGenreFilter)
    const directorFilter = useSelector(selectDirectorFilter)
    const movies = useSelector(selectMovies)
    const dispatch = useDispatch()

    const handleNameFilterChange = (e) => {
        dispatch(setNameFilter(e.target.value))
    }

    const handleGenreFilterChange = (e) => {
        navigate(filterQuery(query, {genre: e.target.value}))
        dispatch(setGenreFilter(e.target.value))
    }

    const handleDirectorFilterChange = (e) => {
        navigate(filterQuery(query, {director: e.target.value}))
        dispatch(setDirectorFilter(e.target.value))
    }
    
    const handleClearFilter = () => {
        navigate('.')
        dispatch(resetFilters())
    }

    return (
        <div className="Filter">
            <div className="FilterTitle">
                <h4>Filter for a movies</h4>
            </div>

            <div className="FilterForm">
                <div className="Form">
                    <div className="FormRow">
                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Movie name</label>
                                <input value={nameFilter} type="text" onChange={handleNameFilterChange} placeholder="Search for a movie" />
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Genres & Subgenres</label>
                                <select value={genreFilter} onChange={handleGenreFilterChange}>
                                    <option value=''>Choose an option</option>
                                    {filterParams(movies, 'genre').map((genre, i) => <option key={i} value={genre}>{genre}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <label>Directors</label>
                                <select value={directorFilter} onChange={handleDirectorFilterChange}>
                                    <option value=''>Choose an option</option>
                                    {filterParams(movies, 'directors').map((director, i) => <option key={i} value={director}>{director}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <button type="button" onClick={handleClearFilter}>Clear Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter