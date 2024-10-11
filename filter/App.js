import React from 'react';
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";

const data = ['california', 'everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
    <Filter data={data}/>
    , document.getElementById('app')
);
