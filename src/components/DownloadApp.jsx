

import React, { useState, useEffect } from 'react';
import locationIcon from '../assets/imgs/location.png';
import wireframe from '../assets/imgs/wireframe1.png';
import wireframe2 from '../assets/imgs/wireframe2.png';

const AuthorRegistration = () => {
  const carouselImages = [wireframe, wireframe2];
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isLocating, setIsLocating] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    location: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Geolocation logic
  const handleGetLocation = () => {
    if (!navigator.geolocation) return;
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
      () => setIsLocating(false)
    );
  };

  // AJAX Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formsparkUrl = "https://submit-form.com/ETevEIdE2";

    try {
      await fetch(formsparkUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      
      setSubmitted(true);
      setFormData({ name: '', email: '', number: '', location: '' });
      setTimeout(() => setSubmitted(false), 4000);

    } catch (error) {
      console.error("Submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="reg-section" id="register">
      {/* POPUP TOAST NOTIFICATION */}
      {submitted && (
        <div className="toast-popup">
          <svg viewBox="0 0 24 24" className="toast-icon">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
          <span>Thank you! Registration successful.</span>
        </div>
      )}

      <div className="reg-container">
        {/* Left Section: Carousel */}
        <div className="mobile-frame">
          <div className="screen-container">
            {/* REMOVED slider-track div 
              Images are now stacked on top of each other
            */}
            {carouselImages.map((img, index) => (
              <img 
                key={index} 
                src={img} 
                alt="Slide" 
                // Toggle active class for zoom/fade effect
                className={`app-screen-img ${index === currentImgIndex ? 'active' : ''}`} 
              />
            ))}
            
            <div className="slider-dots">
              {carouselImages.map((_, index) => (
                <span key={index} className={`dot ${index === currentImgIndex ? 'active' : ''}`} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Section: Form ALWAYS visible */}
        <div className="reg-content">
          <div className="form-header">
            <h2 className="section-title">Join as an Author</h2>
            <p className="section-desc">Start your storytelling journey with Shelfie today.</p>
          </div>

          <form className="reg-form" onSubmit={handleSubmit}>
             {/* ... (Keep your inputs exactly as they were) ... */}
            <div className="input-group">
              <input type="text" placeholder="Full Name" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email Address" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
            </div>
            <div className="input-group">
              <input type="tel" placeholder="Phone Number" value={formData.number} onChange={(e) => setFormData({ ...formData, number: e.target.value })} />
            </div>
            <div className="input-group location-input">
              <input type="text" placeholder="Location" value={formData.location} onChange={(e) => setFormData({ ...formData, location: e.target.value })} />
              <button type="button" className="location-action-btn" onClick={handleGetLocation} disabled={isLocating}>
                {isLocating ? "..." : <img src={locationIcon} alt="Locate" className="small-loc-icon" />}
              </button>
            </div>
            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Create Author Account"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthorRegistration;