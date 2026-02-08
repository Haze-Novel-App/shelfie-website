


// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import TWEEN from '@tweenjs/tween.js';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import '../assets/styles/AnimatedBook.scss';
// import BookCover from '../assets/imgs/bookCover/romantic.png';

// gsap.registerPlugin(ScrollTrigger);

// const AnimationBook = () => {
//   const containerRef = useRef(null);
//   const canvasRef = useRef(null);
//   const progressRef = useRef(0);
//   const [loading, setLoading] = useState(true);

//   // Form State
//   const [location, setLocation] = useState('');
//   const [isLocating, setIsLocating] = useState(false);

//   // Popup & UI State
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedRole, setSelectedRole] = useState('');
//   const [uiPhase, setUiPhase] = useState(0); 

//   const togglePopup = () => { setIsPopupOpen(!isPopupOpen); };
//   const handleRoleSelect = (role) => { setSelectedRole(role); };

//   // --- GET LOCATION FUNCTION ---
//   const handleGetLocation = () => {
//     if (!navigator.geolocation) {
//       alert("Geolocation is not supported by your browser");
//       return;
//     }
//     setIsLocating(true);
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const loc = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
//         setLocation(loc);
//         setIsLocating(false);
//       },
//       () => {
//         alert("Unable to retrieve your location");
//         setIsLocating(false);
//       }
//     );
//   };

//   const COLORS = {
//     leather: 0x5c3a2a, 
//     gold: 0xd4af37,    
//     paper: 0xffffff,   
//     studio: 0xf2f0e6,  
//   };

//   // --- CONTENT DATA ---
//   const CONTENT = [
//     { 
//       title: "The Day Paused", 
//       body: "A journey into a world where time ceased to flow. Every leaf, every breath, frozen in a golden sunset.",
//       img: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000&auto=format&fit=crop",
//       showButtons: false,
//       link: null
//     },
//     { 
//       title: "For the Reader", 
//       body: "For those passionate readers who want to: Discover new writers, Explore their work, Take part in conversations that bring stories to life. Shelfie allows readers to ask questions, share perspectives, and interact with authors without expensive paywalls or exclusivity.\n\nReading on Shelfie isn't passive, it's personal.",
//       img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
//       showButtons: true, 
//       link: "https://play.google.com/store/apps/details?id=com.jac.readerapp" 
//     },
//     { 
//       title: "For the Author", 
//       body: "For writers who want real reader engagement. Shelfie helps emerging & established writers go beyond publishing. Share your stories, connect directly with readers, and build a community around your work. Our platform is designed to turn passive readers into active participants in your creative journey.\n\nDirect Connection: Talk to your audience without intermediaries.\nCommunity Building: Foster a loyal following that grows with every chapter.",
//       img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
//       showButtons: true, 
//       link: "https://play.google.com/store/apps/details?id=com.jac.authorapp" 
//     }
//   ];

//   // --- GSAP SCROLL ---
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current, start: "top top", end: "+=4000", scrub: 1, pin: true,
//         onUpdate: (self) => {
//           progressRef.current = self.progress;
//           const p = self.progress;
//           if (p < 0.15) setUiPhase(0); 
//           else if (p > 0.85) setUiPhase(2); 
//           else setUiPhase(1); 
//         }
//       }
//     });
//   }, { scope: containerRef });

//   // --- THREE.JS ---
//   useEffect(() => {
//     if (!canvasRef.current) return;
//     canvasRef.current.innerHTML = '';

//     const scene = new THREE.Scene();
//     scene.background = new THREE.Color(COLORS.studio);
//     scene.fog = new THREE.Fog(COLORS.studio, 10, 50);

//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 0, 15);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     canvasRef.current.appendChild(renderer.domElement);

//     // --- LIGHTING ---
//     scene.add(new THREE.AmbientLight(0xffffff, 1.8)); 
//     const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
//     keyLight.position.set(5, 5, 10);
//     scene.add(keyLight);
//     const fillLight = new THREE.DirectionalLight(0xffeedd, 0.5);
//     fillLight.position.set(-5, 5, 5);
//     scene.add(fillLight);

//     // --- INTERACTION ---
//     const raycaster = new THREE.Raycaster();
//     const mouse = new THREE.Vector2();

