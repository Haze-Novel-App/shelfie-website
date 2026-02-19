

import React from 'react';

const About = () => {
  return (
    <section className="about-elegant" id='about'>
      <div className="container">
        <div className="editorial-grid">
          
          {/* Section Heading with Accent */}
          <div className="header-column">
            <div className="accent-bar"></div>
            <h2 className="main-title">What Is Shelfie</h2>
            <p className="subtitle">A shared space for readers and writers</p>
          </div>

          {/* Core Content with Interactive Highlighting */}
          <div className="content-column">
            <div className="text-wrapper">
              <p className="lead-paragraph">
                Shelfie is an interactive storytelling platform 
                built for both readers and writers.
              </p>
              
              <p className="main-description">
                Writers can share their books, stories, and ideas, while readers can engage 
                directly with authors through meaningful interactions.
                Unlike traditional eBooks platforms, Shelfie focuses on connection, dialogue, and community, 
                not just content distribution.
              </p>
            </div>
            
            {/* Minimalist Art Element */}
            <div className="minimal-art">
              <svg width="60" height="2" viewBox="0 0 60 2">
                <line x1="0" y1="1" x2="60" y2="1" stroke="var(--accent-color)" strokeWidth="2" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;