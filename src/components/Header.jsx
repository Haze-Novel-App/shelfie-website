


// import React from 'react';
// // import './Header.scss'; 

// const Header = () => {
//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);

//     if (element) {
//       // Offset slightly less for mobile (60) vs desktop (70)
//       const headerOffset = window.innerWidth < 768 ? 60 : 70;
//       const elementPosition = element.getBoundingClientRect().top;
//       const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: "smooth"
//       });
//     }
//   };

//   return (
//     <header className="main-header">
//       <div className="logo-container" onClick={(e) => handleScroll(e, 'home')}>
//         <h1 className="logo-title">SHELFIE</h1>
//         <span className="logo-slogan">Your Shelf. Your Story.</span>
//       </div>

//       <button 
//         className="btn-author" 
//         onClick={(e) => handleScroll(e, 'register')}
//       >
//         Get started as author
//       </button>
//     </header>
//   );
// };

// export default Header;












import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false); // Close menu when a link is clicked
    const element = document.getElementById(targetId);

    if (element) {
      const headerOffset = window.innerWidth < 768 ? 60 : 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  

  return (
    <header className="main-header">
      <div className="logo-container" onClick={(e) => handleScroll(e, 'home')}>
        <h1 className="logo-title">SHELFIE</h1>
        <span className="logo-slogan">Your Shelf. Your Story.</span>
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className="header-actions">
        <button
          className="btn-reader"
          onClick={(e) => handleScroll(e, 'readers')}
        >
          <span className="text-desktop">Read Great books!</span>
          <span className="text-mobile">Read</span>
        </button>
        <button
          className="btn-author"
          onClick={(e) => handleScroll(e, 'register')}
        >
          <span className="text-desktop">Get started as author</span>
          <span className="text-mobile">Join</span>
        </button>
      </div>
    </header>
  );
};

export default Header;