//     const onMouseClick = (event) => {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects(scene.children, true);
//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object.userData && object.userData.link) {
//           window.open(object.userData.link, '_blank');
//         }
//       }
//     };

//     const onMouseMove = (event) => {
//       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
//       raycaster.setFromCamera(mouse, camera);
//       const intersects = raycaster.intersectObjects(scene.children, true);
//       let hoveringLink = false;
//       if (intersects.length > 0) {
//         const object = intersects[0].object;
//         if (object.userData && object.userData.link) {
//           hoveringLink = true;
//         }
//       }
//       document.body.style.cursor = hoveringLink ? 'pointer' : 'auto';
//     };

//     window.addEventListener('click', onMouseClick);
//     window.addEventListener('mousemove', onMouseMove);

//     // --- LOADING ---
//     const manager = new THREE.LoadingManager();
//     manager.onLoad = () => setLoading(false);
//     manager.onError = () => setLoading(false);
//     const loader = new THREE.TextureLoader(manager);
//     loader.setCrossOrigin("anonymous");

//     // --- TEXTURE GENERATOR ---
//     const createTextTexture = (data) => {
//       const canvas = document.createElement('canvas');
//       canvas.width = 1024; canvas.height = 1400;
//       const ctx = canvas.getContext('2d');
//       const tex = new THREE.CanvasTexture(canvas);
//       tex.colorSpace = THREE.SRGBColorSpace;
      
//       // 1. Background
//       ctx.fillStyle = '#ffffff'; 
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
      
//       // 2. Title
//       ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a'; 
//       ctx.font = 'italic 700 80px "Playfair Display", serif'; 
//       ctx.fillText(data.title, 512, 250); 
      
//       // 3. Divider
//       ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
//       ctx.beginPath(); 
//       ctx.moveTo(362, 310); 
//       ctx.lineTo(662, 310); 
//       ctx.stroke();

//       // 4. Body Text
//       ctx.font = '400 34px "Inter", sans-serif'; 
//       ctx.fillStyle = '#333333'; 
      
//       const words = data.body.split(' ');
//       let line = '';
//       let y = 380; 
//       const lineHeight = 48; 
//       // CHANGED: Reduced from 850 to 680 to prevent cutting off on curve
//       const maxTextWidth = 680; 
      
//       words.forEach(word => {
//         if (word.includes('\n')) {
//           const subWords = word.split('\n');
//           subWords.forEach((subWord, index) => {
//             line += subWord + ' ';
//             if (index < subWords.length - 1) {
//               ctx.fillText(line, 512, y);
//               line = '';
//               y += lineHeight;
//             }
//           });
//         } else {
//           const testLine = line + word + ' ';
//           if (ctx.measureText(testLine).width > maxTextWidth) { 
//             ctx.fillText(line, 512, y);
//             line = word + ' ';
//             y += lineHeight;
//           } else {
//             line = testLine;
//           }
//         }
//       });
//       ctx.fillText(line, 512, y);

//       // 5. Buttons (IMAGES)
//       if (data.showButtons) {
//         const btnY = y + 80;
//         const btnWidth = 260; // Size for the badge images
//         const btnHeight = 78;
//         const gap = 30;

//         // Load App Store Image
//         const imgApp = new Image();
//         imgApp.crossOrigin = "Anonymous";
//         imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
//         imgApp.onload = () => {
//           // Draw Centered - Offset Left
//           ctx.drawImage(imgApp, 512 - btnWidth - gap/2, btnY, btnWidth, btnHeight);
//           tex.needsUpdate = true;
//         };

//         // Load Play Store Image
//         const imgPlay = new Image();
//         imgPlay.crossOrigin = "Anonymous";
//         imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
//         imgPlay.onload = () => {
//           // Draw Centered - Offset Right
//           ctx.drawImage(imgPlay, 512 + gap/2, btnY, btnWidth, btnHeight);
//           tex.needsUpdate = true;
//         };
//       }

//       return tex;
//     };

//     const BOOK_WIDTH = 3.3; const BOOK_HEIGHT = 4.5; const SPACING = 0.05;

//     // Materials
//     const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
//     const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
//     const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.02 });

