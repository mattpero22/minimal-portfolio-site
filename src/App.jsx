//react and npm packages
import React from 'react';
import { tsParticles } from 'tsparticles-engine';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

//styles
import './App.css';
//components
import Header from './components/Header'

const App = () => {
  return (
    <div id='app'>
      <Header> </Header>
    </div>
  );
}

export default App;
