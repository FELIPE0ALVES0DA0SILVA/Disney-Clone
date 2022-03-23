import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home"
import Detail from './components/Detail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>  
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/detail' element={<Detail/>} />
      </Routes>
    </Router>
  );
}

export default App;

