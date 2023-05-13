import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/jameswebb.json';
import './ArtistPage.css';

const JamesWebb = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        {/* <div className="image-container">
          <img src="/images/artworks/jameswebb-medicerinfurturempatiskmagi.webp" alt="James Webb - Mediciner för tur och empatisk magi" />
        </div> */}
        <div className="title">
          <ReactMarkdown>{data.jamesWebb.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.jamesWebb.text[language]}</ReactMarkdown>
        </div>
        {data.jamesWebb.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default JamesWebb;
