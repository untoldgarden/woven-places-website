import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/spacepopular.json';

const SpacePopular = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
      {/* <div className="image-container">
          <img src="/images/artworks/spacepopular.webp" alt="SONG"></img>
        </div> */}
        <div className="title">
          <ReactMarkdown>{data.spacePopular.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.spacePopular.text[language]}</ReactMarkdown>
        </div> 
      </div>
    </div>
  );
};

export default SpacePopular;