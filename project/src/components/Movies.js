import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

import Sorting from "./Sorting";
import Pagination from "./Pagination";
import Filter from "./Filter";

import './Movies.scss';
import MoviesGrid from "./MoviesGrid";

const CURRENT_PAGE = 1
const ITEMS_PER_PAGE = 50

const filterParams = (movies, type) => {
    switch (type) {
        case 'genre':
        case 'directors':
            const items = movies.map(movie => movie[type])
            const uniqueItems = items.reduce((acc, arr) => {
                arr.forEach(item => {
                    if (!acc.includes(item)) acc.push(item)
                });
                return acc;
            }, []);

            return uniqueItems
        case 'year':
        case 'rating':
            const numbers = movies.map(movie => movie[type])
            const minNumber = numbers.reduce((min, current) => (current < min ? current : min), numbers[0])
            const maxNumber = numbers.reduce((max, current) => (current > max ? current : max), numbers[0])

            return {min: minNumber, max: maxNumber}
        case 'per_page':
            return [50, 100, 150, movies.length]
        default:
            return {}
    }
}

const filterQuery = (query, params, str = true) => {
    const combineParams = [query, params].reduce((accumulator, current) => {
        return { ...accumulator, ...current }
    }, {})

    const searchParams = new URLSearchParams(combineParams).toString()

    return str ? `?${searchParams}` : combineParams
}

const filterMovies = (movies, keys) => {
    const filteredMovies = [...movies]

    if (Object.keys(keys).length === 0) return filteredMovies

    return filteredMovies.filter(movie =>
        (keys.genre ? movie.genre.includes(keys.genre) : movie) &&
        (keys.directors ? movie.directors.includes(keys.directors) : movie) &&
        (keys.yearFrom ? movie.year >= keys.yearFrom : movie) &&
        (keys.yearTo ? movie.year <= keys.yearTo : movie) &&
        (keys.ratingFrom ? movie.rating >= keys.ratingFrom : movie) &&
        (keys.ratingTo ? movie.rating <= keys.ratingTo : movie)
    ).sort((a, b) => {
        if (keys.order === 'name') return a[keys.order] > b[keys.order] ? 1 : -1

        return a[keys.order] < b[keys.order] ? 1 : -1
    })
}

const Movies = ({movies}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)

    const [sortKey, setSortKey] = useState(query.order)
    const [genreKey, setGenreKey] = useState(query.genre)
    const [directorsKey, setDirectorsKey] = useState(query.directors)
    const [yearFromKey, setYearFromKey] = useState(query.yearFrom)
    const [yearToKey, setYearToKey] = useState(query.yearTo)
    const [ratingFromKey, setRatingFromKey] = useState(query.ratingFrom)
    const [ratingToKey, setRatingToKey] = useState(query.ratingTo)
    const [perPageKey, setPerPageKey] = useState(query.perPage || ITEMS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(query.page || CURRENT_PAGE)
    const [filteredMovies, setFilteredMovies] = useState(filterMovies(movies, query))

    const totalPages = Math.ceil(filteredMovies.length / perPageKey)
    const indexLastPage = +currentPage * perPageKey
    const indexFirstPage = indexLastPage - perPageKey

    const outputMoviesList = filteredMovies.slice(indexFirstPage, indexLastPage)

    if (+currentPage > totalPages) {
        setCurrentPage(1)
        navigate(filterQuery(query, {page: 1}))
    }

    const setFilteredMoviesAction = (params) => {
        setFilteredMovies(filterMovies(movies, filterQuery(query, params, false)))
        navigate(filterQuery(query, params))
    }

    const handleGenre = (key) => {
        setGenreKey(key)
        setFilteredMoviesAction({genre: key})
    }

    const handleDirectors = (key) => {
        setDirectorsKey(key)
        setFilteredMoviesAction({directors: key})
    }

    const handleYearFrom = (key) => {
        setYearFromKey(key)
        setFilteredMoviesAction({yearFrom: key})
    }

    const handleYearTo = (key) => {
        setYearToKey(key)
        setFilteredMoviesAction({yearTo: key})
    }

    const handleRatingFrom = (key) => {
        setRatingFromKey(key)
        setFilteredMoviesAction({ratingFrom: key})
    }

    const handleRatingTo = (key) => {
        setRatingToKey(key)
        setFilteredMoviesAction({ratingTo: key})
    }

    const handleSorting = (key) => {
        setSortKey(key)
        setFilteredMoviesAction({order: key})
    }

    const handlePerPage = (key) => {
        setPerPageKey(key)
        setFilteredMoviesAction({perPage: key})
    }

    const handlePagination = (key) => {
        setCurrentPage(key)
        setFilteredMoviesAction({page: key})
    }

    const handleClearFilter = () => {
        setGenreKey('')
        setDirectorsKey('')
        setYearFromKey('')
        setYearToKey('')
        setRatingFromKey('')
        setRatingToKey('')
        setSortKey('')
        setPerPageKey(ITEMS_PER_PAGE)
        setCurrentPage(CURRENT_PAGE)

        setFilteredMovies(filterMovies(movies, {}))
        navigate('.')
    }

    return (
        <div className="Movies">
            <div className="Container">
                <div className="MoviesRow">
                    <div className="MoviesCol MoviesCol-start">
                        <Sorting
                            moviesCount={outputMoviesList.length}
                            sortKey={sortKey}
                            handleSorting={handleSorting}
                        />

                        <MoviesGrid movies={outputMoviesList} />

                        {totalPages > 1 &&
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                perPage={filterParams(movies, 'per_page')}
                                perPageKey={perPageKey}
                                handlePerPage={handlePerPage}
                                handlePagination={handlePagination}
                            />
                        }
                    </div>

                    <div className="MoviesCol MoviesCol-end">
                        <Filter
                            genres={filterParams(movies, 'genre')}
                            directors={filterParams(movies, 'directors')}
                            years={filterParams(movies, 'year')}
                            ratings={filterParams(movies, 'rating')}
                            genreKey={genreKey} handleGenre={handleGenre}
                            directorsKey={directorsKey} handleDirectors={handleDirectors}
                            yearFromKey={yearFromKey} handleYearFrom={handleYearFrom}
                            yearToKey={yearToKey} handleYearTo={handleYearTo}
                            ratingFromKey={ratingFromKey} handleRatingFrom={handleRatingFrom}
                            ratingToKey={ratingToKey} handleRatingTo={handleRatingTo}
                            handleClearFilter={handleClearFilter}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movies