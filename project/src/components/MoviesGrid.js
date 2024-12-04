import MovieItem from "./MoviesItem";

const MoviesGrid = ({movies}) => {
    return (
        <div className="MoviesGrid">
            <div className="MoviesGridRow">
                {movies.map(movie => (
                    <div className="MoviesGridCol" key={movie.imdb_url}>
                        <MovieItem movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesGrid