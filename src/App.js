import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="game-board">
      <div className="snake-dot" style={{ left: 0, top: 0 }} />
      <div className="snake-dot" style={{ left: '2%', top: 0 }} />
      <div className="snake-dot" style={{ left: '4%', top: 0 }} />
    </div>
  );
}

export default App;
