// import { useEffect, useState } from 'react';

import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return ( 
    <div className="App">      
      <header className="App-header">
          <h1>Conversor de Moedas</h1>            
          <div>
            <div><button>X</button></div>
          </div>
      </header>
      <div className="App-body">
        <Home />
      </div>
    </div>
  );
}

export default App;
