import React from 'react';

const Brands = () => {
  const brands = [
    { icon: 'fa-layer-group', name: 'BookStore' },
    { icon: 'fa-university', name: 'BookDoor' },
    { icon: 'fa-book-open', name: 'Library' },
    { icon: 'fa-feather-alt', name: 'Flaprise' },
  ];

  return (
    <section className="brands-bar">
      {brands.map((brand, index) => (
        <div className="brand-item" key={index}>
          <i className={`fas ${brand.icon}`}></i> 
          <span>{brand.name}</span>
        </div>
      ))}
    </section>
  );
};

export default Brands;