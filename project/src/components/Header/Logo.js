import {NavLink} from "react-router-dom";

import './Logo.scss';
import {resetFilters} from "../../redux/slices/filterSlice";
import {useDispatch} from "react-redux";

const Logo = () => {
    const dispatch = useDispatch()

    const handleClearFilter = () => {
        dispatch(resetFilters())
    }

    return (
        <div className="Logo">
            <NavLink to="." onClick={handleClearFilter} end>
                <img onClick={handleClearFilter} src="/logo192.png" width="50" height="50" alt="logo" />
            </NavLink>
        </div>
    );
}

export default Logo