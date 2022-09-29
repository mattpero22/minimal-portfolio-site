//react and npm packages
import React from 'react';

//styles
import './App.css';

//components
import Header from './components/Header'
import Particles from './components/Particles';
import ThemeToggle from './components/ThemeToggle';

const App = () => {
  return (
    <div className="app">
      <Particles> </Particles>
      <Header> </Header>
      <ThemeToggle> </ThemeToggle>
    </div>
  )
};

export default App;
