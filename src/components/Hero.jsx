




// import React, { useState, useEffect } from 'react';
// import horrorBook from '../assets/imgs/bookCover/romantic.png';
// import mystery1 from '../assets/imgs/bookCover/mystery1.png';
// import adventure from '../assets/imgs/bookCover/adventure1.png';

// const SLIDES = [
//   {
//     title: "Stories were never meant to be one-way",
//     image: horrorBook
//   },
//   {
//     title: "Reading that actually listens back",
//     image: mystery1
//   },
//   {
//     title: "Where authors and readers connect",
//     image: adventure
//   }
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   // Helper to determine slide position for animation direction
//   const getSlideClass = (index) => {
//     if (index === currentIndex) return 'active';
//     // Check if this index was the previous one (to make it exit left)
//     const prevIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
//     if (index === prevIndex) return 'exit';
//     return 'next'; // Waiting on the right
//   };

//   return (
//     <section className="hero" id="home">
//       <div className="hero-wrapper">
        
//         {/* --- LEFT: TEXT CONTENT --- */}
//         <div className="hero-text-content">
//           <div className="title-wrapper">
//             {/* Key ensures animation restarts on text change */}
//             <h1 key={currentIndex} className="hero-title">
//               {SLIDES[currentIndex].title}
//             </h1>
//           </div>

//           <p className="hero-desc">
//             On Shelfie, reading is just the beginning. Discover writers, explore their stories, 
//             and interact directly with authors through conversations that continue beyond the page.
//           </p>

//           <button onClick={togglePopup} className="btn">
//             Get Started on Shelfie <i className="fas fa-arrow-right"></i>
//           </button>
//         </div>

//         {/* --- RIGHT: IMAGE STACK --- */}
//         <div className="hero-image-container">
//           {SLIDES.map((slide, index) => (
//             <img 
//               key={index} 
//               src={slide.image} 
//               alt={slide.title}
//               className={`hero-img ${getSlideClass(index)}`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* --- POPUP (Same as before) --- */}
//       {isPopupOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-card" onClick={(e) => e.stopPropagation()}>
//             <button onClick={togglePopup} className="close-x">&times;</button>
//             <div className="step-content">
//               <h2 className="popup-h2">Get Started with Shelfie</h2>
//               <p className="popup-p">Download the app tailored for your experience.</p>
//               <div className="role-selection">
//                 <div className="choice-box">
//                   <h3>Reader</h3>
//                   <p>For book lovers & explorers.</p>
//                   <div className="download-row">
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
//                   </div>
//                 </div>
//                 <div className="choice-box">
//                   <h3>Author</h3>
//                   <p>For writers & storytellers.</p>
//                   <div className="download-row">
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;














// import React, { useState, useEffect } from 'react';
// // Ensure these paths match your project structure exactly
// import horrorBook from '../assets/imgs/bookCover/romantic.png';
// import mystery1 from '../assets/imgs/bookCover/mystery1.png';
// import adventure from '../assets/imgs/bookCover/adventure1.png';

// const SLIDES = [
//   {
//     title: "Stories were never meant to be one-way",
//     image: horrorBook
//   },
//   {
//     title: "Reading that actually listens back",
//     image: mystery1
//   },
//   {
//     title: "Where authors and readers connect",
//     image: adventure
//   }
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//     return () => clearInterval(timer);
//   }, []);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   const getSlideClass = (index) => {
//     if (index === currentIndex) return 'active';
//     const prevIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
//     if (index === prevIndex) return 'exit';
//     return 'next'; 
//   };

//   return (
//     <section className="hero" id="home">
//       <div className="hero-wrapper">
        
//         {/* --- LEFT: TEXT CONTENT --- */}
//         <div className="hero-text-content">
//           <div className="title-wrapper">
//             <h1 key={currentIndex} className="hero-title">
//               {SLIDES[currentIndex].title}
//             </h1>
//           </div>

//           <p className="hero-desc">
//             On Shelfie, reading is just the beginning. Discover writers, explore their stories, 
//             and interact directly with authors through conversations that continue beyond the page.
//           </p>

//           <button onClick={togglePopup} className="btn">
//             Get Started on Shelfie <i className="fas fa-arrow-right"></i>
//           </button>
//         </div>

//         {/* --- RIGHT: IMAGE STACK --- */}
//         <div className="hero-image-container">
//           {SLIDES.map((slide, index) => (
//             <img 
//               key={index} 
//               src={slide.image} 
//               alt={slide.title}
//               className={`hero-img ${getSlideClass(index)}`}
//             />
//           ))}
//         </div>

//       </div>

//       {/* --- POPUP --- */}
//       {isPopupOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-card" onClick={(e) => e.stopPropagation()}>
//             <button onClick={togglePopup} className="close-x">&times;</button>
//             <div className="step-content">
//               <h2 className="popup-h2">Get Started with Shelfie</h2>
//               <p className="popup-p">Download the app tailored for your experience.</p>
              
//               <div className="role-selection">
//                 {/* Reader Box */}
//                 <div className="choice-box">
//                   <h3>Reader</h3>
//                   <p>For book lovers & explorers.</p>
//                   <div className="download-row">
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
//                   </div>
//                 </div>
                
//                 {/* Author Box */}
//                 <div className="choice-box">
//                   <h3>Author</h3>
//                   <p>For writers & storytellers.</p>
//                   <div className="download-row">
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
//                     <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
//                   </div>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Hero;









import React, { useState, useEffect, useRef } from 'react';
// Ensure these paths match your project structure
import horrorBook from '../assets/imgs/bookCover/romantic.png';
import mystery1 from '../assets/imgs/bookCover/mystery1.png';
import adventure from '../assets/imgs/bookCover/adventure1.png';

// Import your stylesheet
// import './Hero.scss';

const SLIDES = [
  {
    title: "Stories were never meant to be one-way",
    image: horrorBook
  },
  {
    title: "Reading that actually listens back",
    image: mystery1
  },
  {
    title: "Where authors and readers connect",
    image: adventure
  }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  
  // State for Scroll Animation
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  // 1. SCROLL OBSERVER LOGIC
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Trigger animation when 20% of section is visible
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  // 2. CAROUSEL LOGIC
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const togglePopup = () => setIsPopupOpen(!isPopupOpen);

  const getSlideClass = (index) => {
    if (index === currentIndex) return 'active';
    const prevIndex = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    if (index === prevIndex) return 'exit';
    return 'next'; 
  };

  return (
    // 3. Add the 'in-view' class dynamically based on scroll
    <section 
      className={`hero ${isInView ? 'in-view' : 'out-view'}`} 
      id="home" 
      ref={heroRef}
    >
      <div className="hero-wrapper">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="hero-text-content">
          <div className="title-wrapper">
            <h1 key={currentIndex} className="hero-title">
              {SLIDES[currentIndex].title}
            </h1>
          </div>

          <p className="hero-desc">
            On Shelfie, reading is just the beginning. Discover writers, explore their stories, 
            and interact directly with authors through conversations that continue beyond the page.
          </p>

          <button onClick={togglePopup} className="btn">
            Get Started on Shelfie <i className="fas fa-arrow-right"></i>
          </button>
        </div>

        {/* --- RIGHT: IMAGE STACK --- */}
        <div className="hero-image-container">
          {SLIDES.map((slide, index) => (
            <img 
              key={index} 
              src={slide.image} 
              alt={slide.title}
              className={`hero-img ${getSlideClass(index)}`}
            />
          ))}
        </div>

      </div>

      {/* --- POPUP (Unchanged) --- */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button onClick={togglePopup} className="close-x">&times;</button>
            <div className="step-content">
              <h2 className="popup-h2">Get Started with Shelfie</h2>
              <p className="popup-p">Download the app tailored for your experience.</p>
              
              <div className="role-selection">
                <div className="choice-box">
                  <h3>Reader</h3>
                  <p>For book lovers & explorers.</p>
                  <div className="download-row">
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                    <a href="#store"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                  </div>
                </div>
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