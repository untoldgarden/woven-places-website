import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/lundahlseitl.json';
import './ArtistPage.css';

const LundahlSeitl = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        {/* <div className="image-container">
          <img src="/images/artworks/lundahlseitl-ogonsvavarevidpseudomonasfontan.webp" alt="Lundahl & Seitl - Ögonsvävare vid Pseudo Monas Fontän" />
        </div> */}
        <div className="title">
          <ReactMarkdown>{data.lundahlSeitl.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.lundahlSeitl.text[language]}</ReactMarkdown>
        </div>
        {data.lundahlSeitl.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default LundahlSeitl;