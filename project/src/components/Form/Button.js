import React from 'react';
import "./Button.scss";

const Button = ({onClick, text, disabled = false}) => (
    <button className="Button" onClick={onClick} disabled={disabled}>
        {text}
    </button>
)

export default Button