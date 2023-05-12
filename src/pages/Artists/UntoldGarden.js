import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/untoldgarden.json';

const UntoldGarden = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        <div className="image-container">
          <img src="/images/artworks/untoldgarden-detlangasorlet.webp" alt="Untold Garden - Det långa sorlet" />
        </div>
        <div className="title">
          <ReactMarkdown>{data.untoldGarden.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.untoldGarden.text[language]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default UntoldGarden;
