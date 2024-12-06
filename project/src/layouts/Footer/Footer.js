import {useSelector} from "react-redux";
import {selectErrorMessage} from "../../redux/slices/moviesSlice";

import Copyright from "../../components/Footer/Copyright";
import ScrollToTop from "../../components/Footer/ScrollToTop";

import "./Footer.scss";
import Notice from "../../components/System/Notice";


const Footer = () => {
    const errorMessage = useSelector(selectErrorMessage)

    return (
        <footer className="Footer">
            <div className="FooterWrap">
                <div className="Container">
                    <div className="FooterBlock">
                        <Copyright />

                        <ScrollToTop />

                        {errorMessage &&
                            <Notice message={errorMessage} type={errorMessage ? 'error' : 'success'} />
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer