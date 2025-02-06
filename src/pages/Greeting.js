import React from 'react';
import { motion } from 'framer-motion';
import HeartContainer from '../components/HeartContainer';
import './Greeting.css';

const Greeting = () => {
  return (
    <div className="greeting-container">
      <HeartContainer />
      
      <motion.div 
        className="vintage-card"
        initial={{ scale: 0, rotate: -5 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 100 }}
      >
        <div className="vintage-content">
          <h2 className="vintage-title">For You, My Babe 🌹</h2>
          <div className="handwritten-text">
            <p>My Dearest Love,</p>
            <p>  Happy Rose Day My Love🌹, I wish to express the depth of my affection. Like the eternal rose that blooms with tender care, your presence in my life has been a perpetual spring of joy.</p>
            <p>Your essence permeates my world like the sweetest fragrance, turning ordinary moments into cherished memories. Through seasons that come and go, my devotion remains steadfast - an unwavering constant in life's ever-changing tapestry.</p>
            <p>You are:</p>
            <ul className="vintage-list">
              <li>The melody that dances in my heart</li>
              <li>The dawn that breaks my darkest nights</li>
              <li>The poetry etched in my soul</li>
            </ul>
            <p>This rose I offer is but a humble symbol of a love that knows no bounds. May its petals whisper the words my lips cannot fully express.</p>
            <div className="vintage-signature">
              <p>Forever and Always,</p>
              <p className="signature-name">Your Babe</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Greeting;