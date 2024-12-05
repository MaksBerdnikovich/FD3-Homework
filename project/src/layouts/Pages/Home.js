import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import Movies from "../../components/Movies/Movies";

const Home = () => {
    const movies = useSelector(selectMovies);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    return (
        <div className="Home">
            <Hero title="IMDB top 250 movie listing" />

            {isLoading ? 'Loading' : <Movies movies={movies} />}
        </div>
    );
}

export default Home