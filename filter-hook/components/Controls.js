import React from 'react';

const Controls = ({filterTerm, setFilterTerm, isSorted, setIsSorted, reset}) => {
    const style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    };

    return (
        <div className="FilterControls" style={style}>
            <input type="checkbox" checked={isSorted} onChange={e => setIsSorted(e.target.checked)} />
            <input type="text" value={filterTerm} onChange={e => setFilterTerm(e.target.value)} />
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Controls;