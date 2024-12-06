import React, {useEffect, useState} from "react";

import './MovieDetails.scss';
import {useNavigate} from "react-router-dom";

const MovieDetails = ({movie}) => {
    const navigate = useNavigate()
    const [imgSrc, setImgSrc] = useState(movie.image_url);

    const handleError = () => setImgSrc('/cm-img.png')

    useEffect(() => {
        if (!movie) navigate('/404page')
    }, [])

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
                        <div className="MovieDetailsTitle">
                            <h1>{movie.name}</h1> <h4>/ {movie.year}</h4>
                        </div>

                        <div className="MovieDetailsBlock">
                            <div className="MovieDetailsRating">
                                <h6>{movie.rating}</h6> / 10
                            </div>

                            <div className="MovieDetailsAction">
                                <ul>
                                    <li>
                                        <button type="button">
                                            <div className="IconWatchlist">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#dcf836">
                                                    <path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="#dcf836" />
                                                </svg>
                                            </div>

                                            <h6>Add to Watchlist</h6>
                                        </button>
                                    </li>
                                    <li>
                                        <button type="button">
                                            <div className="IconFavorite">
                                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#dd003f">
                                                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#dd003f"/>
                                                </svg>
                                            </div>

                                            <h6>Add to Favorite</h6>
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