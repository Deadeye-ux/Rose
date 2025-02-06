import React from 'react';
import './BloomingRose.css';

const BloomingRose = () => {
  return (
    <div className="rose-container">
      <img 
        src="/rose.gif" 
        alt="Blooming Rose" 
        className="blooming-rose" 
      />
    </div>
  );
};

export default BloomingRose;