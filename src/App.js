import React, { useMemo, useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter(user => user.active).length;
}
function App() {
  const initialState = {
    username: '',
    email: ''
  }
  const initialUsers = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false
    },
    {
      id: 4,
      username: 'custom',
      email: 'custom@example.com',
      active: false
    },
  ];

  const [ inputs, setInputs ] = useState(initialState);
  const { username, email } = inputs;
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [ users, setUsers ] = useState(initialUsers);
  const nextId = useRef(5);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }
    setUsers(users.concat(user));

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = (id) => {
    setUsers(users.filter(user => user.id!==id));
  };
  
  const onToggle = (id) => {
    setUsers(
      users.map(user => 
        user.id === id ? { ...user, active: !user.active } : user 
      )
    );
  }
  const count = useMemo(()=> countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser
        username={username} 
        email={email} 
        onChange={onChange}
        onCreate={onCreate}
        
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
      <div>온라인: {count}</div>
    </>
  );
}

export default App;
