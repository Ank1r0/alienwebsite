import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header';
import Biography from './components/Biography';
import Divider from './components/Divider';
import Skills from './components/Skills';
import Projects from './components/Projects';
import TheEnd from './components/TheEnd';
function App() {
  return (
    
    <div>
        <Header/>
        <Divider/>
        <Biography/>
        <Divider/>
        <Skills/>
        <Divider/>
        <Projects/>
        <TheEnd/>
    </div>
  );
}

export default App;
