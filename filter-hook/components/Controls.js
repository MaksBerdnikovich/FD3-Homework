import React from 'react';
import './Controls.css';

const Controls = ({filterTerm, setFilterTerm, isSorted, setIsSorted, reset}) => {
    return (
        <div className="Controls">
            <input type="checkbox" checked={isSorted} onChange={e => setIsSorted(e.target.checked)} />
            <input type="text" value={filterTerm} onChange={e => setFilterTerm(e.target.value)} />
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Controls;