import React, { useState } from 'react';

export default function InputSample() {
    const [text, setText] = useState('');

    const onChange = (e) => {
        setText(e.target.value);
    }
    const onReset = () => {
        setText('');
    }

    return(
        <div>
            <input type="text" onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: {text} </b>
            </div>
        </div>
    )
}