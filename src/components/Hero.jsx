




import React, { useState } from 'react';
import horrorBook from '../assets/imgs/bookCover/romantic.png';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupStep, setPopupStep] = useState(1);
  const [selectedRole, setSelectedRole] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setPopupStep(1);
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setPopupStep(2);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">Stories were never meant to be one-way</h1>
          <p className="hero-desc">
            On Shelfie, reading is just the beginning.
            Discover writers, explore their stories, and interact directly with
            authors through conversations that continue beyond the page.
          </p>

          <button onClick={togglePopup} className="btn">
            Get Started on Shelfie <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        <div className="hero-image">
          <img src={horrorBook} alt="Featured Book" />
        </div>
      </div>

      {/* MODAL POPUP */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup} className="close-x">&times;</button>

            {popupStep === 1 ? (
              <div className="step-content">
                <h2 className="popup-h2">How do you want to use Shelfie?</h2>
                <p className="popup-p">Choose your role to get the right app experience.</p>

                <div className="role-selection">
                  <div className="choice-box" onClick={() => handleRoleSelect('Reader')}>
                    <h3>Reader</h3>
                    <p>For book lovers & explorers.</p>
                    <span className="select-text">Select Reader</span>
                  </div>

                  <div className="choice-box" onClick={() => handleRoleSelect('Author')}>
                    <h3>Author</h3>
                    <p>For writers & storytellers.</p>
                    <span className="select-text">Select Author</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="step-content">
                <h2 className="popup-h2">Download {selectedRole} App</h2>
                <p className="popup-p">Get started with your {selectedRole.toLowerCase()} account.</p>

                <div className="download-badges">
                  <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                  <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                </div>

                <button className="btn-back" onClick={() => setPopupStep(1)}>
                  <i className="fas fa-arrow-left"></i> Change Role
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;