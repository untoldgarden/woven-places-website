import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://postkodstiftelsen.se/" target="_blank" rel="noreferrer">
        <img className="logo1" src="/images/postkodsstiftelsen.webp" alt="postkodsstiftelsen" />
        </a>
        <a href="https://www.sverigeskonstforeningar.nu/" target="_blank" rel="noreferrer">
        <img className="logo2" src="/images/sverigeskonstforeningar.webp" alt="sverigeskonstforeningar" />
        </a>
        <p className="footer-text">Projektet Vävda rum är initierat av Riksförbundet Sveriges Konstföreningar och finansieras av Postkodstiftelsen.</p>
      </div>
    </footer>
  );
};

export default Footer;
