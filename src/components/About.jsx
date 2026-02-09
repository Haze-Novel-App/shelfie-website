// import React from 'react';

// const About = () => {
//   return (
//     <section className="about-section" id='about'>
//       <div className="container">
//         <div className="about-grid">
//           <div className="about-header">
//             <h2 className="section-subtitle">What Is Shelfie</h2>
//             <h3 className="section-title">A shared space for readers and writers</h3>
//           </div>
          
//           <div className="about-content">
//             <p className="highlight-text">
//               Shelfie is an interactive storytelling platform built for both readers and writers.
//             </p>
//             <p className="description-text">
//               Writers can share their books, stories, and ideas, while readers can engage 
//               directly with authors through meaningful interactions. Unlike traditional 
//               eBooks platforms, Shelfie focuses on connection, dialogue, and community, 
//               not just content distribution.
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;







import React from 'react';

const About = () => {
  return (
    <section className="about-elegant" id='about'>
      <div className="container">
        <div className="editorial-grid">
          
          {/* Section Heading with Accent */}
          <div className="header-column">
            <div className="accent-bar"></div>
            <h2 className="main-title">What Is Shelfie</h2>
            <p className="subtitle">A shared space for readers and writers</p>
          </div>

          {/* Core Content with Interactive Highlighting */}
          <div className="content-column">
            <div className="text-wrapper">
              <p className="lead-paragraph">
                Shelfie is an <span className="interactive-highlight">interactive storytelling</span> platform 
                built for both <span className="interactive-highlight">readers and writers</span>.
              </p>
              
              <p className="main-description">
                Writers can share their books, stories, and ideas, while readers can engage 
                directly with authors through <span className="interactive-highlight">meaningful interactions</span>.
                Unlike traditional eBooks platforms, Shelfie focuses on <span className="interactive-highlight">connection, dialogue, and community</span>, 
                not just content distribution.
              </p>
            </div>
            
            {/* Minimalist Art Element */}
            <div className="minimal-art">
              <svg width="60" height="2" viewBox="0 0 60 2">
                <line x1="0" y1="1" x2="60" y2="1" stroke="var(--accent-color)" strokeWidth="2" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;