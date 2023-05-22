import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/spacepopular.json';
import './ArtistPage.css';

const SpacePopular = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
      <div className="image-container">
          <img src="/images/artworks/spacepopular-rootunda.webp" alt="Space Popular - Rootunda"></img>
        </div>
        <div className="title">
          <ReactMarkdown>{data.spacePopular.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.spacePopular.text[language]}</ReactMarkdown>
        </div> 
        {data.spacePopular.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default SpacePopular;