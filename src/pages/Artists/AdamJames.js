import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/adamjames.json';

const AdamJames = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        <div className="image-container">
          <img src="/images/artworks/adamjames-thethirdthing.webp" alt="Adam James - Den tredje länken" />
        </div>
        <div className="title">
          <ReactMarkdown>{data.adamJames.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.adamJames.text[language]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default AdamJames;
