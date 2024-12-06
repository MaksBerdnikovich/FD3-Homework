import React, {useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {toggleFavorite, toggleWatchlist, updateMovies} from '../../redux/slices/moviesSlice';
import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs';
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

import './MoviesItem.scss';
import {selectNameFilter} from "../../redux/slices/filterSlice";
import {highlightMatch} from "../../utils/utils";

const MoviesItem = ({movie}) => {
    const nameFilter = useSelector(selectNameFilter)
    const dispatch = useDispatch()
    const {pathname} = useLocation();
    const [imgSrc, setImgSrc] = useState(movie.thumb_url)

    const [isToggleFavorite, setIsToggleFavorite] = useState(false)
    const [isToggleWatchlist, setIsToggleWatchlist] = useState(false)

    const getPathname = (path) => path.replace(/\//g, '')

    const handleImgError = () => setImgSrc('/cm-img.png')

    const handleToggleFavorite = (id) => {
        setIsToggleFavorite(true)

        setTimeout(() => {
            dispatch(updateMovies(id))
            dispatch(toggleFavorite(id))
        }, 400)
    }

    const handleToggleWatchlist = (id) => {
        setIsToggleWatchlist(true)

        setTimeout(() => {
            dispatch(updateMovies(id))
            dispatch(toggleWatchlist(id))
        }, 400)
    }

    return (
        <div className={`MoviesItem ${(isToggleFavorite && getPathname(pathname) === 'favorite') || (isToggleWatchlist && getPathname(pathname) === 'watchlist') ? 'MoviesItem-toggle' : ''}`}>
            <div className="MoviesItemLink">
                <Link to={`/movies/${movie.slug}`}>
                    <div className="MoviesItemImage">
                        <img src={imgSrc} onError={handleImgError} height="260" alt={movie.name}/>
                    </div>

                    <div className="MoviesItemTitle">
                        <h6>{highlightMatch(movie.name, nameFilter)} <sub>/ {movie.year}</sub></h6>
                    </div>
                </Link>
            </div>

            <div className="MoviesItemBlock">
                <div className="MoviesItemRating"><h6>{movie.rating}</h6> / 10</div>

                <div className="MoviesItemAction">
                    <ul>
                        <li>
                            <button onClick={() => handleToggleFavorite(movie.slug)} className="AddToFavorite" type="button" title={movie.isFavorite ? "Remove from Favorite" : "Add to Favorite"}>
                                {movie.isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleToggleWatchlist(movie.slug)} className="AddToWatchlist" type="button" title={movie.isWatchlist ? "Remove from Watchlist" : "Add to Watchlist"}>
                                {movie.isWatchlist ? <BsBookmarkStarFill/> : <BsBookmarkStar/>}
                            </button>

                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default React.memo(MoviesItem)