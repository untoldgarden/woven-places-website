import React from 'react';
import './Footer.css';

const Footer = () => {
  const links = [
    { url: "https://apps.apple.com/us/app/v%C3%A4vda-rum/id1633434387", image: "/images/appstore.png", alt: "AppStore" },
    { url: "https://play.google.com/store/apps/details?id=com.untoldgarden.wovenplaces&hl=en&gl=US", image: "/images/googleplay.png", alt: "Google Play" },
    { url: "https://www.facebook.com/SverigesKonstforeningar", image: "/images/facebook.png", alt: "Facebook" },
    { url: "https://www.instagram.com/sverigeskonstforeningar/", image: "/images/instagram.png", alt: "Instagram" },
    { url: "https://www.tiktok.com/@vavdarum", image: "/images/tiktok.png", alt: "TikTok" },
  ];

  return (
    <footer className="footer">
      <div className="social-links">
        {links.map((link, index) => (
          <div className="logo-wrapper" key={index}>
            <a href={link.url} target="_blank" rel="noreferrer">
              <img className="logo" src={link.image} alt={link.alt} />
            </a>
          </div>
        ))}
      </div>
      <div className="footer-content">
        <div className="logos">
          <div className="logo-wrapper">
            <a href="https://postkodstiftelsen.se/" target="_blank" rel="noreferrer">
              <img className="logo1" src="/images/postkodsstiftelsen.webp" alt="postkodsstiftelsen" />
            </a>
          </div>
          <div className="logo-wrapper">
            <a href="https://www.sverigeskonstforeningar.nu/" target="_blank" rel="noreferrer">
              <img className="logo2" src="/images/sverigeskonstforeningar.webp" alt="sverigeskonstforeningar" />
            </a>
          </div>
        </div>
        <p className="footer-text">Projektet Vävda rum är initierat av Riksförbundet Sveriges Konstföreningar i samarbete med Untold Garden, och finansieras av Postkodstiftelsen.</p>
      </div>
    </footer>
  );
};


export default Footer;
