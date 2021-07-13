import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const App = () => {
  return (
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Hello World</h1>
      <Button nameb="proceed" />
    </div>
  );
};

export default App;
