import React from 'react'

import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import Dashboard from './components/Dashboard'

import Navbar from './components/Navbar'
const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
   </ BrowserRouter>
  );
};

export default App;

