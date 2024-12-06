import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {toggleFavorite, toggleWatchlist, updateMovies} from "../../redux/slices/moviesSlice";
import { GrFormPreviousLink } from "react-icons/gr";
import {MdFavorite, MdFavoriteBorder} from "react-icons/md";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs";

import './MovieDetails.scss';

const MovieDetails = ({movie}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState(movie.image_url);

    const handleError = () => setImgSrc('/cm-img.png')

    const handleGoBack = () => navigate(-1)

    const handleToggleFavorite = (id) => {
        dispatch(updateMovies(id))
        dispatch(toggleFavorite(id))
    }

    const handleToggleWatchlist = (id) => {
        dispatch(updateMovies(id))
        dispatch(toggleWatchlist(id))
    }

    return (
        <div className="MovieDetails">
            <div className="MovieDetailsOverlay" style={{backgroundImage: `url(${imgSrc})`}} />

            <div className="Container">
                <div className="MovieDetailsRow">
                    <div className="MovieDetailsCol MovieDetailsCol-start">
                        <div className="MovieDetailsImage">
                            <img src={imgSrc} onError={handleError} height="260" alt={movie.name} loading="lazy" />
                        </div>
                    </div>

                    <div className="MovieDetailsCol MovieDetailsCol-end">
                        <div className="MovieDetailsHead">
                            <div className="MovieDetailsTitle">
                                <h1>{movie.name}</h1> <h4>/ {movie.year}</h4>
                            </div>

                            <div className="MovieDetailsBack">
                                <button type="button" onClick={handleGoBack}><GrFormPreviousLink /> <span>Go Back</span></button>
                            </div>
                        </div>


                        <div className="MovieDetailsBlock">
                            <div className="MovieDetailsRating">
                                <h6>{movie.rating}</h6> / 10
                            </div>

                            <div className="MovieDetailsAction">
                                <ul>
                                    <li>
                                        <button onClick={() => handleToggleFavorite(movie.slug)} className="AddToFavorite" type="button">
                                            {movie.isFavorite ? <MdFavorite/> : <MdFavoriteBorder/>}
                                            <h6>{movie.isFavorite ? 'Remove from Favorite' : 'Add to Favorite'}</h6>
                                        </button>
                                    </li>
                                    <li>
                                        <button onClick={() => handleToggleWatchlist(movie.slug)} className="AddToWatchlist" type="button">
                                            {movie.isWatchlist ? <BsBookmarkStarFill/> : <BsBookmarkStar/>}
                                            <h6>{movie.isWatchlist ? 'Remove from Watchlist' : 'Add to Watchlist'}</h6>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="MovieDetailsDesc">
                            <p>{movie.desc}</p>
                        </div>

                        <div className="MovieDetailsInfo">
                            <ul>
                                <li>
                                    <div className="MovieDetailsInfo-label">Directors</div>
                                    <div className="MovieDetailsInfo-value">{movie.directors.join(', ')}</div>
                                </li>
                                <li>
                                    <div className="MovieDetailsInfo-label">Actors</div>
                                    <div className="MovieDetailsInfo-value">{movie.actors.join(', ')}</div>
                                </li>
                                <li>
                                    <div className="MovieDetailsInfo-label">Genre</div>
                                    <div className="MovieDetailsInfo-value">{movie.genre.join(', ')}</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default React.memo(MovieDetails)