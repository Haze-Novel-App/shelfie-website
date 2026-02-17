

// import React from 'react';
// // import './Header.scss'; 

// const Header = () => {
//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
    
//     if (element) {
//       const headerOffset = 60; 
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
//       {/* Navbar removed as requested */}
//       <div>
//         <button>Get started as author</button>
//       </div>
//     </header>
//   );
// };

// export default Header;








import React from 'react';
// import './Header.scss'; 

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      // Offset slightly less for mobile (60) vs desktop (70)
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

      <button 
        className="btn-author" 
        onClick={(e) => handleScroll(e, 'register')}
      >
        Get started as author
      </button>
    </header>
  );
};

export default Header;