import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="logo1" src="/images/postkodsstiftelsen.webp" alt="postkodsstiftelsen" />
        <img className="logo2" src="/images/sverigeskonstforeningar.webp" alt="sverigeskonstforeningar" />
        <p className="footer-text">Projektet Vävda rum är initierat av Riksförbundet Sveriges Konstföreningar och finansieras av Postkodstiftelsen.</p>
      </div>
    </footer>
  );
};

export default Footer;
