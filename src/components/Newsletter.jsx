import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="newsletter-container">
        <div className="newsletter-text">
          <h2 className="section-title">Subscribe To Our Newsletter</h2>
          <div className="decorative-wave">
            <svg width="40" height="10" viewBox="0 0 40 10">
              <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" fill="transparent" stroke="#c5a992" strokeWidth="2"/>
            </svg>
          </div>
        </div>

        <div className="newsletter-form-wrapper">
          <p className="form-desc">
            On Shelfie, reading is just the beginning. Join our community to get 
            updates on new authors, stories, and conversations.
          </p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter Your Email Address Here" 
              className="newsletter-input" 
              required
            />
            <button type="submit" className="newsletter-btn">
              SEND <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </div>
      
      {/* Decorative Background Elements */}
      <div className="bg-circles left"></div>
      <div className="bg-waves right"></div>
    </section>
  );
};

export default Newsletter;