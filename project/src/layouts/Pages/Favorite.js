import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies, selectIsLoading, selectMovies} from "../../redux/slices/moviesSlice";

import Hero from "../../components/Hero/Hero";
import Movies from "./Movies";
import {useParams} from "react-router-dom";
import MoviesGrid from "../../components/Movies/MoviesGrid";

const Favorite = () => {
    const movies = useSelector(selectMovies);
    const isLoading = useSelector(selectIsLoading);
    const dispatch = useDispatch();
    const {pageNumber = 1} = useParams()

    useEffect(() => {
        if (movies.length === 0) dispatch(fetchMovies())
    }, [])

    console.log(movies)

    const favoriteMovies = movies.filter(movie => movie.isFavorite)

    console.log(pageNumber)

    return (
        <div className="Favorites">
            <Hero title="movie listing - favorite" />

            <MoviesGrid movies={favoriteMovies} />
        </div>
    )
}

export default Favorite