import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  state = {
    
  }
  return (
    <div className="App">
      <h1>Hi everyone!</h1>
      <Person name="Max" age="28"/>
      <Person name="Real" age="2e8"/>
      <Person name="Maerx" age="328"/>
    </div>
  );
}

export default App;