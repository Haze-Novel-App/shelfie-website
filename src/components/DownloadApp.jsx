// import React from 'react';
// import appMockup from '../assets/imgs/shelfie.png'; 

// const DownloadApp = () => {
//   return (
//     <section className="download-section" id="download">
//       <div className="download-container">

//         {/* Mobile-like structure for the image */}
//         <div className="mobile-frame">
//           <div className="screen-container">
//             <img src={appMockup} alt="Shelfie App UI" className="app-screen-img" />
//           </div>
//         </div>

//         {/* Scaled-down content */}
//         <div className="download-content">
//           <h2 className="section-title">Download Our App Now !</h2>
//           <div className="decorative-squiggle">
//             <svg width="30" height="8" viewBox="0 0 40 10">
//               <path d="M0 5 Q5 0 10 5 T20 5 T30 5 T40 5" fill="transparent" stroke="#c5a992" strokeWidth="2"/>
//             </svg>
//           </div>

//           <p className="section-desc">
//             Shelfie is an interactive storytelling platform built for both readers and writers. 
//             Download the app today to join conversations.
//           </p>

//           <div className="store-badges">
//             <a href="#" className="badge">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
//             </a>
//             <a href="#" className="badge">
//               <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" />
//             </a>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default DownloadApp;













import React, { useState } from 'react';
import appMockup from '../assets/imgs/shelfie.png';
import locationIcon from '../assets/imgs/location.png';

const AuthorRegistration = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    location: ''
  });
  const [isLocating, setIsLocating] = useState(false);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }

    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        // Coordinates are set directly into the location field
        setFormData({ 
          ...formData, 
          location: `${latitude.toFixed(4)}, ${longitude.toFixed(4)}` 
        });
        setIsLocating(false);
      },
      () => {
        alert("Unable to retrieve your location");
        setIsLocating(false);
      }
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // Add your API logic here
  };

  return (
    <section className="reg-section" id="register">
      <div className="reg-container">

        {/* Left Section: App Mockup Display */}
        <div className="mobile-frame">
          <div className="screen-container">
            <img src={appMockup} alt="Shelfie App UI" className="app-screen-img" />
          </div>
        </div>

        {/* Right Section: Registration Form */}
        <div className="reg-content">
          <div className="form-header">
            <h2 className="section-title">Join as an Author</h2>
            <p className="section-desc">Start your storytelling journey with Shelfie today.</p>
          </div>

          <form className="reg-form" onSubmit={handleSubmit}>
            <div className="input-group">
              <input
                type="text"
                placeholder="Full Name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="input-group">
              <input
                type="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="input-group">
              <input
                type="tel"
                placeholder="Phone Number (Optional)"
                value={formData.number}
                onChange={(e) => setFormData({ ...formData, number: e.target.value })}
              />
            </div>

            <div className="input-group location-input">
              <input
                type="text"
                placeholder="Location (Optional)"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              />
              <button
                type="button"
                className="location-action-btn"
                onClick={handleGetLocation}
                disabled={isLocating}
                title="Get current location"
              >
                {isLocating ? (
                  <span className="loader-dots">...</span>
                ) : (
                  <img src={locationIcon} alt="Locate" className="small-loc-icon" />
                )}
              </button>
            </div>

            <button type="submit" className="submit-btn">
              Create Author Account
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default AuthorRegistration;