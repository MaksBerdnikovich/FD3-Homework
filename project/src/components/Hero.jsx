import React from "react";
import './Hero.scss';

const Hero = ({title}) => {
    return (
        <div className="Hero">
            <div className="Container">
                <div className="HeroTitle"><h1>{title}</h1></div>
            </div>
        </div>
    );
}

export default React.memo(Hero)