import {useSelector} from "react-redux";
import {selectErrorMessage, selectSuccessMessage} from "../../redux/slices/moviesSlice";

import Copyright from "../../components/Footer/Copyright";
import ScrollToTop from "../../components/Footer/ScrollToTop";

import "./Footer.scss";
import Notice from "../../components/System/Notice";


const Footer = () => {
    const errorMessage = useSelector(selectErrorMessage)
    const successMessage = useSelector(selectSuccessMessage)

    return (
        <footer className="Footer">
            <div className="FooterWrap">
                <div className="Container">
                    <div className="FooterBlock">
                        <Copyright />

                        <ScrollToTop />

                        {errorMessage &&
                            <Notice message={errorMessage} type={'error'} />
                        }

                        {successMessage &&
                            <Notice message={successMessage} type={'success'} />
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer