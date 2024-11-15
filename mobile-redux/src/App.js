import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store'
import EventEmitter from "eventemitter3";

import MobileCompany from "./components/MobileCompany";

const eventEmitter = new EventEmitter();

export const App = () => (
    <Provider store={store}>
        <MobileCompany eventEmitter={eventEmitter} />
    </Provider>
);
