// import axios from 'axios'
import React from 'react'
//import { Link } from 'react-router-dom';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import NavBar  from './components/NavBar';



function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="mt-2">
        <Routes>
            <Route exact path="/" element={<Create />}/>
            <Route path="/read" element={<Read />}/>
            <Route path="/update" element={<Update />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
