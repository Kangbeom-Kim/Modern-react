import React, { useState } from 'react';
/*
    여러개의 상태를 관리할 때는 useState 를 여러개 만들어 onChange 핸들러를 여러개 만들면 된다고 판단할 수 있으나 
    이는 그렇게 좋은 방법이 아니다.
    
    가장 좋은 방법은 input 태그마다 name 을 주고 event 객체를 통해 name 과 value 를 state 로 지정하는게 가장 좋은 방법이다.
*/
export default function InputSample() {
    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });
    
    const { name, nickname } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    const onReset = () => {
        setInputs({
            name: '',
            nickname: ''
        })
    }

    return(
        <div>
            <input name="name" placeholder="이름" onChange={onChange} value={name}/>
            <input name="nickname" placeholder="닉네임" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값: </b>{name==='' ? '이름 없음' : name} ({nickname==='' ? '닉네임 없음' : nickname})
            </div>
        </div>
    )
}