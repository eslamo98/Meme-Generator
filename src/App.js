import React, { Component } from 'react';
import "./App.css"
import Body from './components/body/body';
import Navbar from './components/navbar/navbar';
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='container'>
        <Body />
      </div>
    </div>
  );
}

