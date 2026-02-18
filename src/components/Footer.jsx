

// import React from "react";
// // import './Footer.scss'; 

// const Footer = () => {
//   return (
//     <footer className="main-footer">
//       <div className="footer-container">
        
//         {/* COLUMN 1: BRAND (Left Side) */}
//         <div className="footer-col footer-brand">
//           <h2 className="footer-logo">
//             SHELFIE<span className="dot">.</span> 
//             <span className="slogan">Your Shelf. Your Story.</span>
//           </h2>
//           <p className="description">
//             Beyond the page. Connecting readers and writers through
//             meaningful conversations and interactive storytelling.
//           </p>
//         </div>

//         {/* COLUMN 2: LINKS (Right Side) */}
//         <div className="footer-col links-col">
//           <h4>About Us</h4>
//           <a href="#vision">Vision</a>
//           <a href="#articles">Articles</a>
//           <a href="#careers">Careers</a>
//         </div>

//       </div>

//       {/* FOOTER BOTTOM SECTION */}
//       <div className="footer-bottom">
//         <a 
//           href="https://www.jacmagnus.com/" 
//           target="_blank" 
//           rel="noopener noreferrer"
//           className="jac-link"
//         >
//           A product built by <span className="brand-highlight">JAC Magnus Private Limited</span>
//         </a>
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
          {/* ADDED EMAIL SECTION */}
          <div className="footer-contact">
            <a href="mailto:hello@shelfiehello.com" className="email-link">
              Let’s connect at <span className="email-highlight">hello@shelfiehello.com</span>
            </a>
          </div>
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
          {/* ADDED COPYRIGHT ICON */}
          &copy; A product built by <span className="brand-highlight">JAC Magnus Private Limited</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;