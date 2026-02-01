import React from 'react';

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="newsletter-content">
        <h2>Subscribe To Our Newsletter</h2>
        <div className="input-group">
          <input type="email" placeholder="Enter Your Email Address Here" />
          <button>SEND <i className="fas fa-paper-plane"></i></button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;