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
        <div className="map-container">
          <div dangerouslySetInnerHTML={{ __html: `
            <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1oVypZQL6qjo8jc1i4V_PQgM2Eg55M4Q&ehbc=2E312F" width="640" height="480"></iframe>
          ` }} />
        </div>
      </div>
    </div>
  );
};

export default Hosts;
