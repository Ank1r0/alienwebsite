import logo from './logo.svg';
import './App.css';
import React from 'react'
import Header from './components/Header';
import Biography from './components/Biography';

function App() {
  return (
    
    <div>
        <Header/>
        <div className="App" style={{
          width: '1920px',
          //height: '7000px',
          backgroundColor: '#f0f0f0' // Light gray background for visibility
          }}>
        <Biography/>

        </div>
    </div>
  );
}

export default App;
