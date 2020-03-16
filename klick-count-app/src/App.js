import React from 'react';
import './App.css';
import AppContainer from './components/AppContainer';

function App() {
  return (
    <div className="App">
      <AppContainer/>
    </div>
  );
}

export default App;

// 1. Create a new app called ClickKount***
// 2. Add an AppContainer component with a header that says 'You clicked the button 0 times'***
// 3. Add a Clicker component that has a button***
// 4. Render the Clicker component and each time the user clicks the button, update the score display in parent component
// Extra: Render multiple Clicker components and note how they all update the shared state
