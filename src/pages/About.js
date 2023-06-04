import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import data from '../data/about.json';

const About = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="content-section">
        <div className="title">
          <ReactMarkdown>{data.aboutTitle[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.aboutText[language]}</ReactMarkdown>
        </div>
      </div>
      <div className="content-section">
      {/* <div className="image-container">
          <img src="/images/artworks/asacederqvist-gigaannum.webp" alt="Åsa Cederqvist"></img>
        </div> */}
        <div className="title">
          <ReactMarkdown>{data.rskTitle[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.rskText[language]}</ReactMarkdown>
        </div>
      </div>
      <div className="content-section">
      <div className="image-container">
          <img src="/images/artists/untoldgarden.webp" alt="Untold Garden"></img>
        </div>
        <div className="title">
          <ReactMarkdown>{data.untoldGardenTitle[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.untoldGardenText[language]}</ReactMarkdown>
        </div>
      </div>
      <div className="content-section">
      <div className="image-container">
          <img src="/images/ulrikaflink.webp" alt="Ulrika Flink"></img>
        </div>
        <div className="title">
          <ReactMarkdown>{data.ulrikaFlinkTitle[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.ulrikaFlinkText[language]}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default About;
