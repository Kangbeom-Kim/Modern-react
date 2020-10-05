import React, { useContext, useCallback, useRef } from 'react';
import { UserDispatch } from './App';
import useInputs from './hooks/useInputs';

function CreateUser() {
    console.log('CreateUser component')
    const [{username, email}, onChange, reset] = useInputs({
        username: '',
        email: ''
    });

    const nextId = useRef(5);
    const dispatch = useContext(UserDispatch);

    const onCreate = () => {
        dispatch({
          type: 'CREATE_USER',
          user: {
            id: nextId.current,
            username, 
            email
          }
        });
        reset();
        nextId.current++;
    }

    return(
        <div>
            <input 
                name="username" 
                placeholder="계정명"
                value={username}
                onChange={onChange} 
            />
            <input 
                name="email" 
                placeholder="이메일" 
                value={email}
                onChange={onChange}
            />
            <button 
                onClick={onCreate}
            >
                등록
            </button>
        </div>
    );
}

export default React.memo(CreateUser);