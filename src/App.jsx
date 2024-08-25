import React from 'react';
import './App.css';
import Header from './header/Header.jsx';
import HomePage from './homepage/HomePage.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage /> {/* HomePage now includes the ServicesGrid component */}
    </div>
  );
}

export default App;
