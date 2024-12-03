import {useParams} from "react-router-dom";
import MovieDetails from "../components/MovieDetails";

import movies from "../movies.json";
import NotFound from "./NotFound";

const Movie = () => {
    const params = useParams()
    const movie = movies.find(movie => movie.imdb_url === `/title/${params.slug}/`)

    return (
        <>
            {movie ? <MovieDetails movie={movie}/> : <NotFound />}
        </>
    );
}

export default Movie