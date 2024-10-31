import React, { useState } from 'react';
import Controls from "./Controls";
import List from "./List";

const Filter = ({words}) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    const reset = () => {
        setFilterTerm('');
        setIsSorted(false);
    };

    const filteredWords = words.filter(word => word.toLowerCase().includes(filterTerm.toLowerCase()))

    const sortedWords = isSorted ? [...filteredWords].sort() : filteredWords;

    const style = {
        width: '280px',
        margin: '50px auto'
    };

    return (
        <div className="Filter" style={style}>
            <Controls
                filterTerm={filterTerm}
                setFilterTerm={setFilterTerm}
                isSorted={isSorted}
                setIsSorted={setIsSorted}
                reset={reset}
            />
            <List words={sortedWords} />
        </div>
    );
};

export default Filter;