import React from 'react';
import './App.css';
import Nav from './Nav'
import AddButton from './AddButton';
import TasksList from './TasksList';

function App() {
  return (
    <div className="App">
      <h1>App Page</h1>
      <Nav />
      <TasksList />
    </div>
  );
}

export default App;
