import {useParams} from "react-router-dom";
import MovieDetails from "../../components/Movies/MovieDetails";

import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";
import {useEffect} from "react";
import Loader from "../../components/System/Loader";

const Movie = () => {
    const movies = useSelector(selectMovies)
    const isLoading = useSelector(selectIsLoading)
    const dispatch = useDispatch()
    const {slug} = useParams()
    const movie = movies.find(movie => movie.slug === `${slug}`)

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    })

    return (
        <>{isLoading ? <Loader /> : (movie && <MovieDetails movie={movie}/>)}</>
    );
}

export default Movie