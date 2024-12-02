import React, {useEffect, useState} from 'react';
import Logo from "../components/Logo";
import Menu from "../components/Menu";

import './Header.scss';

const Header = () => {
    const [isSticky, setIsSticky] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        scrollTop > 50 ? setIsSticky(true) : setIsSticky(false)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`Header ${isSticky ? 'sticky' : ''}`}>
            <div className="container">
                <nav className="HeaderWrap">
                    <Logo />
                    <Menu />
                </nav>
            </div>
        </header>
    )
}

export default Header