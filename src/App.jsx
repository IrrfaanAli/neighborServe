import React from 'react';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Login from './Login/Login';
import Registration from './Registration';
import Service from './Service';
function App() {
  return (
    <>
     <Navbar></Navbar>
     <Registration />
    </>
  )
}

export default App;
