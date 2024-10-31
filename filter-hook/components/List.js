import React from 'react';

const List = ({words}) => {
    const style = {
        height: '100px',
        overflowX: 'hidden',
        border: '1px solid #000',
        padding: '10px',
        margin: '10px 0 0 0'
    };

    return (
        <div className="FilterList">
            <ul style={style}>
                {words.map((word, index) => <li key={index}>{word}</li>)}
            </ul>
        </div>
    );
};

export default List;