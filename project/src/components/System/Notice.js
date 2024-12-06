import {useEffect, useState} from "react";

import './Notice.scss';

const Notice = ({message, type}) => {
    const [isVisible, setIsVisible] = useState(true)

    // const toggleVisibility = () => {
    //     window.pageYOffset > 50 ? setIsVisible(true) : setIsVisible(false)
    // };

    useEffect(() => {
        setTimeout(() => setIsVisible(false), 3000)
    }, []);

    return (
        <>
            {isVisible &&
                <div className="Notice">
                    <div className={`NoticeMessage NoticeMessage-${type}`}>{message}</div>
                </div>
            }
        </>
    );
}

export default Notice