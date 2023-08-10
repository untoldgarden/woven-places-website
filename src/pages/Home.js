import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import { NavLink } from 'react-router-dom';
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
          {/* <br></br> */}
          <div className="image-container">
          <img src="/images/artworks/giga-annum-jellyfish.webp" alt="Åsa Cederqvist - Giga-annum" />
        </div>
            {/* <br></br> */}
          <NavLink className="title-maplink" to="/vardar">
            <div className='subheading'>
            <ReactMarkdown>{data.mapLink[language]}</ReactMarkdown>
            </div>
          </NavLink>
          <br></br>
          <div className="text-container">
            <ReactMarkdown>{data.body[language]}</ReactMarkdown>
          </div>
            <br></br>
          <div className="video-container">
            <iframe 
              src="https://player.vimeo.com/video/825080696" 
              width="640" 
              height="360" 
              frameborder="0" 
              allow="autoplay; fullscreen; picture-in-picture" 
              allowfullscreen
              title="Vimeo video player"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