//     const bookGroup = new THREE.Group();

//     // Spine
//     const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
//     spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2;
//     bookGroup.add(spine);

//     // Back Cover
//     const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
//     backCover.position.set(0, 0, -0.3);
//     bookGroup.add(backCover);

//     // Front Cover
//     const frontCoverPivot = new THREE.Group();
//     frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, 0.3);
//     const coverMatArray = [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat];
//     const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), coverMatArray);
//     coverMesh.position.x = BOOK_WIDTH / 2;
//     frontCoverPivot.add(coverMesh);
//     bookGroup.add(frontCoverPivot);

//     // Pages
//     const pageMeshes = [];
//     CONTENT.forEach((data, i) => {
//       const pivot = new THREE.Group();
//       pivot.position.set(-BOOK_WIDTH / 2, 0, 0.2); 
      
//       const textTex = createTextTexture(data);
//       const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
//       const backMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
      
//       const nextImgUrl = CONTENT[i + 1]?.img;
//       if (nextImgUrl) {
//         loader.load(nextImgUrl, (tex) => {
//           tex.colorSpace = THREE.SRGBColorSpace;
//           tex.center.set(0.5, 0.5);
//           backMat.map = tex; backMat.needsUpdate = true;
//         });
//       }
//       const pageMats = [goldMat, leatherMat, paperMat, paperMat, textMat, backMat];
//       const geo = new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02);
//       const mesh = new THREE.Mesh(geo, pageMats);
//       mesh.position.x = BOOK_WIDTH / 2;
      
//       mesh.userData = {
//         originalVertices: geo.attributes.position.array.slice(),
//         link: data.link
//       };

//       pivot.add(mesh);
//       bookGroup.add(pivot);
//       pageMeshes.push(mesh);
//     });
//     scene.add(bookGroup);

//     // Cover Images
//     loader.load(BookCover, (tex) => {
//       tex.colorSpace = THREE.SRGBColorSpace;
//       coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 });
//       coverMesh.material.needsUpdate = true;
//     });
//     if (CONTENT[0].img) {
//       loader.load(CONTENT[0].img, (tex) => {
//         tex.colorSpace = THREE.SRGBColorSpace;
//         coverMesh.material[5] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
//         coverMesh.material.needsUpdate = true;
//       });
//     }

//     const safetyTimeout = setTimeout(() => setLoading(false), 3000);

//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

//     // --- ANIMATION ---
//     const animate = (time) => {
//       requestAnimationFrame(animate);
//       TWEEN.update(time);
//       const currentScroll = progressRef.current;
//       const START_READING = 0.15;
//       const START_CLOSING = 0.85;

//       // 1. Cover
//       let coverTarget = 0;
//       if (currentScroll > START_READING && currentScroll < START_CLOSING) coverTarget = -Math.PI * 0.98;
//       frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;
//       const coverOpenness = Math.abs(frontCoverPivot.rotation.y) / Math.PI;
//       frontCoverPivot.position.z = 0.3 - (coverOpenness * 0.5); 

//       // 2. Pages
//       pageMeshes.forEach((mesh, i) => {
//         const pivot = mesh.parent;
//         const start = 0.25 + (i * 0.15);
//         const end = 0.4 + (i * 0.15);
//         let localP = 0;
        
//         if (i < pageMeshes.length - 1) { 
//           if (currentScroll < START_CLOSING) {
//             localP = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1);
//           }
//         }
        
//         const targetRot = -Math.PI * localP * 0.98;
//         pivot.rotation.y += (targetRot - pivot.rotation.y) * 0.1;
        
//         const rotationProgress = Math.abs(pivot.rotation.y) / Math.PI;
//         const zRight = 0.2 - (i * SPACING);
//         const zLeft = 0.05 + (i * SPACING);
//         let currentZ = zRight * (1 - rotationProgress) + zLeft * rotationProgress;
//         const lift = Math.sin(rotationProgress * Math.PI) * 0.25;
//         pivot.position.z = currentZ + lift;

