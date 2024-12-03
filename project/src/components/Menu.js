import {NavLink} from "react-router-dom";

import './Menu.scss'

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <li><NavLink to="." end>Home</NavLink></li>
                <li><NavLink to="watchlist">Watchlist</NavLink></li>
                <li><NavLink to="favorite">Favorite</NavLink></li>
            </ul>
        </div>
    );
}

export default Menu