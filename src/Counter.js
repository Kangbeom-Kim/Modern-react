import React, { useState } from 'react';

/*
    이전 방법은 state 를 새로운 값으로 대체하였지만,
    이 방법을 사용하면 기존 state 값을 업데이트 하는 것.
    후자의 방법은 컴포넌트 성능 최적화에 사용된다.
*/
export default function Counter() {
    const [num, HandleNum] = useState(0);
    const onPlusNum = () => {
        HandleNum(prevNum => prevNum + 1);
    }
    const onMinusNum = () => {
        HandleNum(prevNum => prevNum - 1);
    }
    return(
        <div>
            <h2>{num}</h2>
            <button onClick={onPlusNum}>+1</button>
            <button onClick={onMinusNum}>-1</button>
        </div>
    )
}