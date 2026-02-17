

// import React from "react";

// const Footer = () => {
//   return (
//     <footer className="main-footer">
//       <div className="footer-container">
        
//         {/* COLUMN 1: BRAND */}
//         <div className="footer-col footer-brand">
//           <h2 className="footer-logo">SHELFIE<span className="dot">.</span> <span>Your Shelf. Your Story</span></h2>
//           <p className="description">
//             Beyond the page. Connecting readers and writers through
//             meaningful conversations and interactive storytelling.
//           </p>
//         </div>

//         {/* COLUMN 2 */}
//         <div className="footer-col">
//           <h4>About Us</h4>
//           <a href="#vision">Vision</a>
//           <a href="#articles">Articles</a>
//           <a href="#careers">Careers</a>
//         </div>

//         {/* COLUMN 3 */}
//         <div className="footer-col">
//           <h4>Discover</h4>
//           <a href="#home">Home</a>
//           <a href="#books">Books</a>
//           <a href="#authors">Authors</a>
//         </div>

//         {/* COLUMN 4 */}
//         <div className="footer-col">
//           <h4>My Account</h4>
//           <a href="#signin">Sign In</a>
//           <a href="#cart">View Cart</a>
//           <a href="#help">Help Center</a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;










import React from "react";
// import './Footer.scss'; 

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND (Left Side) */}
        <div className="footer-col footer-brand">
          <h2 className="footer-logo">
            SHELFIE<span className="dot">.</span> 
            <span className="slogan">Your Shelf. Your Story.</span>
          </h2>
          <p className="description">
            Beyond the page. Connecting readers and writers through
            meaningful conversations and interactive storytelling.
          </p>
        </div>

        {/* COLUMN 2: LINKS (Right Side) */}
        <div className="footer-col links-col">
          <h4>About Us</h4>
          <a href="#vision">Vision</a>
          <a href="#articles">Articles</a>
          <a href="#careers">Careers</a>
        </div>

      </div>

      {/* FOOTER BOTTOM SECTION */}
      <div className="footer-bottom">
        <a 
          href="https://www.jacmagnus.com/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="jac-link"
        >
          A product built by <span className="brand-highlight">JAC Magnus Private Limited</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;