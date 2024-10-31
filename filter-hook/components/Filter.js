import React, { useState } from 'react';
import Controls from "./Controls";
import List from "./List";
import './Filter.css';

const Filter = ({words}) => {
    const [filterTerm, setFilterTerm] = useState('');
    const [isSorted, setIsSorted] = useState(false);

    const reset = () => {
        setFilterTerm('');
        setIsSorted(false);
    };

    const filteredWords = words.filter(word => word.toLowerCase().includes(filterTerm.toLowerCase()))

    const sortedWords = isSorted ? [...filteredWords].sort() : filteredWords;

    return (
        <div className="Filter">
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