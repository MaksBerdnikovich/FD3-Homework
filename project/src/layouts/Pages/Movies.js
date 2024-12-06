import {useEffect} from "react";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {
    fetchMovies,
    selectIsLoading,
    selectMovies,
} from '../../redux/slices/moviesSlice';
import {
    selectDirectorFilter,
    selectGenreFilter,
    selectNameFilter,
    selectOrderFilter, selectPerPageFilter, setDirectorFilter, setGenreFilter, setOrderFilter, setPerPageFilter,
} from "../../redux/slices/filterSlice";

import MoviesGrid from "../../components/Movies/MoviesGrid";
import Pagination from "../../components/Pagination/Pagination";

import './Movies.scss';
import Loader from "../../components/System/Loader";
import Hero from "../../components/Hero/Hero";
import Sorting from "../../components/Sorting/Sorting";
import Filter from "../../components/Filters/Filter";
import queryString from "query-string";
import {filterQuery} from "../../utils/utils";


const Movies = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const movies = useSelector(selectMovies)
    const isLoading = useSelector(selectIsLoading)
    const nameFilter = useSelector(selectNameFilter)
    const genreFilter = useSelector(selectGenreFilter) || query.genre
    const directorFilter = useSelector(selectDirectorFilter) || query.director
    const orderFilter = useSelector(selectOrderFilter) || query.order
    const perPageFilter = useSelector(selectPerPageFilter) || query.perPage
    const dispatch = useDispatch()
    const {pageNumber = 1} = useParams()

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [movies.length, dispatch])

    useEffect(() => {
        if (Object.keys(query).length > 0) {
            if (query.genre) dispatch(setGenreFilter(query.genre))
            if (query.director) dispatch(setDirectorFilter(query.director))
            if (query.order) dispatch(setOrderFilter(query.order))
            if (query.perPage) dispatch(setPerPageFilter(query.perPage))
        }
    }, [query, dispatch])

    useEffect(() => {
        if (isNaN(+pageNumber) || pageNumber > 5) {
            navigate('/404page')
        }

        if (+pageNumber > 1 && Object.keys(query).length > 0) {
            navigate(`/${filterQuery(query, {})}`)
        }

    }, [navigate, pageNumber, query])

    const filteredMovies = movies.filter((movie) => {
        const matchesName = nameFilter ? movie.name.toLowerCase().includes(nameFilter.toLowerCase()) : true
        const matchesGenre = genreFilter ? movie.genre.includes(genreFilter) : true
        const matchesDirector = directorFilter ? movie.directors.includes(directorFilter) : true

        return matchesName && matchesGenre && matchesDirector
    });

    const totalPages = Math.ceil(filteredMovies.length / perPageFilter)
    const indexLastPage = pageNumber * perPageFilter
    const indexFirstPage = indexLastPage - perPageFilter

    const paginatedMovies = filteredMovies.slice(indexFirstPage, indexLastPage)

    if (orderFilter) {
        paginatedMovies.sort((a, b) => {
            if (orderFilter === 'name') return a[orderFilter] > b[orderFilter] ? 1 : -1
            return a[orderFilter] < b[orderFilter] ? 1 : -1
        })
    }

    return (
        <>
            <Hero title={`IMDB top 250 movie listing - Page ${pageNumber}`}/>

            <div className="Movies">
                {isLoading && <Loader/>}

                <div className="Container">
                    <div className="MoviesRow">
                        <div className="MoviesCol MoviesCol-start">
                            {paginatedMovies.length > 0 &&
                                <>
                                    <Sorting allCount={movies.length} currentCount={paginatedMovies.length}/>

                                    <MoviesGrid movies={paginatedMovies}/>

                                    {totalPages > 1 && <Pagination currentPage={+pageNumber} totalPages={totalPages}/>}
                                </>
                            }
                        </div>

                        <div className="MoviesCol MoviesCol-end">
                            <Filter/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies