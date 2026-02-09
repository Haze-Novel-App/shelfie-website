


// import React, { useState } from 'react';
// import horrorBook from '../assets/imgs/bookCover/romantic.png';

// const Hero = () => {
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [popupStep, setPopupStep] = useState(1);
//   const [selectedRole, setSelectedRole] = useState('');

//   const togglePopup = () => {
//     setIsPopupOpen(!isPopupOpen);
//     setPopupStep(1);
//   };

//   const handleRoleSelect = (role) => {
//     setSelectedRole(role);
//     setPopupStep(2);
//   };

//   return (
//     <section className="hero" id="home">
//       <div className="hero-container">
//         <div className="hero-content">
//           <h1 className="hero-title">Stories were never meant to be one-way</h1>
//           <p className="hero-desc">
//             On Shelfie, reading is just the beginning.
//             Discover writers, explore their stories, and interact directly with
//             authors through conversations that continue beyond the page.
//           </p>

//           <button onClick={togglePopup} className="btn">
//             Get Started on Shelfie <i className="fas fa-arrow-right"></i>
//           </button>
//         </div>

//         <div className="hero-image">
//           <img src={horrorBook} alt="Featured Book" />
//         </div>
//       </div>

//       {/* MODAL POPUP */}
//       {isPopupOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-card" onClick={(e) => e.stopPropagation()}>
//             <button onClick={togglePopup} className="close-x">&times;</button>

//             {popupStep === 1 ? (
//               <div className="step-content">
//                 <h2 className="popup-h2">How do you want to use Shelfie?</h2>
//                 <p className="popup-p">Choose your role to get the right app experience.</p>

//                 <div className="role-selection">
//                   <div className="choice-box" onClick={() => handleRoleSelect('Reader')}>
//                     <h3>Reader</h3>
//                     <p>For book lovers & explorers.</p>
//                     <span className="select-text">Select Reader</span>
//                   </div>

//                   <div className="choice-box" onClick={() => handleRoleSelect('Author')}>
//                     <h3>Author</h3>
//                     <p>For writers & storytellers.</p>
//                     <span className="select-text">Select Author</span>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="step-content">
//                 <h2 className="popup-h2">Download {selectedRole} App</h2>
//                 <p className="popup-p">Get started with your {selectedRole.toLowerCase()} account.</p>

//                 <div className="download-badges">
//                   <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
//                   <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
//                 </div>

//                 <button className="btn-back" onClick={() => setPopupStep(1)}>
//                   <i className="fas fa-arrow-left"></i> Change Role
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;













import React, { useState, useEffect } from 'react';
import horrorBook from '../assets/imgs/bookCover/romantic.png';
import mystery1 from '../assets/imgs/bookCover/mystery1.png';
import adventure from '../assets/imgs/bookCover/adventure1.png';

const SLIDES = [
  {
    title: "Stories were never meant to be one-way",
    desc: "On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors through conversations that continue beyond the page.",
    image: horrorBook,
    accent: "#7c4dff"
  },
  {
    title: "Reading that listens back",
    desc: "Shelfie turns reading into a two-way experience. Dive into stories, reflect through audio, and engage with books in ways that feel personal, immersive, and alive.",
    image: mystery1,
    accent: "#00d2ff"
  },
  {
    title: "Where authors and readers meet",
    desc: "Shelfie gives writers and readers a shared space to connect. Share stories, exchange thoughts, and build meaningful communities around the books you love.",
    image: adventure,
    accent: "#ff4d4d"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  return (
    <section className="hero" id="home">
      <div className="hero-carousel">
        {SLIDES.map((slide, index) => (
          <div 
            key={index} 
            className={`hero-container ${index === currentSlide ? 'active' : ''}`}
          >
            <div className="hero-content">
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-desc">{slide.desc}</p>
              <button onClick={togglePopup} className="btn">
                Get Started on Shelfie <i className="fas fa-arrow-right"></i>
              </button>
            </div>

            <div className="hero-image">
              <img src={slide.image} alt={slide.title} />
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-dots">
        {SLIDES.map((_, i) => (
          <span 
            key={i} 
            className={`dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(i)}
          />
        ))}
      </div>

      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup} className="close-x">&times;</button>
            
            <div className="step-content">
              <h2 className="popup-h2">Get Started with Shelfie</h2>
              <p className="popup-p">Download the app tailored for your experience.</p>
              
              <div className="role-selection">
                {/* READER CARD */}
                <div className="choice-box">
                  <h3>Reader</h3>
                  <p>For book lovers & explorers.</p>
                  <div className="download-row">
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                  </div>
                </div>

                {/* AUTHOR CARD */}
                <div className="choice-box">
                  <h3>Author</h3>
                  <p>For writers & storytellers.</p>
                  <div className="download-row">
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;