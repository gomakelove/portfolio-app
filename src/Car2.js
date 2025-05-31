import React from 'react';
import Car from './Car';

function Car2(props) {
    return (
        <>
            <h2>OMG ich auch! Ich bin ein {props.color} Auto.</h2>
            <p>Wer ist noch so hier?</p>
            <Car />
        </>
    );
}

export default Car2;