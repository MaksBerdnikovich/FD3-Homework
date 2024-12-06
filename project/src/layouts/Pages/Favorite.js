import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import MoviesGrid from "../../components/Movies/MoviesGrid";
import Loader from "../../components/System/Loader";
import './Favorite.scss';

const Favorite = () => {
    const movies = useSelector(selectMovies);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [movies.length, dispatch])

    const favoriteMovies = movies.filter(movie => movie.isFavorite)

    return (
        <div className="Favorite">
            <Hero title="movie listing - favorite" />

            <div className="Movies">
                {isLoading && <Loader />}

                <div className="Container">
                    <MoviesGrid movies={favoriteMovies} />
                </div>
            </div>
        </div>
    )
}

export default Favorite