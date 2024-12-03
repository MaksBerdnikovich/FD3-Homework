import React, {useState} from "react";
import {Link} from "react-router-dom";

import './MovieItem.scss';

const MovieItem = ({movie}) => {
    const [imgSrc, setImgSrc] = useState(movie.thumb_url);

    const handleError = () => setImgSrc('cm-img.png')

    const getUrl = (url) => url.match(/\/[^\/]+\/([^\/]+)\//)[1]

    return (
        <div className="MovieItem">
            <div className="MovieItemLink">
                <Link to={`/${getUrl(movie.imdb_url)}`}>
                    <div className="MovieItemImage">
                        <img src={imgSrc} onError={handleError} height="260" alt={movie.name} loading="lazy" />
                    </div>

                    <div className="MovieItemTitle">
                        {movie.name}
                    </div>
                </Link>
            </div>

            <div className="MovieItemBlock">
                <div className="MovieItemRating">
                    <h6>{movie.rating}</h6> / 10
                </div>

                <div className="MovieItemAction">
                    <ul>
                        <li>
                            <button type="button">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="#dcf836">
                                    <path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="#dcf836"></path>
                                </svg>
                            </button>
                        </li>
                        <li>
                            <button type="button">
                                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="#dd003f">
                                    <path d="M2 9.1371C2 14 6.01943 16.5914 8.96173 18.9109C10 19.7294 11 20.5 12 20.5C13 20.5 14 19.7294 15.0383 18.9109C17.9806 16.5914 22 14 22 9.1371C22 4.27416 16.4998 0.825464 12 5.50063C7.50016 0.825464 2 4.27416 2 9.1371Z" fill="#dd003f"/>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default React.memo(MovieItem)