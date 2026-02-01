import React from 'react';

const books = [
  { title: 'Simple Way Of Piece Life', author: 'Armor Ramsey', imgText: 'Simple+Way' },
  { title: 'Great Travel At Desert', author: 'Sanchit Howdy', imgText: 'Great+Travel' },
  { title: 'The Lady Beauty Scarlett', author: 'Arthur Doyle', imgText: 'The+Lady+Beauty' },
  { title: 'Once Upon A Time', author: 'Klien Marry', imgText: 'Once+Upon+A+Time' },
];

const FeaturedBooks = () => {
  return (
    <section className="featured-section">
      <div className="section-header">
        <span className="subtitle">Some Quality Items</span>
        <h2>Featured Books</h2>
      </div>

      <div className="book-grid">
        {books.map((book, index) => (
          <div className="book-card" key={index}>
            <div className="book-img">
              <img 
                src={`https://placehold.co/300x450/e0e0e0/333333?text=${book.imgText}`} 
                alt={book.title} 
              />
              <button className="add-to-cart">Add To Cart</button>
            </div>
            <h3>{book.title}</h3>
            <span className="author">{book.author}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedBooks;