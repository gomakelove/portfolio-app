import React from 'react';
import ReactDOM from 'react-dom/client';
import message from './message';

const myFirstElement = <h1>Hello, World!</h1>;
var authenticated = false;

const root = ReactDOM.createRoot(document.getElementById('root'));

// if else Anweisung mal anders
authenticated ? root.render(message()) : root.render(myFirstElement);