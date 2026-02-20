



import React, { useState, useEffect } from 'react';
import horrorBook from '../assets/imgs/bookCover/romantic.png';
import mystery1 from '../assets/imgs/bookCover/mystery1.png';
import adventure from '../assets/imgs/bookCover/adventure1.png';

const SLIDES = [
  { title: "Stories were never meant to be one-way", image: horrorBook },
  { title: "Reading that actually listens back", image: mystery1 },
  { title: "Where authors and readers connect", image: adventure }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrapper">
        <div className="hero-text-content">
          <div className="title-area">
            <h1 className="hero-title">{SLIDES[currentIndex].title}</h1>
          </div>
          <p className="hero-desc">
            On <span className="brand-highlight">Shelfie</span>, reading is just the beginning. Discover writers, explore their stories,
            and interact directly with authors through conversations that continue beyond the page.
          </p>
          <button className="btn" onClick={togglePopup}>
            Get Started on Shelfie
          </button>
        </div>

        <div className="hero-image-slider">
          {SLIDES.map((slide, index) => {
            let position = "nextSlide";
            if (index === currentIndex) position = "activeSlide";
            if (index === currentIndex - 1 || (currentIndex === 0 && index === SLIDES.length - 1)) {
              position = "lastSlide";
            }
            return (
              <div className={`slide-item ${position}`} key={index}>
                <img src={slide.image} alt="Book Cover" className="hero-img" />
              </div>
            );
          })}
        </div>
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup} className="close-x">&times;</button>

            <div className="step-content">
              <h2 className="popup-h2">JOIN SHELFIE TODAY</h2>
              <p className="popup-p">Choose your role to download the app.</p>

              <div className="role-selection">
                {/* READER CARD */}
                <div className="choice-box">
                  <div className="role-header">
                    <h3>READER</h3>
                    <p>For book lovers & explorers.</p>
                  </div>
                  <div className="download-badges">
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.jac.readerapp"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                  </div>
                </div>

                {/* AUTHOR CARD */}
                <div className="choice-box">
                  <div className="role-header">
                    <h3>AUTHOR</h3>
                    <p>For writers & storytellers.</p>
                  </div>
                  <div className="download-badges">
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                    <a href="https://play.google.com/store/apps/details?id=com.jac.authorapp"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;