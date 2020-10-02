import React from 'react';

function User({ user, onRemove }) {
    return (
        <>
            <div>
                <b>{user.username}</b>
                <span>({user.email})</span>
                <button onClick={() => onRemove(user.id)}>삭제</button>
            </div>
            
        </>
    );
}
export default function UserList({ users, onRemove }) {

    return (
        <div>
            {users.map((data, index) => (
                <User user={data} key={index} onRemove={onRemove}/>
            ))}
        </div>
    );
}