import {useEffect, useState} from "react";

import './ScrollToTop.scss';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    const toggleVisibility = () => {
        window.pageYOffset > 50 ? setIsVisible(true) : setIsVisible(false)
    };

    const scrollToTop = (e) => {
        e.preventDefault()
        window.scrollTo({top: 0, behavior: 'smooth'})
    };

    return (
        <div className="ScrollToTop">
            {isVisible && (<a href="#BackToTop" onClick={scrollToTop}>Back to top</a>)}
        </div>
    );
}

export default ScrollToTop