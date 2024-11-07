import React from 'react';
import ReactDOM from 'react-dom';
import EventEmitter from "eventemitter3";
import MobileCompany from './components/MobileCompany';

const eventEmitter = new EventEmitter();

const initData = [
    {id: 101, fio: "Иванов И.И.", balance: 200, status: true},
    {id: 105, fio: "Сидоров С.С.", balance: 250, status: true},
    {id: 110, fio: "Петров П.П.", balance: 180, status: true},
    {id: 120, fio: "Григорьев Г.Г.", balance: 220, status: false},
];

ReactDOM.render(
    <MobileCompany initData={initData} eventEmitter={eventEmitter} />
    , document.getElementById('container')
);
