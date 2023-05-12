import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../sharedStyles.css';
import data from '../data/home.json';

const Home = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
    <div className="container">
      <div>
        <div className="taglineBold">
          <ReactMarkdown>{data.titleBold[language]}</ReactMarkdown>
        </div>
        <div className="taglineCursive">
          <ReactMarkdown>{data.titleCursive[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.body[language]}</ReactMarkdown>
      </div> 
    </div>
    </div>
    </div>
  );
};

export default Home;
