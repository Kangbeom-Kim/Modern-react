import React from 'react';

function User({ user }) {
    return (
        <div><b>{user.name}</b><span>({user.email})</span></div>
    );
}
export default function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    return (
        <div>
            {users.map((data, index) => {
                return(
                    <User user={data} key={index}/>
                );
            })}
        </div>
    );
}