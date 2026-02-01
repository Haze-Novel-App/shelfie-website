import React from 'react';
import shelfie from '../assets/imgs/shelfie.png'

const DownloadApp = () => {
  return (
    <section className="download-section" id='download'>
      <div className="container">
        <div className="download-grid">
          <div className="download-content">
            <h2 className="section-title">Download Our App Now!</h2>
            <p className="download-desc">
              Download the app from the App Store or Play Store to read, write, 
              and interact with the Shelfie community.
            </p>
            
            <div className="store-buttons">
              <a href="#" className="store-link">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Get it on Google Play" 
                />
              </a>
              <a href="#" className="store-link">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="Download on the App Store" 
                />
              </a>
            </div>
          </div>

          <div className="app-mockup">
            <img 
              src={shelfie} 
              alt="Shelfie Mobile App Mockup" 
              className="phone-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;