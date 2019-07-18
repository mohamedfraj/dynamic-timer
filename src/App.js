import React from 'react';
import './App.css';
import Timer from './timer';

var milliseconds = 5000000

function App() {
  return (
    <div className="App">
      <Timer ms = {milliseconds}/>
    </div>
  );
}

export default App;
