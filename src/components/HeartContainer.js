import React from 'react';
import './HeartContainer.css';

const HeartContainer = () => {
  const hearts = Array(50).fill(null);
  
  return (
    <>
      {hearts.map((_, i) => (
        <div 
          key={i}
          className="floating-heart"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            fontSize: `${Math.random() * 10 + 10}px`
          }}
        >❤️</div>
      ))}
    </>
  );
};

export default HeartContainer;