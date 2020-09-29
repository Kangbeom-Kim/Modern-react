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
      <Hello/>
      <div style={style}>{name}</div>
      {/* 주석 작성하기는 이렇게 */}
    </>
  );
}

export default App;
