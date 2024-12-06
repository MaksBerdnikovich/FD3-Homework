import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectMovies} from "../../redux/slices/moviesSlice";

import './Menu.scss'

const Menu = () => {
    const movies = useSelector(selectMovies);
    const favoriteMovies = movies.filter(movie => movie.isFavorite)
    const watchlistMovies = movies.filter(movie => movie.isWatchlist)

    return (
        <div className="Menu">
            <ul>
                {/*<li><NavLink to="." end>Home</NavLink></li>*/}
                <li><NavLink to="favorite">Favorite <sup>{favoriteMovies.length}</sup></NavLink></li>
                <li><NavLink to="watchlist">Watchlist <sup>{watchlistMovies.length}</sup></NavLink></li>
            </ul>
        </div>
    );
}

export default Menu