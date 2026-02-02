import React from 'react';
import appMockup from '../assets/imgs/shelfie.png'; 

const DownloadApp = () => {
  return (
    <section className="download-section" id="download">
      <div className="download-container">
        
        {/* Mobile-like structure for the image */}
        <div className="mobile-frame">
          <div className="screen-container">
            <img src={appMockup} alt="Shelfie App UI" className="app-screen-img" />
          </div>
        </div>

        {/* Scaled-down content */}
        <div className="download-content">
          <h2 className="section-title">Download Our App Now !</h2>
          <div className="decorative-squiggle">
            <svg width="30" height="8" viewBox="0 0 40 10">
              <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" fill="transparent" stroke="#c5a992" strokeWidth="2"/>
            </svg>
          </div>
          
          <p className="section-desc">
            Shelfie is an interactive storytelling platform built for both readers and writers. 
            Download the app today to join conversations.
          </p>

          <div className="store-badges">
            <a href="#" className="badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            </a>
            <a href="#" className="badge">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
            </a>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default DownloadApp;