import React from 'react';
import Joke from './Joke';
import Stories from './Stories';
import Search from './Search';

function App() {

  return (
    <div style={{marginLeft: '36px'}} >
      <h1>Welcome</h1>
      <Search />
      <hr />
      <Joke />
      <hr />
      <Stories />
      
    </div>
  );
}

export default App;
