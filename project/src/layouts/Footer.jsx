import Copyright from "../components/Copyright";
import ScrollToTop from "../components/ScrollToTop";

import "./Footer.scss";

const Footer = () => {
    return (
        <footer className="Footer">
            <div className="FooterWrap">
                <div className="Container">
                    <div className="FooterBlock">
                        <Copyright />

                        <ScrollToTop />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer