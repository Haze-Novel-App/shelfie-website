import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="not-found-section">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Oops! This shelf is empty.</h2>
        <p>The page you are looking for might have been moved or deleted.</p>
        <Link to="/" className="back-home-btn">
          Back to Stories
        </Link>
      </div>
    </section>
  );
};

export default NotFound; // Crucial: must match the import name in App.js