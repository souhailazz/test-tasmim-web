import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import React from 'react';
import Header from './header/Header.jsx';
import HomePage from './homepage/HomePage.jsx';
import ServicesGrid from './servicegrid/ServiceGrid.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
<ServicesGrid/>
    </div>
  );
}

export default App;
