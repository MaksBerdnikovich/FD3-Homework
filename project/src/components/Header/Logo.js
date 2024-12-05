import {NavLink} from "react-router-dom";
import './Logo.scss';

const Logo = () => {
    return (
        <div className="Logo">
            <NavLink to="." end>
                <img src="/logo192.png" width="60" height="60" alt="logo" />
            </NavLink>
        </div>
    );
}

export default Logo