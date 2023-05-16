import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import data from '../data/calendar.json';

const Kalendarium = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="content-section">
        <div className="title">
          <ReactMarkdown>{data.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.about[language]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default Kalendarium;
