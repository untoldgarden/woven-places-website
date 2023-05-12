import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import data from '../data/hosts.json';

const Hosts = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="content-section">
      <div className="title">
        <ReactMarkdown>{data.hostsTitle[language]}</ReactMarkdown>
      </div>
      <div className="text-container">
        <ReactMarkdown>{data.hostsText[language]}</ReactMarkdown>
      </div>
      </div>
    </div>
  );
};

export default Hosts;
