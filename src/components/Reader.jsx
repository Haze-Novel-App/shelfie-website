import React from 'react';

const ReaderSection = () => {
  return (
    <section className="reader-section" id='readers'>
      <div className="container">
        <div className="reader-grid">
          <div className="reader-image">
             {/* This represents the image of the mobile app or a reader from your design */}
            <img 
              src="https://placehold.co/500x700/f3f2ec/333333?text=Reader+Experience" 
              alt="Shelfie Reader App" 
            />
          </div>

          <div className="reader-text">
            <h2 className="section-subtitle">For Readers</h2>
            <h3 className="section-title">For those Passionate Readers Who Want to</h3>
            
            <ul className="reader-features">
              <li>
                <span className="feature-icon">01</span>
                <p>Discover new writers</p>
              </li>
              <li>
                <span className="feature-icon">02</span>
                <p>Explore their work</p>
              </li>
              <li>
                <span className="feature-icon">03</span>
                <p>Take part in conversations that bring stories to life</p>
              </li>
            </ul>

            <div className="reader-description">
              <p>
                Shelfie allows readers to ask questions, share perspectives, and 
                interact with authors without expensive paywalls or exclusivity.
              </p>
              <p className="emphasis-text">
                Reading on Shelfie isn’t passive, it’s personal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReaderSection;