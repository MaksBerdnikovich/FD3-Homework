import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {
    fetchMovies,
    selectIsLoading,
    selectMovies,
    toggleFavorite,
    toggleWatchlist
} from '../../redux/slices/moviesSlice';
//import {selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter} from '../../redux/slices/filterSlice';

import MoviesGrid from "./MoviesGrid";
import Pagination from "../Pagination/Pagination";

import './Movies.scss';
import Loader from "../System/Loader";


const Movies = ({movies, currentPage, isLoading}) => {
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
    const indexLastPage = currentPage * ITEMS_PER_PAGE
    const indexFirstPage = indexLastPage - ITEMS_PER_PAGE

    const moviesPaginated = movies.slice(indexFirstPage, indexLastPage)

    return (
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

                        <MoviesGrid movies={moviesPaginated} />

                        {totalPages > 1 &&
                            <Pagination
                                currentPage={currentPage}
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
    );
}

export default Movies