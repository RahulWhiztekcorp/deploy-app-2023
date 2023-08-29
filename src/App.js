// import axios from 'axios'
import React from 'react'
//import { Link } from 'react-router-dom';
import './App.css';
import {Routes,Route } from 'react-router-dom';
import Create from './components/Create';
import Read from './components/Read';
import Update from './components/Update';
import NavBar  from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="container">
      <NavBar/>
      <div className="m-2">
        <Routes>
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/home" element={<Home />}/>
            <Route path="/read" element={<Read />}/>
            <Route path="/update" element={<Update />}/>
            <Route path="/create" element={<Create />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
