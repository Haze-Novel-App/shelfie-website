



import React from 'react';
import fantasy from '../assets/imgs/bookCover/fantasy.png';

const ReaderSection = () => {
  return (
    <section className="reader-section" id='readers'>
      <div className="container">
        <div className="reader-grid">
          
          {/* IMAGE SIDE */}
          <div className="reader-image">
            <img 
              src={fantasy} 
              alt="Shelfie Reader App" 
            />
          </div>

          {/* TEXT SIDE */}
          <div className="reader-text">
            {/* SWAPPED: Main Title is now "FOR READERS" */}
            {/* <h2 className="section-title">For Readers</h2>
            <h3 className="section-subtitle">For those passionate readers who want to</h3> */}
            <h2 className="section-title">For those passionate readers who want to</h2>
            
            <ul className="reader-features">
              <li>
                <span className="feature-num">01</span>
                <p>Discover new writers</p>
              </li>
              <li>
                <span className="feature-num">02</span>
                <p>Explore their work</p>
              </li>
              <li>
                <span className="feature-num">03</span>
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

            {/* DOWNLOAD BADGES */}
            <div className="reader-download-badges">
               <a href="#store" className="badge-link">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
               </a>
               <a href="#store" className="badge-link">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ReaderSection;