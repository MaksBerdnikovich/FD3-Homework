import {useEffect} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {
    fetchMovies,
    selectIsLoading,
    selectMovies,
} from '../../redux/slices/moviesSlice';
//import {selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter} from '../../redux/slices/filterSlice';

import MoviesGrid from "../../components/Movies/MoviesGrid";
import Pagination from "../../components/Pagination/Pagination";

import './Movies.scss';
import Loader from "../../components/System/Loader";
import Hero from "../../components/Hero/Hero";
import Sorting from "../../components/Sorting/Sorting";


const Movies = () => {
    const movies = useSelector(selectMovies)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const {pageNumber = 1} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [])

    useEffect(() => {
        if (isNaN(+pageNumber) || pageNumber > 5) navigate('/404page')
    }, [pageNumber])



    //const titleFilter = useSelector(selectTitleFilter);
    //const authorFilter = useSelector(selectAuthorFilter);
    //const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter);


    // const handleDeleteBook = (id) => {
    //     dispatch(deleteBook(id));
    // };

    // const filteredBooks = movies.filter((book) => {
    //     const matchesTitle = book.title
    //         .toLowerCase()
    //         .includes(titleFilter.toLowerCase());
    //     const matchesAuthor = book.author
    //         .toLowerCase()
    //         .includes(authorFilter.toLowerCase());
    //     const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true;
    //     return matchesTitle && matchesAuthor && matchesFavorite;
    // });
    //
    // const highlightMatch = (text, filter) => {
    //     if (!filter) return text;
    //
    //     const regex = new RegExp(`(${filter})`, 'gi');
    //
    //     return text.split(regex).map((substring, i) => {
    //         if (substring.toLowerCase() === filter.toLowerCase()) {
    //             return (
    //                 <span key={i} className="highlight">
    //                     {substring}
    //                 </span>
    //             );
    //         }
    //         return substring;
    //     });
    // };

    // PAGINATION
    const handleItemsPerPage = (key) => {
        // setItemsPerPage(+key)
        // setCurrentPage(CURRENT_PAGE)
        // setFilteredMoviesAction({perPage: key})
    }


    const ITEMS_PER_PAGE = 50
    const totalPages = Math.ceil(movies.length / ITEMS_PER_PAGE)
    const indexLastPage = pageNumber * ITEMS_PER_PAGE
    const indexFirstPage = indexLastPage - ITEMS_PER_PAGE

    const moviesPaginated = movies.slice(indexFirstPage, indexLastPage)

    return (
        <>
            <Hero title={`IMDB top 250 movie listing - Page ${pageNumber}`}/>

            <div className="Movies">
                {isLoading && <Loader />}

                <div className="Container">
                    <div className="MoviesRow">
                        <div className="MoviesCol MoviesCol-start">
                            {/*<Sorting*/}
                            {/*    moviesCount={filteredMoviesOutput.length}*/}
                            {/*    sortKey={sortKey}*/}
                            {/*    handleSorting={handleSorting}*/}
                            {/*/>*/}

                            {moviesPaginated.length > 0 &&
                                <MoviesGrid movies={moviesPaginated} />
                            }

                            {totalPages > 1 &&
                                <Pagination
                                    currentPage={+pageNumber}
                                    totalPages={totalPages}
                                    // itemsPerPage={itemsPerPage}
                                    // handleItemsPerPage={handleItemsPerPage}
                                />
                            }
                        </div>

                        <div className="MoviesCol MoviesCol-end">
                            {/*<Filter*/}
                            {/*    genres={filterParams(movies, 'genre')}*/}
                            {/*    directors={filterParams(movies, 'directors')}*/}
                            {/*    years={filterParams(movies, 'year')}*/}
                            {/*    ratings={filterParams(movies, 'rating')}*/}
                            {/*    genreKey={genreKey} handleGenre={handleGenre}*/}
                            {/*    directorsKey={directorsKey} handleDirectors={handleDirectors}*/}
                            {/*    yearFromKey={yearFromKey} handleYearFrom={handleYearFrom}*/}
                            {/*    yearToKey={yearToKey} handleYearTo={handleYearTo}*/}
                            {/*    ratingFromKey={ratingFromKey} handleRatingFrom={handleRatingFrom}*/}
                            {/*    ratingToKey={ratingToKey} handleRatingTo={handleRatingTo}*/}
                            {/*    handleClearFilter={handleClearFilter}*/}
                            {/*/>*/}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movies