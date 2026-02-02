


// import React, { useState } from 'react';



// const Hero = () => {

//   // Logic for the popup will go here later

//   const [isPopupOpen, setIsPopupOpen] = useState(false);



//   const togglePopup = () => setIsPopupOpen(!isPopupOpen);



//   return (

//     <section className="hero">

//       <div className="hero-content">

//         <h1 className="hero-title">Stories were never meant to be one-way</h1>

//         <p className="hero-desc">

//           On Shelfie, reading is just the beginning.

//           Discover writers, explore their stories, and interact directly with

//           authors through conversations that continue beyond the page.

//         </p>



//         {/* Updated CTA for the Popup */}

//         <button onClick={togglePopup} className="btn btn-outline">

//           Get Started on Shelfie <i className="fas fa-arrow-right"></i>

//         </button>



//         <div className="slider-dots">

//           <span className="dot active"></span>

//           <span className="dot"></span>

//           <span className="dot"></span>

//         </div>

//       </div>



//       <div className="hero-image">

//         <img

//           src="https://placehold.co/400x550/e0e0e0/333333?text=Life+Of+The+Wild"

//           alt="Life of the Wild Book"

//         />

//       </div>



//       <button className="nav-arrow left"><i className="fas fa-arrow-left"></i></button>

//       <button className="nav-arrow right"><i className="fas fa-arrow-right"></i></button>



//       {/* Placeholder for your Popup Component */}

//       {isPopupOpen && (

//         <div className="popup-overlay">

//           {/* We will build the "How do you want to use Shelfie?" content here */}

//           <div className="popup-content">

//              <button onClick={togglePopup} className="close-btn">&times;</button>

//              <h2>How do you want to use Shelfie?</h2>

//              <p>Choose your role to get the right app experience.</p>

//              {/* Option cards will go here */}

//           </div>

//         </div>

//       )}

//     </section>

//   );

// };



// export default Hero;








import React, { useState } from 'react';
import horrorBook from '../assets/imgs/bookCover/romantic.png';

const Hero = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupStep, setPopupStep] = useState(1); // 1: Role Selection, 2: Download Links
  const [selectedRole, setSelectedRole] = useState('');

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    setPopupStep(1); // Reset to step 1 whenever opened or closed
  };

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setPopupStep(2);
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="hero-title">Stories were never meant to be one-way</h1>
        <p className="hero-desc">
          On Shelfie, reading is just the beginning.
          Discover writers, explore their stories, and interact directly with
          authors through conversations that continue beyond the page.
        </p>

        <button onClick={togglePopup} className="btn btn-outline">
          Get Started on Shelfie <i className="fas fa-arrow-right"></i>
        </button>

        <div className="slider-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>

      <div className="hero-image">
        <img
          src={horrorBook}
          alt="horror Book"
        />
      </div>

      {/* --- Updated Popup Logic --- */}
      {isPopupOpen && (
        <div className="popup-overlay">
          <div className="popup-card">
            <button onClick={togglePopup} className="close-x">&times;</button>

            {popupStep === 1 ? (
              <div className="step-content">
                <h2 className="popup-h2">How do you want to use Shelfie?</h2>
                <p className="popup-p">Choose your role to get the right app experience.</p>

                <div className="role-selection">
                  <div className="choice-box" onClick={() => handleRoleSelect('Reader')}>
                    <h3>Reader</h3>
                    <p>For book lovers & explorers.</p>
                    <span className="select-text">Select Reader</span>
                  </div>

                  <div className="choice-box" onClick={() => handleRoleSelect('Author')}>
                    <h3>Author</h3>
                    <p>For writers & storytellers.</p>
                    <span className="select-text">Select Author</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="step-content">
                <h2 className="popup-h2">Download {selectedRole} App</h2>
                <p className="popup-p">Download the {selectedRole.toLowerCase()} app to get started.</p>

                <div className="download-badges">
                  <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" /></a>
                  <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" /></a>
                </div>

                <button className="btn-back" onClick={() => setPopupStep(1)}>
                  <i className="fas fa-arrow-left"></i> Change Role
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;