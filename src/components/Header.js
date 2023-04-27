import React from 'react';
import Banner from './Banner';
// import Navigation from './Navigation';
import '../sharedStyles.css';

const Header = () => {
  return (
    <header className="header">
      <Banner />
      {/* <Navigation /> */}
    </header>
  );
};

export default Header;
