



import React, { useState, useEffect } from 'react';
import appMockup from '../assets/imgs/shelfie.png';
import locationIcon from '../assets/imgs/location.png';
import reader from '../assets/imgs/reader.png';
import writer from '../assets/imgs/writer.png';

const AuthorRegistration = () => {
  // Carousel images array
  const carouselImages = [appMockup, reader, writer];
  
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    location: ''
  });
  const [isLocating, setIsLocating] = useState(false);

  // Auto-slide logic: every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) => 
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setFormData({ 
          ...formData, 
          location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` 
        });
        setIsLocating(false);
      },
      () => {
        alert("Unable to retrieve your location");
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <section className="reg-section" id="register">
      <div className="reg-container">

        {/* Left Section: App Mockup Sliding Carousel */}
        <div className="mobile-frame">
          <div className="screen-container">
            <div 
              className="slider-track" 
              style={{ transform: `translateX(-${currentImgIndex * 100}%)` }}
            >
              {carouselImages.map((img, index) => (
                <img 
                  key={index}
                  src={img} 
                  alt={`Shelfie Slide ${index}`} 
                  className="app-screen-img" 
                />
              ))}
            </div>
            
            {/* Optional: Visual Pagination Dots */}
            <div className="slider-dots">
              {carouselImages.map((_, index) => (
                <span 
                  key={index} 
                  className={`dot ${index === currentImgIndex ? 'active' : ''}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="reg-content">
          <div className="form-header">
            <h2 className="section-title">Join as an Author</h2>
            <p className="section-desc">Start your storytelling journey with Shelfie today.</p>
          </div>

          <form className="reg-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
            </div>

            <div className="input-group location-input">
              <input
                type="text"
                placeholder="Location (Optional)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              <button
                type="button"
                className="location-action-btn"
                onClick={handleGetLocation}
                disabled={isLocating}
                title="Get current location"
              >
                {isLocating ? (
                  <span className="loader-dots">...</span>
                ) : (
                  <img src={locationIcon} alt="Locate" className="small-loc-icon" />
                )}
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Create Author Account
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AuthorRegistration;




