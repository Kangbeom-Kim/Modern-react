import React from 'react';
import Hello from './Hello';

function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 25,
    padding: 5,
  }
  return (
    <>
      <Hello 
        // Content={name}
        ColorOfFont={style.color}
      />
      <div style={style}>{name}</div>
    </>
  );
}

export default App;
