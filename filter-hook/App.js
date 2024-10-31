import React from 'react';
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";

const words = ['california', 'everything', 'aboveboard', 'Washington', 'basketball', 'weathering', 'Characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
    <Filter words={words}/>
    , document.getElementById('app')
);