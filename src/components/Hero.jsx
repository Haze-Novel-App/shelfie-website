

// import React, { useState, useEffect } from 'react';
// import horrorBook from '../assets/imgs/bookCover/romantic.png';
// import mystery1 from '../assets/imgs/bookCover/mystery1.png';
// import adventure from '../assets/imgs/bookCover/adventure1.png';
// // import './Hero.scss'; 

// const SLIDES = [
//   { title: "Stories were never meant to be one-way", image: horrorBook },
//   { title: "Reading that actually listens back", image: mystery1 },
//   { title: "Where authors and readers connect", image: adventure }
// ];

// const Hero = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);

//   return (
//     <section className="hero" id="home">
//       <div className="hero-wrapper">
        
//         {/* IMAGE SECTION - Now strictly before text in DOM */}
//         <div className="hero-image-slider">
//           {SLIDES.map((slide, index) => {
//             let position = "nextSlide";
//             if (index === currentIndex) position = "activeSlide";
//             if (index === currentIndex - 1 || (currentIndex === 0 && index === SLIDES.length - 1)) {
//               position = "lastSlide";
//             }

//             return (
//               <div className={`slide-item ${position}`} key={index}>
//                 <img src={slide.image} alt="Book Cover" className="hero-img" />
//               </div>
//             );
//           })}
//         </div>

//         {/* TEXT SECTION */}
//         <div className="hero-text-content">
//           <h1 className="hero-title">{SLIDES[currentIndex].title}</h1>
//           <p className="hero-desc">
//             On Shelfie, reading is just the beginning. Discover writers, explore their stories, 
//             and interact directly with authors through conversations that continue beyond the page.
//           </p>
//           <button onClick={togglePopup} className="btn">
//             Get Started on Shelfie
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Hero;








import React, { useState, useEffect } from 'react';
import horrorBook from '../assets/imgs/bookCover/romantic.png';
import mystery1 from '../assets/imgs/bookCover/mystery1.png';
import adventure from '../assets/imgs/bookCover/adventure1.png';
// import './Hero.scss'; 

const SLIDES = [
  { title: "Stories were never meant to be one-way", image: horrorBook },
  { title: "Reading that actually listens back", image: mystery1 },
  { title: "Where authors and readers connect", image: adventure }
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-wrapper">
        
        {/* TEXT SECTION (Left side on Laptop) */}
        <div className="hero-text-content">
          <div className="title-area">
            <h1 className="hero-title">{SLIDES[currentIndex].title}</h1>
          </div>
          <p className="hero-desc">
            On Shelfie, reading is just the beginning. Discover writers, explore their stories, 
            and interact directly with authors through conversations that continue beyond the page.
          </p>
          <button className="btn">Get Started on Shelfie</button>
        </div>

        {/* IMAGE SLIDER (Right side on Laptop) */}
        <div className="hero-image-slider">
          {SLIDES.map((slide, index) => {
            let position = "nextSlide"; 
            if (index === currentIndex) position = "activeSlide";
            if (index === currentIndex - 1 || (currentIndex === 0 && index === SLIDES.length - 1)) {
              position = "lastSlide"; 
            }

            return (
              <div className={`slide-item ${position}`} key={index}>
                <img src={slide.image} alt="Book Cover" className="hero-img" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;