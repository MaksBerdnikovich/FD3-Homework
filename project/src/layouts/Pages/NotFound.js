import './NotFound.scss'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className="NotFound">
            <div className="Container">
                <div className="NotFoundWrap">
                    <div className="NotFoundImage">
                        <img src="/err-img.png" width="689" height="356" alt="error" />
                    </div>

                    <div className="NotFoundTitle">
                        <h1>Page not found</h1>
                    </div>

                    <div className="NotFoundLink">
                        <Link to="/">go home</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound