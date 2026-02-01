import React from 'react';

const articles = [
  { title: 'Reading Books Always Makes The Moments Happy', date: '2 Aug, 2024', imgText: 'Reading' },
  { title: 'Reading Books Always Makes The Moments Happy', date: '2 Aug, 2024', imgText: 'Books' },
  { title: 'Reading Books Always Makes The Moments Happy', date: '2 Aug, 2024', imgText: 'Moments' },
];

const Articles = () => {
  return (
    <section className="articles-section">
      <div className="section-header">
        <span className="subtitle">Read Our Articles</span>
        <h2>Latest Articles</h2>
      </div>
      <div className="article-grid">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <img 
              src={`https://placehold.co/600x400/e0e0e0/333333?text=${article.imgText}`} 
              alt={article.title} 
            />
            <div className="meta">{article.date}</div>
            <h3>{article.title}</h3>
            <div className="social-share">
              <span>Inspiration</span>
              <div className="share-icons">
                <i className="fab fa-facebook-f"></i>
                <i className="fab fa-twitter"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Articles;