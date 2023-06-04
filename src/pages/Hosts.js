import React, { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';
import ReactMarkdown from 'react-markdown';
import data from '../data/hosts.json';
import './Hosts.css';

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
        <br />
        <div className="title">
          <ReactMarkdown>{data.hostsListTitle[language]}</ReactMarkdown>
        </div>
        <div className='text-container'>
        {data.hosts.map((host, index) => (
          <div key={index}>
            <a className='host-title' href={host.url[language]}>{host.name[language]}</a>
            <p className='host-adress'>{host.address[language]}</p>
            {host.events && (
              <div className="host-events">
                <p className='host-events-title'>{data.hostEvenListTitle[language]}</p>
                <ul>
                  {host.events.map((event, eventIndex) => (
                    <li key={eventIndex}>
                      {event.name[language] && (
                        <>
                          {event.name[language]}
                        </>
                      )}
                      {event.time[language] && (
                        <>
                          - {event.time[language].replace('T', data.timeSeparator[language])}
                        </>
                      )}
                      {event.url[language] && (
                        <>
                          - {event.url[language]}
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Hosts;