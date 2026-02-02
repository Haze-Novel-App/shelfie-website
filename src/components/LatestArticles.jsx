import React from 'react';
import article1 from '../assets/imgs/articles/article1.jpg';
import article2 from '../assets/imgs/articles/article2.jpg';
import article3 from '../assets/imgs/articles/article3.jpg';

const LatestArticles = () => {
  const articles = [
    {
      date: '2 Aug, 2021',
      title: 'Reading Books Always Makes The Moments Happy',
      category: 'Inspiration',
      image: article1
    },
    {
      date: '2 Aug, 2021',
      title: 'Reading Books Always Makes The Moments Happy',
      category: 'Inspiration',
      image: article2
    },
    {
      date: '2 Aug, 2021',
      title: 'Reading Books Always Makes The Moments Happy',
      category: 'Inspiration',
      image: article3
    }
  ];

  return (
    <section className="articles-section" id="articles">
      <div className="container">
        <div className="section-header">
          <p className="subtitle">Read Our Articles</p>
          <h2 className="title">Latest Articles</h2>
        </div>

        <div className="articles-grid">
          {articles.map((article, index) => (
            <article className="article-card" key={index}>
              <div className="article-image">
                <img src={article.image} alt="Article thumbnail" />
              </div>
              <div className="article-info">
                <span className="date">{article.date}</span>
                <h3 className="article-title">{article.title}</h3>
                <div className="article-footer">
                  <span className="category">{article.category}</span>
                  <div className="social-share">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-instagram"></i>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-footer">
          <button className="btn-read-all">
            READ ALL ARTICLES <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;