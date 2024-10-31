import React from 'react';
import './List.css';

const List = ({words}) => {
    return (
        <div className="List">
            <ul>
                {words.map((word, index) => <li key={index}>{word}</li>)}
            </ul>
        </div>
    );
};

export default List;