import React, { useState } from 'react';
import './App.css';
import Header from './header/Header.jsx';
import HomePage from './homepage/HomePage.jsx';
import ContactForm from './contactform/Contactform.jsx';

function App() {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };

  return (
    <div className="App">
      <Header onContactClick={toggleContactForm} />
      <HomePage />
      {showContactForm && <ContactForm onClose={toggleContactForm} />}
    </div>
  );
}

export default App;