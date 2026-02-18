


import React from 'react';
import adventure from '../assets/imgs/bookCover/adventure1.png'; // Make sure path matches your file

const AuthorSection = () => {
  return (
    <section className="author-section" id="writers">
      <div className="container">
        <div className="author-grid">
          
          {/* TEXT SIDE (Left) */}
          <div className="author-text">
            {/* SWAPPED: Main Title is now "FOR WRITERS" */}
            {/* <h2 className="section-title">For Writers</h2>
            <h3 className="section-subtitle">For writers who want real reader engagement</h3> */}
            <h2 className="section-title">For writers who want real reader engagement</h2>
            
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

            {/* BENEFITS CARDS (Orange Theme) */}
            <div className="author-benefits">
              <div className="benefit-card">
                <h4>Direct Connection</h4>
                <p>Talk to your audience without intermediaries.</p>
              </div>
              <div className="benefit-card">
                <h4>Community Building</h4>
                <p>Foster a loyal following that grows with every chapter.</p>
              </div>
            </div>

            {/* DOWNLOAD BADGES */}
            <div className="author-download-badges">
               <a href="#store" className="badge-link">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="Download on App Store" />
               </a>
               <a href="#store" className="badge-link">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Get it on Google Play" />
               </a>
            </div>
          </div>

          {/* IMAGE SIDE (Right) */}
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