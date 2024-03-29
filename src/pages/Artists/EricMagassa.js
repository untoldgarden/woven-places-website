import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/ericmagassa.json';
import './ArtistPage.css';

const EricMagassa = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        <div className="image-container">
          <img src="/images/artworks/ericmagassa-parallelworlds.webp" alt="Eric Magassa - Parallel Worlds" />
        </div>
        <div className="title">
          <ReactMarkdown>{data.ericMagassa.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.ericMagassa.text[language]}</ReactMarkdown>
        </div>
        {data.ericMagassa.links.map(link => (
          <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
            <ReactMarkdown>{link.text[language]}</ReactMarkdown>
          </a>
        ))}
      </div>
    </div>
  );
};

export default EricMagassa;
