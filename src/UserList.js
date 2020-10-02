import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
    useEffect(() => {
        console.log('컴포넌트 화면에 나타남');
        return() => {
            console.log('컴포넌트 화면에서 사라짐')
        }
    }, []);
    return (
        <>
            <div>
                <b 
                    style={{ 
                        cursor: 'pointer', 
                        color: user.active ? 'green' : 'black' 
                    }}
                    onClick={() => onToggle(user.id)}
                >
                    {user.username}
                </b>
                <span>({user.email})</span>
                <button onClick={() => onRemove(user.id)}>삭제</button>
            </div>
            
        </>
    );
}
export default function UserList({ users, onRemove, onToggle }) {

    return (
        <div>
            {users.map((data, index) => (
                <User 
                    user={data} 
                    key={index} 
                    onRemove={onRemove} 
                    onToggle={onToggle}
                />
            ))}
        </div>
    );
}