import React from 'react';

import Hello from './Hello';
import Wrapper from './Wrapper';

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
      <Wrapper>
        <Hello 
          Content={name}
          ColorOfFont={style.color}
          isSpecial={true}
        />
        <Hello ColorOfFont="pink"/>
      </Wrapper>
     
    </>
  );
}

export default App;
