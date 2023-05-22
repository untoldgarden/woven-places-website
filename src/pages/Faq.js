import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import data from '../data/faq.json';

const FAQ = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="content-section">
        <div className="title">
          <ReactMarkdown>{data.faqTitle[language]}</ReactMarkdown>
        </div>
      
        <div className="text-container">
          <ReactMarkdown>{data.faqText[language]}</ReactMarkdown>
        </div>

        <div className="faq-section">
          {data.faq.map((item) => (
            <div key={item.id}>
              <div className="title-small">
                <ReactMarkdown>{item.question[language]}</ReactMarkdown>
              </div>
              <div className="text-container">
                <ReactMarkdown>{item.answer[language]}</ReactMarkdown>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
