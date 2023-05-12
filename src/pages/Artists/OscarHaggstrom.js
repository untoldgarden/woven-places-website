import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/oscarhaggstrom.json';

const OscarHaggstrom = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
        <div className="image-container">
          <img src="/images/artworks/oscarhaggstrom-joggyourmind.webp" alt="Oscar Häggström - Jogg your mind" />
        </div>
        <div className="title">
          <ReactMarkdown>{data.oscarHaggstrom.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.oscarHaggstrom.text[language]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default OscarHaggstrom;