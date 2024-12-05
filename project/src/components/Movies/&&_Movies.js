import {useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import queryString from "query-string";

import Sorting from "../Sorting/Sorting";
import Pagination from "../Pagination/Pagination";
import Filter from "../Filters/Filter";

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
        default:
            return {}
    }
}

const filterQuery = (query, params, str = true) => {
    const combineParams = [query, params].reduce((accumulator, current) => {
        return { ...accumulator, ...current }
    }, {})

    for (const key in combineParams) {
        if (combineParams[key] === '' ) delete combineParams[key]
    }

    const searchParams = new URLSearchParams(combineParams).toString()

    return str ? `?${searchParams}` : combineParams
}

const filterMovies = (movies, keys) => {
    const filterMovies = [...movies]

    if (Object.keys(keys).length === 0) return filterMovies

    const outputFilterMovies = filterMovies.filter(movie =>
        (keys.genre ? movie.genre.includes(keys.genre) : movie) &&
        (keys.directors ? movie.directors.includes(keys.directors) : movie) &&
        (keys.yearFrom ? movie.year >= keys.yearFrom : movie) &&
        (keys.yearTo ? movie.year <= keys.yearTo : movie) &&
        (keys.ratingFrom ? movie.rating >= keys.ratingFrom : movie) &&
        (keys.ratingTo ? movie.rating <= keys.ratingTo : movie)
    )

    if (!keys.order) return outputFilterMovies

    return outputFilterMovies.sort((a, b) => {
        if (keys.order === 'name') return a[keys.order] > b[keys.order] ? 1 : -1
        return a[keys.order] < b[keys.order] ? 1 : -1
    })
}

const Movies = ({movies}) => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)

    const [sortKey, setSortKey] = useState(query.order || '')
    const [genreKey, setGenreKey] = useState(query.genre || '')
    const [directorsKey, setDirectorsKey] = useState(query.directors || '')
    const [yearFromKey, setYearFromKey] = useState(query.yearFrom || '')
    const [yearToKey, setYearToKey] = useState(query.yearTo || '')
    const [ratingFromKey, setRatingFromKey] = useState(query.ratingFrom || '')
    const [ratingToKey, setRatingToKey] = useState(query.ratingTo || '')
    const [itemsPerPage, setItemsPerPage] = useState(+query.perPage || ITEMS_PER_PAGE)
    const [currentPage, setCurrentPage] = useState(+query.page || CURRENT_PAGE)
    const [filteredMovies, setFilteredMovies] = useState(filterMovies(movies, query))

    const setFilteredMoviesAction = (params) => {
        navigate(filterQuery(query, params))
        setFilteredMovies(filterMovies(movies, filterQuery(query, params, false)))
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

    const handlePagination = (key) => {
        setCurrentPage(key)
        setFilteredMoviesAction({page: key})
    }

    const handleItemsPerPage = (key) => {
        setItemsPerPage(+key)
        setCurrentPage(CURRENT_PAGE)
        setFilteredMoviesAction({perPage: key})
    }

    const handleClearFilter = () => {
        navigate('.')
        setFilteredMovies(filterMovies(movies, {}))

        setGenreKey('')
        setDirectorsKey('')
        setYearFromKey('')
        setYearToKey('')
        setRatingFromKey('')
        setRatingToKey('')
        setSortKey('')
        setCurrentPage(CURRENT_PAGE)
        setItemsPerPage(ITEMS_PER_PAGE)
    }

    const totalPages = Math.ceil(filteredMovies.length / itemsPerPage)

    const indexLastPage = currentPage * itemsPerPage
    const indexFirstPage = indexLastPage - itemsPerPage

    const filteredMoviesOutput = filteredMovies.slice(indexFirstPage, indexLastPage)

    if (currentPage > totalPages) {
        setCurrentPage(CURRENT_PAGE)
        navigate(filterQuery(query, {page: CURRENT_PAGE}))
    }

    return (
        <div className="Movies">
            <div className="Container">
                <div className="MoviesRow">
                    <div className="MoviesCol MoviesCol-start">
                        <Sorting
                            moviesCount={filteredMoviesOutput.length}
                            sortKey={sortKey}
                            handleSorting={handleSorting}
                        />

                        <MoviesGrid movies={filteredMoviesOutput} />

                        {totalPages > 1 &&
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                itemsPerPage={itemsPerPage}
                                handleItemsPerPage={handleItemsPerPage}
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