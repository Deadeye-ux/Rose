import React from 'react';
import { Link } from 'react-router-dom';
import BloomingRose from '../components/BloomingRose';
import HeartContainer from '../components/HeartContainer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <HeartContainer />
      <h1 className="page-heading">Happy Rose Day My Love</h1>
      <BloomingRose />
      <Link to="/greeting" className="normal-button">
        Click Me
      </Link>
    </div>
  );
};

export default Home;