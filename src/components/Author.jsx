import React from 'react';
import adventure from '../assets/imgs/bookCover/advantur.png';

const AuthorSection = () => {
  return (
    <section className="author-section" id="writers">
      <div className="container">
        <div className="author-grid">
          
          <div className="author-text">
            <h2 className="section-subtitle">For Writers</h2>
            <h3 className="section-title">For writers who want real reader engagement</h3>
            
            <div className="author-description">
              <p className="highlight-text">
                Shelfie helps emerging & established writers go beyond publishing.
              </p>
              <p>
                Share your stories, connect directly with readers, and build a 
                community around your work. Our platform is designed to turn 
                passive readers into active participants in your creative journey.
              </p>
            </div>

            <div className="author-benefits">
              <div className="benefit-item">
                <h4>Direct Connection</h4>
                <p>Talk to your audience without intermediaries.</p>
              </div>
              <div className="benefit-item">
                <h4>Community Building</h4>
                <p>Foster a loyal following that grows with every chapter.</p>
              </div>
            </div>
          </div>

          <div className="author-image">
            <img 
              src={adventure} 
              alt="Shelfie Author Community" 
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AuthorSection;