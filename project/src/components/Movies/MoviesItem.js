import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from 'react-redux';
import {toggleFavorite, toggleWatchlist} from '../../redux/slices/moviesSlice';
import {BsBookmarkStarFill, BsBookmarkStar} from 'react-icons/bs';
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";

import './MoviesItem.scss';

const MoviesItem = ({movie}) => {
    const dispatch = useDispatch()
    const [imgErrorSrc, setImgErrorSrc] = useState(movie.thumb_url)

    const handleImgError = () => setImgErrorSrc('/cm-img.png')

    const handleToggleFavorite = (id) => dispatch(toggleFavorite(id))

    const handleToggleWatchlist = (id) => dispatch(toggleWatchlist(id))

    return (
        <div className="MoviesItem">
            <div className="MoviesItemLink">
                <Link to={movie.imdb_url}>
                    <div className="MoviesItemImage">
                        <img src={imgErrorSrc} onError={handleImgError} height="260" alt={movie.name}/>
                    </div>

                    <div className="MoviesItemTitle">
                        <h6>{movie.name}</h6> <span>/ {movie.year}</span>
                    </div>
                </Link>
            </div>

            <div className="MoviesItemBlock">
                <div className="MoviesItemRating"><h6>{movie.rating}</h6> / 10</div>

                <div className="MoviesItemAction">
                    <ul>
                        <li>
                            <button onClick={() => handleToggleFavorite(movie.id)} className="AddToFavorite" type="button" title="Add to Favorite">
                                {movie.isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleToggleWatchlist(movie.id)} className="AddToWatchlist" type="button" title="Add to Watchlist">
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