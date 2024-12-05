import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Favorite = () => {
    const movies = useSelector(selectMovies);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    const outputMovies = movies.filter(movie => movie.isFavorite)

    return (
        <div className="Favorites">
            <Hero title="movie listing - favorite" />

            {isLoading ? 'Loading' : <Movies movies={outputMovies} />}
        </div>
    )
}

export default Favorite