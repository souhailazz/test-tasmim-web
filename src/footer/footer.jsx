import React from 'react';
import './footer.css'; // Assuming you have some CSS for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-social-media">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src="path/to/facebook-icon.png" alt="Facebook" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <img src="path/to/twitter-icon.png" alt="Twitter" />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src="path/to/instagram-icon.png" alt="Instagram" />
                </a>
            </div>
            <div className="footer-contact-info">
                <p>Address: 1234 Street Name, City, State, ZIP</p>
                <p>Email: <a href="mailto:example@example.com">example@example.com</a></p>
                <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
            </div>
        </footer>
    );
};

export default Footer;