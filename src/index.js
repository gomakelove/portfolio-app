import React from 'react';
import ReactDOM from 'react-dom/client';
import message from './message';
import Car2 from './Car2';

const myFirstElement = <h1>Hello, World!</h1>;
const anotherElement = (
    <table>
        <tr>
            <th>Name</th>
        </tr>
        <tr>
            <td>John</td>
        </tr>
        <tr>
            <td>Elsa</td>
        </tr>
    </table>
);
const calctext = <p>JSX ermögtlicht es mir {1 + 1} zusammen zu zählen oder {myFirstElement} zu rufen.</p>
const multipleParagraphs = (
    <div>
        <p>Achtung:</p>
        <p>Mehrere Tags müssen in ein Eltern-Element sein.</p>
    </div>
);

var authenticated = false;

const root = ReactDOM.createRoot(document.getElementById('root'));

// if else Anweisung mal anders
authenticated ? root.render(message()) : root.render(<Car2 color="rotes" />);