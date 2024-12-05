import {NavLink} from "react-router-dom";
import { MdLocalMovies } from "react-icons/md";

import './Logo.scss';

const Logo = () => {
    return (
        <div className="Logo">
            <NavLink to="." end>
                <img src="/logo192.png" width="50" height="50" alt="logo" />
            </NavLink>
        </div>
    );
}

export default Logo