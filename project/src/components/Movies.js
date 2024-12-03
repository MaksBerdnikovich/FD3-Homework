import {useEffect, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

import MovieItem from "./MovieItem";
import Sorting from "./Sorting";
import Pagination from "./Pagination";
import Filter from "./Filter";

import './Movies.scss';

const SORT_KEYS = ['name', 'rating', 'year']

const sortMovies = (movies, key) => {
    const sortedMovies = [...movies]

    if (!key || !SORT_KEYS.includes(key)) return sortedMovies

    sortedMovies.sort((a, b) => {
        if (key === 'name') return a[key] > b[key] ? 1 : -1

        return a[key] < b[key] ? 1 : -1
    })

    return sortedMovies
}

const Movies = ({movies}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)

    const [sortKey, setSortKey] = useState(query.sort)
    const [sortedMovies, setSortedMovies] = useState(sortMovies(movies, sortKey))

    useEffect(() => {
        if (!SORT_KEYS.includes(sortKey)) {
            navigate('.')
            setSortKey('')
        }
    }, [sortKey, navigate])

    const handleSorting = (key) => {
        navigate(`?sort=${key}`)

        setSortKey(key)
        setSortedMovies(sortMovies(movies, key))
    }

    return (
        <div className="Movies">
            <div className="Container">
                <div className="MoviesRow">
                    <div className="MoviesCol MoviesCol-start">
                        <Sorting moviesCount={sortedMovies.length} sortKey={sortKey} handleSorting={handleSorting} />

                        <div className="MoviesGrid">
                            <div className="MoviesGridRow">
                                {sortedMovies.map(movie => (
                                    <div className="MoviesGridCol" key={movie.imdb_url}>
                                        <MovieItem movie={movie} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <Pagination />
                    </div>

                    <div className="MoviesCol MoviesCol-end">
                        <Filter />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies