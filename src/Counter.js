import React, { useState } from 'react';

export default function Counter() {
    const [num, HandleNum] = useState(0);
    const onPlusNum = () => {
        HandleNum(num + 1);
    }
    const onMinusNum = () => {
        HandleNum(num - 1);
    }
    return(
        <div>
            <h2>{num}</h2>
            <button onClick={onPlusNum}>+1</button>
            <button onClick={onMinusNum}>-1</button>
        </div>
    )
}