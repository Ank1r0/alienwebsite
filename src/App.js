import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header';
import Biography from './components/Biography';
import Divider from './components/Divider';
import Skills from './components/Skills';

function App() {
  return (
    
    <div>
        <Header/>
        <Divider/>
        <Biography/>
        <Divider/>
        <Skills/>
    </div>
  );
}

export default App;
