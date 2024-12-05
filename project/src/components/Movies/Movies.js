import {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux';
//import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs';
import {
    fetchMovies,
    selectIsLoading,
    selectMovies,
    toggleFavorite,
    toggleWatchlist
} from '../../redux/slices/moviesSlice';
//import {selectTitleFilter, selectAuthorFilter, selectOnlyFavoriteFilter} from '../../redux/slices/filterSlice';

import MoviesGrid from "./MoviesGrid";

import './Movies.scss';


const Movies = ({movies}) => {
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

    return (
        <div className="Movies">
            <div className="Container">
                <div className="MoviesRow">
                    <div className="MoviesCol MoviesCol-start">
                        {/*<Sorting*/}
                        {/*    moviesCount={filteredMoviesOutput.length}*/}
                        {/*    sortKey={sortKey}*/}
                        {/*    handleSorting={handleSorting}*/}
                        {/*/>*/}

                        <MoviesGrid movies={movies} />

                        {/*{totalPages > 1 &&*/}
                        {/*    <Pagination*/}
                        {/*        currentPage={currentPage}*/}
                        {/*        totalPages={totalPages}*/}
                        {/*        itemsPerPage={itemsPerPage}*/}
                        {/*        handleItemsPerPage={handleItemsPerPage}*/}
                        {/*        handlePagination={handlePagination}*/}
                        {/*    />*/}
                        {/*}*/}
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