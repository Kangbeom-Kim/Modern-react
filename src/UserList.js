import React, { useContext } from 'react';
import { UserDispatch } from './App';

const User = React.memo(function User({ user }) {
    console.log('user component')
    const dispatch = useContext(UserDispatch);
    
    return (
        <>
            <div>
                <b 
                    style={{ 
                        cursor: 'pointer', 
                        color: user.active ? 'green' : 'black' 
                    }}
                    onClick={() => {
                        dispatch({ type: 'TOGGLE_USER', id: user.id })
                    }}
                >
                    {user.username} 
                </b>
                 <span> ({user.email})</span>
                <button 
                    onClick={() => {
                        dispatch({ type: 'DELETE_USER', id: user.id })
                    }}
                >
                    삭제
                </button>
            </div>
            
        </>
    );
});

function UserList({ users }) {
    console.log('userlist component')
    return (
        <div>
            {users.map(data => (
                <User user={data} key={data.id} 
                />
            ))}
        </div>
    );
}

export default React.memo(UserList)