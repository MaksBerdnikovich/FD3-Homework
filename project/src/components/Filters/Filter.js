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
import Button from "../Form/Button";
import Label from "../Form/Label";
import Input from "../Form/Input";
import Select from "../Form/Select";


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

    console.log(filterParams(movies, 'genre'))

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
                                <Label text={'Movie name'} />
                                <Input value={nameFilter} onChange={handleNameFilterChange} placeholder={"Search for a movie"} />
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <Label text={'Genres & Subgenres'} />
                                <Select options={filterParams(movies, 'genre')} value={genreFilter} onChange={handleGenreFilterChange} />
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <Label text={'Directors'} />
                                <Select options={filterParams(movies, 'directors')} value={directorFilter} onChange={handleDirectorFilterChange} />
                            </div>
                        </div>

                        <div className="FormCol">
                            <div className="FormLine">
                                <Button onClick={handleClearFilter} text={'Clear Filter'}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter