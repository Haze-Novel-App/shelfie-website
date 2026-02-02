import React, { useState } from 'react';

const ContactUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    // Replace with your Google Apps Script Web App URL
    fetch('YOUR_APPS_SCRIPT_URL', {
      method: 'POST',
      body: formData,
    })
    .then(() => {
      alert("Thank you! Your message has been sent.");
      setIsModalOpen(false);
    })
    .catch((error) => console.error('Error!', error.message));
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          <h2 className="section-title">Have Questions? <br/> Get In Touch</h2>
          <div className="decorative-wave">
            <svg width="40" height="10" viewBox="0 0 40 10">
              <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" fill="transparent" stroke="var(--accent-color)" strokeWidth="3"/>
            </svg>
          </div>
        </div>

        <div className="contact-content-wrapper">
          <p className="section-desc">
            Whether you're a reader with feedback or an author looking to collaborate, 
            we'd love to hear from you. Reach us directly at redder@gmail.com.
          </p>
          {/* Matches the 'Read All Articles' button style */}
          <button className="btn-outline-contact" onClick={() => setIsModalOpen(true)}>
            CONTACT US <i className="fas fa-paper-plane"></i>
          </button>
        </div>
      </div>

      {/* --- Contact Modal --- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>&times;</button>
            <h2 className="modal-title">Send a Message</h2>
            <p className="modal-subtitle">We typically respond within 24 hours.</p>
            
            <form className="modal-form" onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" name="Name" placeholder="Your Full Name" required />
              </div>
              <div className="input-group">
                <input type="email" name="Email" placeholder="Your Email Address" required />
              </div>
              <div className="input-group">
                <textarea name="Message" placeholder="How can we help you today?" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">SEND MESSAGE</button>
            </form>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="bg-circles"></div>
      <div className="bg-waves"></div>
    </section>
  );
};

export default ContactUs;