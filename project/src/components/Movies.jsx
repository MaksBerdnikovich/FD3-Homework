import MovieItem from "./MovieItem";

import './Movies.scss';

const Movies = ({movies}) => {
    return (
        <div className="Movies">
            <div className="MoviesRow">
                {movies.map((movie, index) => (
                    <div className="MoviesCol" key={index}>
                        <MovieItem movie={movie} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies