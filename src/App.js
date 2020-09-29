import React from 'react';
import Hello from './Hello';
function App() {
  const name = 'react';
  return (
    <div>
      <Hello/>
      <div>{name}</div>
    </div>
  );
}

export default App;