//         const pos = mesh.geometry.attributes.position;
//         const orig = mesh.userData.originalVertices;
//         if (orig && orig.length > 0) {
//           const bendIntensity = Math.sin(rotationProgress * Math.PI) * 0.6;
//           for (let k = 0; k < pos.count; k++) {
//             const px = orig[k * 3];
//             const dist = px + (BOOK_WIDTH / 2); 
//             const bend = Math.sin((dist / BOOK_WIDTH) * Math.PI) * bendIntensity;
//             pos.setZ(k, orig[k * 3 + 2] + bend);
//             pos.setX(k, px - Math.abs(bend) * 0.05); 
//           }
//           pos.needsUpdate = true;
//         }
//       });

//       // 3. Camera Position
//       let targetX = 0, targetZ = 16, targetRotY = 0;
//       if (currentScroll < 0.15) {
//         targetX = 4.5; targetZ = 16; targetRotY = -0.4;
//       } else if (currentScroll > 0.85) {
//         targetX = -2.0; targetZ = 14; targetRotY = 0.5;
//       } else {
//         targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0;
//       }

//       camera.position.z += (targetZ - camera.position.z) * 0.05;
//       bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
//       bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;
//       bookGroup.position.y = Math.sin(time * 0.001) * 0.1;

//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       window.removeEventListener('click', onMouseClick);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('resize', handleResize);
//       renderer.dispose();
//       if (canvasRef.current) canvasRef.current.innerHTML = '';
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="anim-book-container">
//       <div ref={canvasRef} className="anim-book-canvas" />
//       {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}
      
//       {/* Hero UI */}
//       <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
//         <div className="content-box">
//           <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
//           <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors.</p>
//           <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
//         </div>
//       </section>

//       {/* Register as Author Form */}
//       <section className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
//         <div className="glass-card contact-form">
//           <h2>Register as Author</h2>
//           <form onSubmit={(e) => e.preventDefault()}>
//             <input type="text" placeholder="Username" className="full-width-input" />
//             <input type="email" placeholder="Email Address" className="full-width-input" />
//             <input type="password" placeholder="Password" className="full-width-input" />
//             <input type="tel" placeholder="Phone Number" className="full-width-input" />
//             <div className="location-row">
//               <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="location-input" />
//               <button type="button" className="location-btn" onClick={handleGetLocation} title="Get Current Location">{isLocating ? "..." : "📍"}</button>
//             </div>
//             <button className="btn-gradient full-width">REGISTER</button>
//           </form>
//         </div>
//       </section>

//       {/* Popup */}
//       {isPopupOpen && (
//         <div className="popup-overlay" onClick={togglePopup}>
//           <div className="popup-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={togglePopup}>&times;</button>
//             <div className="step-one">
//               <h2>How do you want to use Shelfie?</h2>
//               <div className="options">
//                 <div className="option-card" onClick={() => handleRoleSelect('Reader')}>
//                   <h3>Reader</h3><p>For book lovers.</p>
//                   <div className="store-buttons">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" onClick={() => window.open('#', '_blank')} />
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jac.readerapp', '_blank')} />
//                   </div>
//                 </div>
//                 <div className="option-card" onClick={() => handleRoleSelect('Author')}>
//                   <h3>Author</h3><p>For storytellers.</p>
//                   <div className="store-buttons">
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" onClick={() => window.open('#', '_blank')} />
//                     <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jac.authorapp', '_blank')} />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AnimationBook;














import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import '../assets/styles/AnimatedBook.scss';
// import BookCover from '../assets/imgs/bookCover/romantic.png';

gsap.registerPlugin(ScrollTrigger);

