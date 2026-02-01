import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-col">
        <div className="logo">SHELFIE</div>
        <p>
          Beyond the page. Connecting readers and writers through 
          meaningful conversations and interactive storytelling.
        </p>
      </div>
      <div className="footer-col">
        <h4>About Us</h4>
        <a href="#vision">Vision</a>
        <a href="#articles">Articles</a>
      </div>
      <div className="footer-col">
        <h4>Discover</h4>
        <a href="#home">Home</a>
        <a href="#books">Books</a>
      </div>
      <div className="footer-col">
        <h4>My Account</h4>
        <a href="#signin">Sign In</a>
        <a href="#cart">View Cart</a>
      </div>
    </footer>
  );
};

export default Footer;