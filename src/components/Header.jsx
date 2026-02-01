

// import React from 'react';

// const Header = () => {
//   const handleScroll = (e, targetId) => {
//     e.preventDefault();
//     const element = document.getElementById(targetId);
//     if (element) {
//       // Offset for sticky header height
//       const offset = 80; 
//       const bodyRect = document.body.getBoundingClientRect().top;
//       const elementRect = element.getBoundingClientRect().top;
//       const elementPosition = elementRect - bodyRect;
//       const offsetPosition = elementPosition - offset;

//       window.scrollTo({
//         top: offsetPosition,
//         behavior: 'smooth'
//       });
//     }
//   };

//   return (
//     <header className="main-header">
//       <div className="logo" onClick={(e) => handleScroll(e, 'home')}>
//         SHELFIE
//       </div>
      
//       <nav className="navbar">
//         <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
//         <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
//         <a href="#readers" onClick={(e) => handleScroll(e, 'readers')}>Readers</a>
//         <a href="#writers" onClick={(e) => handleScroll(e, 'writers')}>Writers</a>
//         <a href="#download" onClick={(e) => handleScroll(e, 'download')}>App</a>
//       </nav>

//       {/* Optional: Add a small search icon or 'Join' button here to balance the right side */}
//     </header>
//   );
// };

// export default Header;












import React from 'react';

const Header = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    
    if (element) {
      // We offset by 60px because that is the height of your header
      const headerOffset = 60; 
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
      <div className="logo" onClick={(e) => handleScroll(e, 'home')}>SHELFIE</div>
      <nav className="navbar">
        {/* The href is a fallback, the onClick handles the smooth scroll */}
        <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
        <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
        <a href="#readers" onClick={(e) => handleScroll(e, 'readers')}>Readers</a>
        <a href="#writers" onClick={(e) => handleScroll(e, 'writers')}>Writers</a>
        <a href="#download" onClick={(e) => handleScroll(e, 'download')}>App</a>
      </nav>
    </header>
  );
};

export default Header;