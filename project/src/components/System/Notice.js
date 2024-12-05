import {useEffect, useState} from "react";

import './Loader.scss';

const Loader = () => {
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
        <div className="Loader">
            {isVisible && (<a href="#BackToTop" onClick={scrollToTop}>Back to top</a>)}
        </div>
    );
}

export default Loader