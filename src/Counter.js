import React, { useState } from 'react';
import { useReducer } from 'react';

function reducer(state, action) {
    switch(action.type) {
        case 'PLUS':
            return state + 1;
        case 'MINUS':
            return state - 1;
        default:
            return state;
    }
}

export default function Counter() {
    const [num, dispatch] = useReducer(reducer, 0);

    const onPlusNum = () => {
        dispatch({ type: 'PLUS' });
    };

    const onMinusNum = () => {
        dispatch({ type: 'MINUS' });
    }
    return(
        <div>
            <h2>{num}</h2>
            <button onClick={onPlusNum}>+1</button>
            <button onClick={onMinusNum}>-1</button>
        </div>
    )
}