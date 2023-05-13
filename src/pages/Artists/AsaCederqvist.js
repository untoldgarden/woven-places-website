import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/asacederqvist.json';
import './ArtistPage.css';

const AsaCederqvist = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
      <div className="image-container">
          <img src="/images/artworks/asacederqvist-gigaannum.webp" alt="Åsa Cederqvist"></img>
        </div>
        <div className="title">
          <ReactMarkdown>{data.asaCederqvist.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.asaCederqvist.text[language]}</ReactMarkdown>
        </div> 
        {data.asaCederqvist.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default AsaCederqvist;