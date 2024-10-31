﻿import React from 'react';
import ReactDOM from 'react-dom';
import Filter from "./components/Filter";

const words = ['everything', 'aboveboard', 'washington', 'basketball', 'weathering', 'characters', 'literature', 'contraband', 'appreciate'];

ReactDOM.render(
    <Filter words={words}/>
    , document.getElementById('app')
);