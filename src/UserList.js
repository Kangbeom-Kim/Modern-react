import React from 'react';

function User({ user }) {
    return (
        <div><b>{user.name}</b><span>({user.email})</span></div>
    );
}
export default function UserList({ users }) {

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