import React from 'react';

const About = () => {
  return (
    <section className="about-section" id='about'>
      <div className="container">
        <div className="about-grid">
          <div className="about-header">
            <h2 className="section-subtitle">What Is Shelfie</h2>
            <h3 className="section-title">A shared space for readers and writers</h3>
          </div>
          
          <div className="about-content">
            <p className="highlight-text">
              Shelfie is an interactive storytelling platform built for both readers and writers.
            </p>
            <p className="description-text">
              Writers can share their books, stories, and ideas, while readers can engage 
              directly with authors through meaningful interactions. Unlike traditional 
              eBooks platforms, Shelfie focuses on connection, dialogue, and community, 
              not just content distribution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;