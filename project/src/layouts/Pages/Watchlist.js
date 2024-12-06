import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import MoviesGrid from "../../components/Movies/MoviesGrid";
import Loader from "../../components/System/Loader";
import './Watchlist.scss';

const Watchlist = () => {
    const movies = useSelector(selectMovies);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [movies.length, dispatch])

    const watchlistMovies = movies.filter(movie => movie.isWatchlist)

    return (
        <div className="Watchlist">
            <Hero title="movie listing - Watchlist" />

            <div className="Movies">
                {isLoading && <Loader />}

                <div className="Container">
                    <MoviesGrid movies={watchlistMovies} />
                </div>
            </div>
        </div>
    )
}

export default Watchlist