const AnimationBook = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const progressRef = useRef(0);
  const [loading, setLoading] = useState(true);

  // Form State
  const [location, setLocation] = useState('');
  const [isLocating, setIsLocating] = useState(false);

  // Popup & UI State
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [uiPhase, setUiPhase] = useState(0); 

  const togglePopup = () => { setIsPopupOpen(!isPopupOpen); };
  const handleRoleSelect = (role) => { setSelectedRole(role); };

  // --- GET LOCATION FUNCTION ---
  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser");
      return;
    }
    setIsLocating(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const loc = `${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`;
        setLocation(loc);
        setIsLocating(false);
      },
      () => {
        alert("Unable to retrieve your location");
        setIsLocating(false);
      }
    );
  };

  const COLORS = {
    leather: 0x5c3a2a, 
    gold: 0xd4af37,    
    paper: 0xffffff,   
    studio: 0xf2f0e6,  
  };

  // --- CONTENT DATA ---
  const CONTENT = [
    { 
      title: "The Day Paused", 
      body: "A journey into a world where time ceased to flow. Every leaf, every breath, frozen in a golden sunset.",
      img: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000&auto=format&fit=crop",
      showButtons: false,
      link: null
    },
    { 
      title: "For the Reader", 
      body: "For those passionate readers who want to: Discover new writers, Explore their work, Take part in conversations that bring stories to life. Shelfie allows readers to ask questions, share perspectives, and interact with authors without expensive paywalls or exclusivity.\n\nReading on Shelfie isn't passive, it's personal.",
      img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop",
      showButtons: true, 
      link: "https://play.google.com/store/apps/details?id=com.jac.readerapp" 
    },
    { 
      title: "For the Author", 
      body: "For writers who want real reader engagement. Shelfie helps emerging & established writers go beyond publishing. Share your stories, connect directly with readers, and build a community around your work. Our platform is designed to turn passive readers into active participants in your creative journey.\n\nDirect Connection: Talk to your audience without intermediaries.\nCommunity Building: Foster a loyal following that grows with every chapter.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop",
      showButtons: true, 
      link: "https://play.google.com/store/apps/details?id=com.jac.authorapp" 
    }
  ];

  // --- GSAP SCROLL ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current, start: "top top", end: "+=4000", scrub: 1, pin: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          const p = self.progress;
          if (p < 0.15) setUiPhase(0); 
          else if (p > 0.85) setUiPhase(2); 
          else setUiPhase(1); 
        }
      }
    });
  }, { scope: containerRef });

  // --- THREE.JS ---
  useEffect(() => {
    if (!canvasRef.current) return;
    canvasRef.current.innerHTML = '';

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(COLORS.studio);
    scene.fog = new THREE.Fog(COLORS.studio, 10, 50);

    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    canvasRef.current.appendChild(renderer.domElement);

    // --- LIGHTING ---
    scene.add(new THREE.AmbientLight(0xffffff, 1.8)); 
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(5, 5, 10);
    scene.add(keyLight);
    const fillLight = new THREE.DirectionalLight(0xffeedd, 0.5);
    fillLight.position.set(-5, 5, 5);
    scene.add(fillLight);

    // --- INTERACTION ---
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseClick = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData && object.userData.link) {
          window.open(object.userData.link, '_blank');
        }
      }
    };

    const onMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children, true);
      let hoveringLink = false;
      if (intersects.length > 0) {
        const object = intersects[0].object;
        if (object.userData && object.userData.link) {
          hoveringLink = true;
        }
      }
      document.body.style.cursor = hoveringLink ? 'pointer' : 'auto';
    };

    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousemove', onMouseMove);

    // --- LOADING ---
    const manager = new THREE.LoadingManager();
    manager.onLoad = () => setLoading(false);
    manager.onError = () => setLoading(false);
    const loader = new THREE.TextureLoader(manager);
    loader.setCrossOrigin("anonymous");

    // --- TEXTURE GENERATOR ---
    const createTextTexture = (data) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024; canvas.height = 1400;
      const ctx = canvas.getContext('2d');
      
      // !!! FIX: Define 'tex' at the top so it's accessible in onload closures !!!
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      
      // 1. Background
      ctx.fillStyle = '#ffffff'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // 2. Title
      ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a'; 
      ctx.font = 'italic 700 80px "Playfair Display", serif'; 
      ctx.fillText(data.title, 512, 250); 
      
      // 3. Divider
      ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
      ctx.beginPath(); 
      ctx.moveTo(362, 310); 
      ctx.lineTo(662, 310); 
      ctx.stroke();

      // 4. Body Text
      ctx.font = '400 34px "Inter", sans-serif'; 
      ctx.fillStyle = '#333333'; 
      
      const words = data.body.split(' ');
      let line = '';
      let y = 380; 
      const lineHeight = 48; 
      const maxTextWidth = 680; 
      
      words.forEach(word => {
        if (word.includes('\n')) {
          const subWords = word.split('\n');
          subWords.forEach((subWord, index) => {
            line += subWord + ' ';
            if (index < subWords.length - 1) {
              ctx.fillText(line, 512, y);
              line = '';
              y += lineHeight;
            }
          });
        } else {
          const testLine = line + word + ' ';
          if (ctx.measureText(testLine).width > maxTextWidth) { 
            ctx.fillText(line, 512, y);
            line = word + ' ';
            y += lineHeight;
          } else {
            line = testLine;
          }
        }
      });
      ctx.fillText(line, 512, y);

      // 5. Buttons (IMAGES)
      if (data.showButtons) {
        const btnY = y + 80;
        const btnWidth = 260; 
        const btnHeight = 78;
        const gap = 30;

        const imgApp = new Image();
        imgApp.crossOrigin = "Anonymous";
        imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
        imgApp.onload = () => {
          ctx.drawImage(imgApp, 512 - btnWidth - gap/2, btnY, btnWidth, btnHeight);
          tex.needsUpdate = true; // 'tex' is now safely defined
        };

        const imgPlay = new Image();
        imgPlay.crossOrigin = "Anonymous";
        imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
        imgPlay.onload = () => {
          ctx.drawImage(imgPlay, 512 + gap/2, btnY, btnWidth, btnHeight);
          tex.needsUpdate = true; // 'tex' is now safely defined
        };
      }

      return tex;
    };

    const BOOK_WIDTH = 3.3; const BOOK_HEIGHT = 4.5; const SPACING = 0.05;

    // Materials
    const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
    const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
    const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.02 });

    const bookGroup = new THREE.Group();

    // Spine
    const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
    spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2;
    bookGroup.add(spine);

    // Back Cover
    const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
    backCover.position.set(0, 0, -0.3);
    bookGroup.add(backCover);

    // Front Cover
    const frontCoverPivot = new THREE.Group();
    frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, 0.3);
    const coverMatArray = [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat];
    const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), coverMatArray);
    coverMesh.position.x = BOOK_WIDTH / 2;
    frontCoverPivot.add(coverMesh);
    bookGroup.add(frontCoverPivot);

    // Pages
    const pageMeshes = [];
    CONTENT.forEach((data, i) => {
      const pivot = new THREE.Group();
      pivot.position.set(-BOOK_WIDTH / 2, 0, 0.2); 
      
      const textTex = createTextTexture(data);
      const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
      const backMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
      
      const nextImgUrl = CONTENT[i + 1]?.img;
      if (nextImgUrl) {
        loader.load(nextImgUrl, (tex) => {
          tex.colorSpace = THREE.SRGBColorSpace;
          tex.center.set(0.5, 0.5);
          backMat.map = tex; backMat.needsUpdate = true;
        });
      }
      const pageMats = [goldMat, leatherMat, paperMat, paperMat, textMat, backMat];
      const geo = new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02);
      const mesh = new THREE.Mesh(geo, pageMats);
      mesh.position.x = BOOK_WIDTH / 2;
      
      mesh.userData = {
        originalVertices: geo.attributes.position.array.slice(),
        link: data.link
      };

      pivot.add(mesh);
      bookGroup.add(pivot);
      pageMeshes.push(mesh);
    });
    scene.add(bookGroup);

    // Cover Images
    loader.load(BookCover, (tex) => {
      tex.colorSpace = THREE.SRGBColorSpace;
      coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 });
      coverMesh.material.needsUpdate = true;
    });
    if (CONTENT[0].img) {
      loader.load(CONTENT[0].img, (tex) => {
        tex.colorSpace = THREE.SRGBColorSpace;
        coverMesh.material[5] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 });
        coverMesh.material.needsUpdate = true;
      });
    }

    const safetyTimeout = setTimeout(() => setLoading(false), 3000);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // --- ANIMATION ---
    const animate = (time) => {
      requestAnimationFrame(animate);
      TWEEN.update(time);
      const currentScroll = progressRef.current;
      const START_READING = 0.15;
      const START_CLOSING = 0.85;

      // 1. Cover
      let coverTarget = 0;
      if (currentScroll > START_READING && currentScroll < START_CLOSING) coverTarget = -Math.PI * 0.98;
      frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;
      const coverOpenness = Math.abs(frontCoverPivot.rotation.y) / Math.PI;
      frontCoverPivot.position.z = 0.3 - (coverOpenness * 0.5); 

      // 2. Pages
      pageMeshes.forEach((mesh, i) => {
        const pivot = mesh.parent;
        const start = 0.25 + (i * 0.15);
        const end = 0.4 + (i * 0.15);
        let localP = 0;
        
        if (i < pageMeshes.length - 1) { 
          if (currentScroll < START_CLOSING) {
            localP = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1);
          }
        }
        
        const targetRot = -Math.PI * localP * 0.98;
        pivot.rotation.y += (targetRot - pivot.rotation.y) * 0.1;
        
        const rotationProgress = Math.abs(pivot.rotation.y) / Math.PI;
        const zRight = 0.2 - (i * SPACING);
        const zLeft = 0.05 + (i * SPACING);
        let currentZ = zRight * (1 - rotationProgress) + zLeft * rotationProgress;
        const lift = Math.sin(rotationProgress * Math.PI) * 0.25;
        pivot.position.z = currentZ + lift;

        const pos = mesh.geometry.attributes.position;
        const orig = mesh.userData.originalVertices;
        if (orig && orig.length > 0) {
          const bendIntensity = Math.sin(rotationProgress * Math.PI) * 0.6;
          for (let k = 0; k < pos.count; k++) {
            const px = orig[k * 3];
            const dist = px + (BOOK_WIDTH / 2); 
            const bend = Math.sin((dist / BOOK_WIDTH) * Math.PI) * bendIntensity;
            pos.setZ(k, orig[k * 3 + 2] + bend);
            pos.setX(k, px - Math.abs(bend) * 0.05); 
          }
          pos.needsUpdate = true;
        }
      });

      // 3. Camera Position
      let targetX = 0, targetZ = 16, targetRotY = 0;
      if (currentScroll < 0.15) {
        targetX = 4.5; targetZ = 16; targetRotY = -0.4;
      } else if (currentScroll > 0.85) {
        targetX = -2.0; targetZ = 14; targetRotY = 0.5;
      } else {
        targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0;
      }

      camera.position.z += (targetZ - camera.position.z) * 0.05;
      bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
      bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;
      bookGroup.position.y = Math.sin(time * 0.001) * 0.1;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (canvasRef.current) canvasRef.current.innerHTML = '';
    };
  }, []);

  return (
    <div ref={containerRef} className="anim-book-container">
      <div ref={canvasRef} className="anim-book-canvas" />
      {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}
      
      {/* Hero UI */}
      <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
        <div className="content-box">
          <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
          <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors.</p>
          <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
        </div>
      </section>

      {/* Register as Author Form */}
      <section className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
        <div className="glass-card contact-form">
          <h2>Register as Author</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="text" placeholder="Username" className="full-width-input" />
            <input type="email" placeholder="Email Address" className="full-width-input" />
            <input type="password" placeholder="Password" className="full-width-input" />
            <input type="tel" placeholder="Phone Number" className="full-width-input" />
            <div className="location-row">
              <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="location-input" />
              <button type="button" className="location-btn" onClick={handleGetLocation} title="Get Current Location">{isLocating ? "..." : "📍"}</button>
            </div>
            <button className="btn-gradient full-width">REGISTER</button>
          </form>
        </div>
      </section>

      {/* Popup */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={togglePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={togglePopup}>&times;</button>
            <div className="step-one">
              <h2>How do you want to use Shelfie?</h2>
              <div className="options">
                <div className="option-card" onClick={() => handleRoleSelect('Reader')}>
                  <h3>Reader</h3><p>For book lovers.</p>
                  <div className="store-buttons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" onClick={() => window.open('#', '_blank')} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jac.readerapp', '_blank')} />
                  </div>
                </div>
                <div className="option-card" onClick={() => handleRoleSelect('Author')}>
                  <h3>Author</h3><p>For storytellers.</p>
                  <div className="store-buttons">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="store-badge" onClick={() => window.open('#', '_blank')} />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="store-badge" onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jac.authorapp', '_blank')} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnimationBook;