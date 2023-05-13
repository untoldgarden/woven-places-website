import React, { useContext } from 'react';
import { LanguageContext } from '../../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import '../../sharedStyles.css';
import data from '../../data/song.json';
import './ArtistPage.css';

const SONG = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="content-section">
      <div className="container">
      <div className="image-container">
          <img src="/images/artworks/song-interweave.webp" alt="SONG"></img>
        </div>
        <div className="title">
          <ReactMarkdown>{data.song.title[language]}</ReactMarkdown>
        </div>
        <div className="text-container">
          <ReactMarkdown>{data.song.text[language]}</ReactMarkdown>
        </div> 
        {data.song.links.map(link => (
  <a href={link.url} className="artist-link" target="_blank" rel="noopener noreferrer">
    <ReactMarkdown>{link.text[language]}</ReactMarkdown>
  </a>
))}
      </div>
    </div>
  );
};

export default SONG;