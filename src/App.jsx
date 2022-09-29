//react hooks and npm packages
import React from 'react';
import { useState } from "react";

//styles
import './App.css';

//components
import Header from './components/Header'
import Particles from './components/Particles';
import ThemeToggle from './components/ThemeToggle';

const App = () => {

  const [theme, setTheme] = useState("dark")

  return (
    <div className={`app ${theme}`}>
      <Particles> </Particles>
      <Header> </Header>
      <ThemeToggle theme={theme} setTheme={setTheme}> </ThemeToggle>
    </div>
  )
};

export default App;
