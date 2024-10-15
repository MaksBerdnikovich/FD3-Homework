﻿import React from 'react';
import ReactDOM from 'react-dom';

import Shop from './components/Shop';

import data from './data.json';

ReactDOM.render(
    <Shop
        title={'Store'}
        products={data}
    />
    , document.getElementById('shop')
);
