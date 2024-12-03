import MovieItem from "./MovieItem";

import './Movies.scss';

const Movies = ({data}) => {
    return (
        <div className="Movies">
            <div className="MoviesRow">
                {data.map((item, index) => (
                    <div className="MoviesCol" key={index}>
                        <MovieItem data={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Movies