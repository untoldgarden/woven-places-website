import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';
import data from '../data/artists.json';
import './Artists.css';

const Artists = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="container">
      <div className="content-section">
        <div className="title-centered">
          <ReactMarkdown>{data.artistsTitle[language]}</ReactMarkdown>
        </div>
        {data.artists.map((artist, index) => (
          <Link to={`/konstnarer/${artist.id}`} className={`artist-row ${index % 2 === 0 ? 'row-even' : 'row-odd'}`} key={artist.id}>
              <div className="artist-image">
                <img src={artist.image} alt={artist.title[language]} />
              </div>
              <div className="artist-info">
                <div className="artist-title">
                  <ReactMarkdown>{artist.title[language]}</ReactMarkdown>
                </div>
                <div className="text-container">
                  <ReactMarkdown>{artist.text[language]}</ReactMarkdown>
                </div>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artists;
