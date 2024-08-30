import React, { useState } from 'react';
import './ContactForm.css';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane, FaTimes } from 'react-icons/fa';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Le nom est requis";
    if (!email.trim()) newErrors.email = "L'email est requis";
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = "L'email est invalide";
    if (!message.trim()) newErrors.message = "Le message est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', { name, email, message });
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
      }, 3000);
    }
  };

  return (
    <div className="contact-form-overlay">
      <div className="contact-form">
        <h2>Contactez-nous</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Nom"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <div className="error-message">{errors.name}</div>}
          </div>
          <div className="input-group">
            <FaEnvelope className="input-icon" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <div className="error-message">{errors.email}</div>}
          </div>
          <div className="input-group">
            <FaComment className="input-icon" />
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && <div className="error-message">{errors.message}</div>}
          </div>
          <button type="submit"><FaPaperPlane /> Envoyer</button>
        </form>
        {isSubmitted && <div className="success-message">Message envoyé avec succès !</div>}
        <button className="close-button" onClick={onClose}><FaTimes /></button>
      </div>
    </div>
  );
};

export default ContactForm;