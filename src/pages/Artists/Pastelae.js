import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/pastelae.json';
import './ArtistPage.css';

const Pastelae = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        <div className="image-container">
          <img src="/images/artworks/pastelae-berget.webp" alt="Pastelae - Berget" />
        </div>
        <div className="title">
          <ReactMarkdown>{data.pastelae.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.pastelae.text[language]}</ReactMarkdown>
        </div>
        {data.pastelae.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default Pastelae;