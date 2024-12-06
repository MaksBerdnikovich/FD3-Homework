import MovieItem from "./MoviesItem";
import './MoviesGrid.scss';

const MoviesGrid = ({movies}) => {
    return (
        <div className="MoviesGrid">
            <div className="MoviesGridRow">
                {movies.map(movie => (
                    <div className="MoviesGridCol" key={movie.slug}>
                        <MovieItem movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MoviesGrid