import React from 'react';
import bgImage from './bg.jpg';

const Header = () => {
  return (
    <header
      className="ui inverted vertical segment Header"
      style={{
        paddingTop: '2em',
        paddingBottom: '2em',
        background: `transparent url(${bgImage}) bottom center no-repeat`,
        backgroundSize: 'cover'
      }}
    >
      <div className="ui container">
        <h1>Football Player Finder</h1>
      </div>
    </header>
  );
};

export default Header;
