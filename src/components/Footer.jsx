

// import React from "react";
// // Image is imported in SCSS via URL, but you can keep this for other uses
// import banner from '../assets/imgs/footer-banner.png';

// const Footer = () => {

// const footerStyle = {
//     background: `linear-gradient(rgba(26, 11, 46, 0.85), rgba(26, 11, 46, 0.85)), url(${banner})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
//   };

//   return (
//     <footer className="main-footer" style={footerStyle}>
//       <div className="footer-container">
        
//         {/* COLUMN 1: BRAND */}
//         <div className="footer-col footer-brand">
//           <h2 className="footer-logo">SHELFIE</h2>
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
//         </div>

//         {/* COLUMN 3 */}
//         <div className="footer-col">
//           <h4>Discover</h4>
//           <a href="#home">Home</a>
//           <a href="#books">Books</a>
//         </div>

//         {/* COLUMN 4 */}
//         <div className="footer-col">
//           <h4>My Account</h4>
//           <a href="#signin">Sign In</a>
//           <a href="#cart">View Cart</a>
//         </div>

//       </div>
//     </footer>
//   );
// };

// export default Footer;













import React from "react";

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-container">
        
        {/* COLUMN 1: BRAND */}
        <div className="footer-col footer-brand">
          <h2 className="footer-logo">SHELFIE<span className="dot">.</span></h2>
          <p className="description">
            Beyond the page. Connecting readers and writers through
            meaningful conversations and interactive storytelling.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>About Us</h4>
          <a href="#vision">Vision</a>
          <a href="#articles">Articles</a>
          <a href="#careers">Careers</a>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>Discover</h4>
          <a href="#home">Home</a>
          <a href="#books">Books</a>
          <a href="#authors">Authors</a>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>My Account</h4>
          <a href="#signin">Sign In</a>
          <a href="#cart">View Cart</a>
          <a href="#help">Help Center</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;