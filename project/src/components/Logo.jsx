import {NavLink} from "react-router-dom";
import './Logo.scss';

const Logo = () => {
    return (
        <div className="Logo">
            <NavLink to="." end>
                <img src="logo192.png" width="64" height="64" alt="logo" />
            </NavLink>
        </div>
    );
}

export default Logo