

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
//           {/* ADDED EMAIL SECTION */}
//           <div className="footer-contact">
//             <a href="mailto:hello@shelfiehello.com" className="email-link">
//               Let’s connect at <span className="email-highlight">hello@shelfiehello.com</span>
//             </a>
//           </div>
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
//           {/* ADDED COPYRIGHT ICON */}
//           &copy; A product built by <span className="brand-highlight">JAC Magnus Private Limited</span>
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footer;









import React from "react";
// import { FaXTwitter } from "react-icons/fa6"; // If you use react-icons

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND */}
        <div className="footer-col footer-brand">
          <h2 className="footer-logo">
            SHELFIE<span className="dot">.</span> 
            <span className="slogan">Your Shelf. Your Story.</span>
          </h2>
          <p className="description">
            Beyond the page. Connecting readers and writers through
            meaningful conversations and interactive storytelling.
          </p>
          
          <div className="footer-contact">
            <a href="mailto:hello@shelfiehello.com" className="email-link">
              Let’s connect at <span className="email-highlight">hello@shelfiehello.com</span>
            </a>
          </div>

          {/* SOCIAL MEDIA SECTION */}
          <div className="footer-social">
            <a href="https://x.com/Hey_Shelfie" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* COLUMN 2: LINKS */}
        <div className="footer-col links-col">
          <h4>About Us</h4>
          <a href="#vision">Vision</a>
          <a href="#articles">Articles</a>
          <a href="#careers">Careers</a>
        </div>

      </div>

      <div className="footer-bottom">
        <a href="https://www.jacmagnus.com/" target="_blank" rel="noopener noreferrer" className="jac-link">
          &copy; A product built by <span className="brand-highlight">JAC Magnus Private Limited</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;