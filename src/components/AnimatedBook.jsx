

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import TWEEN from '@tweenjs/tween.js';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';

// // Images (Ensure paths match your project structure)
// import BookCover from '../assets/imgs/bookCover/romantic.png';
// import booksStack from '../assets/imgs/Hero/books-stack-of-three.png';
// import contractIcon from '../assets/imgs/Hero/contract.png';
// import inkIcon from '../assets/imgs/Hero/ink.png';
// import newspaperIcon from '../assets/imgs/Hero/newspaper.png';
// import quillIcon from '../assets/imgs/Hero/quill-drawing-a-line.png';
// import scriptIcon from '../assets/imgs/Hero/script.png';
// import writeIcon from '../assets/imgs/Hero/write.png';
// import whatShelfie from '../assets/imgs/what_shelfie.png';

// // Import your custom images
// import reader from '../assets/imgs/reader.png';
// import writer from '../assets/imgs/writer.png';
// import Genres from './Genres';

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

//   const heroIcons = [booksStack, contractIcon, inkIcon, newspaperIcon, quillIcon, scriptIcon, writeIcon];

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
//       title: "What Is Shelfie",
//       subHeading: "A shared space for readers and writers",
//       body: "Shelfie is an **interactive storytelling** platform built for both **readers and writers**.\n\nWriters can share their books, stories, and ideas, while readers can engage directly with authors through **meaningful interactions**. Unlike traditional eBooks platforms, Shelfie focuses on **connection, dialogue, and community**, not just content distribution.",
//       img: whatShelfie, 
//       showButtons: false,
//       link: "https://shelfie.app" 
//     },
//     {
//       layout: 'reader', 
//       title: "FOR READERS", 
//       subHeading: "FOR THOSE PASSIONATE READERS WHO WANT TO", 
//       list: [
//         "Discover new writers",
//         "Explore their work",
//         "Take part in conversations that bring stories to life"
//       ],
//       body: "Shelfie allows readers to ask questions, share perspectives, and interact with authors without expensive paywalls or exclusivity.",
//       quote: "Reading on Shelfie isn't passive, it's personal.",
//       img: reader,
//       showButtons: true, 
//       link: "https://play.google.com/store/apps/details?id=com.jac.readerapp"
//     },
//     {
//       layout: 'writer',
//       title: "FOR WRITERS",
//       subHeading: "FOR WRITERS WHO WANT REAL READER ENGAGEMENT",
//       body: "Shelfie helps emerging & established writers go beyond publishing.\n\nShare your stories, connect directly with readers, and build a community around your work. Our platform is designed to turn passive readers into active participants in your creative journey.",
//       cards: [
//         { title: "DIRECT CONNECTION", text: "Talk to your audience without intermediaries." },
//         { title: "COMMUNITY BUILDING", text: "Foster a loyal following that grows with every chapter." }
//       ],
//       img: writer,
//       showButtons: true,
//       // extraButton removed here
//       link: "https://play.google.com/store/apps/details?id=com.jac.authorapp"
//     }
//   ];

//   // --- HELPER: ROBUST ROUNDED RECT DRAWING ---
//   const drawRoundedRect = (ctx, x, y, w, h, r) => {
//     ctx.beginPath();
//     ctx.moveTo(x + r, y);
//     ctx.lineTo(x + w - r, y);
//     ctx.quadraticCurveTo(x + w, y, x + w, y + r);
//     ctx.lineTo(x + w, y + h - r);
//     ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
//     ctx.lineTo(x + r, y + h);
//     ctx.quadraticCurveTo(x, y + h, x, y + h - r);
//     ctx.lineTo(x, y + r);
//     ctx.quadraticCurveTo(x, y, x + r, y);
//     ctx.closePath();
//     ctx.fill();
//   };

//   // --- GSAP SCROLL ---
//   useGSAP(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top top",
//         end: "+=2500", 
//         scrub: 1,
//         pin: true,
//         onUpdate: (self) => {
//           progressRef.current = self.progress;
//           const p = self.progress;
//           if (p < 0.15) setUiPhase(0);
//           else if (p > 0.75) setUiPhase(2); 
//           else setUiPhase(1);
//         }
//       }
//     });
//   }, { scope: containerRef });

//   // --- THREE.JS ---
//   useEffect(() => {
//     if (!canvasRef.current) return;
    
//     let animationFrameId;
//     let safetyTimeout; 

//     // Clean up previous canvas
//     while (canvasRef.current.firstChild) {
//       canvasRef.current.removeChild(canvasRef.current.firstChild);
//     }

//     const scene = new THREE.Scene();
//     scene.background = null; 

//     const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//     camera.position.set(0, 0, 15);

//     const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     renderer.outputColorSpace = THREE.SRGBColorSpace;
//     canvasRef.current.appendChild(renderer.domElement);

//     const handleResize = () => {
//       if (!camera || !renderer) return;
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
//     window.addEventListener('resize', handleResize);

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
//         const intersect = intersects[0];
//         const object = intersect.object;
        
//         if (object.userData && object.userData.isBackPage) {
//             const uv = intersect.uv;
//             const pixelX = uv.x * 1240;
//             const pixelY = (1 - uv.y) * 1400;

//             const centerX = 1240 / 2;
//             const btnWidth = 320;
//             const btnHeight = 95;
//             const gap = 40;
            
//             const storeBtnY = 1050;
//             const extraBtnY = 1180;
            
//             // Check App Store Button
//             if (pixelY >= storeBtnY && pixelY <= storeBtnY + btnHeight) {
//                 if (pixelX >= centerX - btnWidth - gap/2 && pixelX <= centerX - gap/2) {
//                     window.open('https://apps.apple.com', '_blank');
//                     return;
//                 }
//             }

//             // Check Play Store Button
//             if (pixelY >= storeBtnY && pixelY <= storeBtnY + btnHeight) {
//                 if (pixelX >= centerX + gap/2 && pixelX <= centerX + gap/2 + btnWidth) {
//                     if (object.userData.link) {
//                         window.open(object.userData.link, '_blank');
//                     }
//                     return;
//                 }
//             }

//             // Check "Become Author" Button
//             if (object.userData.hasExtraButton) {
//                 const extraW = 400;
//                 const extraH = 80;
//                 if (pixelY >= extraBtnY && pixelY <= extraBtnY + extraH) {
//                     if (pixelX >= centerX - extraW/2 && pixelX <= centerX + extraW/2) {
//                         const registerSection = document.getElementById('register');
//                         if (registerSection) {
//                             registerSection.scrollIntoView({ behavior: 'smooth' });
//                         }
//                         return;
//                     }
//                 }
//             }
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
//         const intersect = intersects[0];
//         const object = intersect.object;
        
//         if (object.userData && object.userData.isBackPage) {
//             const uv = intersect.uv;
//             const pixelX = uv.x * 1240;
//             const pixelY = (1 - uv.y) * 1400;
//             const centerX = 1240 / 2;
//             const btnWidth = 320;
//             const gap = 40;
//             const storeBtnY = 1050;
//             const extraBtnY = 1180;

//             if (pixelY >= storeBtnY && pixelY <= storeBtnY + 95 && pixelX >= centerX - btnWidth - gap/2 && pixelX <= centerX - gap/2) hoveringLink = true;
//             if (pixelY >= storeBtnY && pixelY <= storeBtnY + 95 && pixelX >= centerX + gap/2 && pixelX <= centerX + gap/2 + btnWidth) hoveringLink = true;
//             if (object.userData.hasExtraButton) {
//                 if (pixelY >= extraBtnY && pixelY <= extraBtnY + 80 && pixelX >= centerX - 200 && pixelX <= centerX + 200) hoveringLink = true;
//             }
//         }
//       }
//       document.body.style.cursor = hoveringLink ? 'pointer' : 'auto';
//     };

//     window.addEventListener('click', onMouseClick);
//     window.addEventListener('mousemove', onMouseMove);

//     const manager = new THREE.LoadingManager();
//     manager.onLoad = () => setLoading(false);
//     manager.onError = () => setLoading(false);
//     const loader = new THREE.TextureLoader(manager);
//     loader.setCrossOrigin("anonymous");

//     // --- TEXTURE GENERATOR FOR BACK PAGES (Left Side) ---
//     const createBackTexture = (data) => {
//       const canvas = document.createElement('canvas');
//       canvas.width = 1240; canvas.height = 1400;
//       const ctx = canvas.getContext('2d');
//       const tex = new THREE.CanvasTexture(canvas);
//       tex.colorSpace = THREE.SRGBColorSpace;
//       const centerX = canvas.width / 2;

//       ctx.fillStyle = '#ffffff';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       if (data && data.img) {
//         const img = new Image();
//         img.crossOrigin = "Anonymous";
//         img.src = data.img;
//         img.onload = () => {
          
//           const targetW = 1240;
//           const targetH = 900; 
//           const imgRatio = img.width / img.height;
//           const targetRatio = targetW / targetH;
//           let drawW, drawH, drawX, drawY;

//           if (imgRatio > targetRatio) {
//             drawW = targetW; drawH = targetW / imgRatio; drawX = 0; drawY = 100 + (targetH - drawH) / 2; 
//           } else {
//             drawH = targetH; drawW = targetH * imgRatio; drawX = (targetW - drawW) / 2; drawY = 100;
//           }

//           const gap = 50;
//           let btnAreaH = 0;
//           if (data.showButtons) { btnAreaH = 95; if (data.extraButton) btnAreaH += 130; }
//           const totalContentH = drawH + (data.showButtons ? gap : 0) + btnAreaH;
//           const masterY = (1400 - totalContentH) / 2;

//           ctx.drawImage(img, drawX, masterY, drawW, drawH);

//           if (data.showButtons) {
//             const btnWidth = 320; const btnHeight = 95; const btnGap = 40; const btnY = masterY + drawH + gap;
//             const imgApp = new Image(); imgApp.crossOrigin = "Anonymous"; imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
//             imgApp.onload = () => { ctx.drawImage(imgApp, centerX - btnWidth - btnGap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
//             const imgPlay = new Image(); imgPlay.crossOrigin = "Anonymous"; imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
//             imgPlay.onload = () => { ctx.drawImage(imgPlay, centerX + btnGap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };

//             if (data.extraButton) {
//               const extraY = btnY + 130; const extraW = 400; const extraH = 80;
//               ctx.fillStyle = '#7c4dff'; drawRoundedRect(ctx, centerX - extraW / 2, extraY, extraW, extraH, 40);
//               ctx.fillStyle = '#ffffff'; ctx.font = '700 32px "Inter", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
//               ctx.fillText(data.extraButton, centerX, extraY + extraH / 2);
//             }
//           } else { tex.needsUpdate = true; }
//         };
//       }
//       return tex;
//     };

//     // --- TEXTURE GENERATOR FOR FRONT PAGES (Right Side) ---
//     const createTextTexture = (data) => {
//       const canvas = document.createElement('canvas');
//       canvas.width = 1240; canvas.height = 1400;
//       const ctx = canvas.getContext('2d');
//       const tex = new THREE.CanvasTexture(canvas);
//       tex.colorSpace = THREE.SRGBColorSpace;
      
//       const centerX = canvas.width / 2;
//       const leftMargin = 100;
//       const rightMargin = 1140;
//       const maxWidth = 1040;

//       ctx.fillStyle = '#ffffff';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       let currentY = 150;

//       if (data.layout === 'reader' || data.layout === 'writer') {
//         currentY = 350; 
//         ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
//         ctx.font = '900 110px "Bebas Neue", sans-serif'; 
//         ctx.fillText(data.title, centerX, currentY);
        
//         currentY += 60;
//         ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
//         ctx.beginPath(); ctx.moveTo(centerX - 180, currentY); ctx.lineTo(centerX + 180, currentY); ctx.stroke();

//         currentY += 80;
//         ctx.fillStyle = '#7c4dff'; ctx.font = '700 36px "Inter", sans-serif';
//         const subWords = data.subHeading.split(' ');
//         let subLine = '';
//         subWords.forEach(word => {
//           const testLine = subLine + word + ' ';
//           if (ctx.measureText(testLine).width > maxWidth) { ctx.fillText(subLine, centerX, currentY); subLine = word + ' '; currentY += 50; } else { subLine = testLine; }
//         });
//         ctx.fillText(subLine, centerX, currentY);

//         ctx.textAlign = 'left'; currentY += 80;
//         ctx.fillStyle = '#666666'; ctx.font = '400 32px "Inter", sans-serif';
//         const paragraphs = data.body.split('\n');
//         paragraphs.forEach(para => {
//           if (para === '') { currentY += 30; return; } 
//           const bodyWords = para.split(' ');
//           let bodyLine = '';
//           bodyWords.forEach(word => {
//               const test = bodyLine + word + ' ';
//               if (ctx.measureText(test).width > maxWidth) { ctx.fillText(bodyLine, leftMargin, currentY); bodyLine = word + ' '; currentY += 45; } else { bodyLine = test; }
//           });
//           ctx.fillText(bodyLine, leftMargin, currentY); currentY += 45;
//         });

//         // --- CARDS WITH SAFE ROUNDED RECT ---
//         if (data.layout === 'writer' && data.cards) {
//             currentY += 60;
//             const cardWidth = 500; const cardHeight = 260; const cardGap = 40;
//             data.cards.forEach((card, idx) => {
//                 const cardX = leftMargin + (idx * (cardWidth + cardGap));
                
//                 // Draw Card Background
//                 ctx.fillStyle = '#f3f0ff'; 
//                 drawRoundedRect(ctx, cardX, currentY, cardWidth, cardHeight, 30);

//                 // Draw Text
//                 ctx.fillStyle = '#1a1a1a'; ctx.font = '900 42px "Bebas Neue", sans-serif'; ctx.textAlign = 'left';
//                 ctx.fillText(card.title, cardX + 40, currentY + 80);

//                 ctx.fillStyle = '#444'; ctx.font = '400 30px "Inter", sans-serif';
//                 const words = card.text.split(' ');
//                 let line = ''; let textY = currentY + 140;
//                 words.forEach(w => {
//                     if (ctx.measureText(line + w).width > cardWidth - 80) { ctx.fillText(line, cardX + 40, textY); line = w + ' '; textY += 40; } else { line += w + ' '; }
//                 });
//                 ctx.fillText(line, cardX + 40, textY);
//             });
//         }

//         if (data.layout === 'reader' && data.list) {
//           currentY += 20; ctx.font = '400 36px "Inter", sans-serif';
//           data.list.forEach((item, index) => {
//             ctx.beginPath(); ctx.strokeStyle = '#eeeeee'; ctx.lineWidth = 2; ctx.moveTo(leftMargin, currentY); ctx.lineTo(rightMargin, currentY); ctx.stroke();
//             currentY += 60;
//             ctx.fillStyle = '#7c4dff'; ctx.font = '700 36px "Inter", sans-serif'; ctx.fillText(`0${index + 1}`, leftMargin, currentY);
//             ctx.fillStyle = '#333333'; ctx.font = '400 36px "Inter", sans-serif'; ctx.fillText(item, leftMargin + 80, currentY);
//             currentY += 15; 
//           });
//           currentY += 10; ctx.beginPath(); ctx.strokeStyle = '#eeeeee'; ctx.lineWidth = 2; ctx.moveTo(leftMargin, currentY); ctx.lineTo(rightMargin, currentY); ctx.stroke();
//           currentY += 80; ctx.fillStyle = '#7c4dff'; ctx.fillRect(leftMargin, currentY, 6, 80);
//           ctx.fillStyle = '#1a1a1a'; ctx.font = 'italic 500 36px "Playfair Display", serif'; ctx.fillText(data.quote || "", leftMargin + 30, currentY + 50);
//         }

//       } else {
//         currentY = 400;
//         ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
//         ctx.font = '900 100px "Bebas Neue", sans-serif'; ctx.fillText(data.title, centerX, currentY);

//         currentY += 60;
//         ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
//         ctx.beginPath(); ctx.moveTo(centerX - 180, currentY); ctx.lineTo(centerX + 180, currentY); ctx.stroke();

//         if (data.subHeading) {
//           currentY += 70;
//           ctx.fillStyle = '#7c4dff'; ctx.font = '400 50px "Bebas Neue", sans-serif';
//           const subWords = data.subHeading.split(' ');
//           let subLine = '';
//           subWords.forEach(word => {
//               const testLine = subLine + word + ' ';
//               if (ctx.measureText(testLine).width > maxWidth) { ctx.fillText(subLine, centerX, currentY); subLine = word + ' '; currentY += 60; } else { subLine = testLine; }
//           });
//           ctx.fillText(subLine, centerX, currentY);
//         }
//         currentY += 80;
//         const normalFont = '400 38px "Abel", sans-serif'; const boldFont = '700 38px "Abel", sans-serif';
//         const rawSegments = data.body.split(/(\*\*.*?\*\*|\n)/g);
//         let words = [];
//         rawSegments.forEach(seg => {
//           if (seg === '\n') words.push({ text: null, isNewline: true });
//           else if (seg.startsWith('**') && seg.endsWith('**')) { seg.slice(2, -2).split(' ').forEach(w => w && words.push({ text: w, isBold: true })); }
//           else { seg.split(' ').forEach(w => w && words.push({ text: w, isBold: false })); }
//         });

//         let lineBuffer = []; let lineWidth = 0; const lineHeight = 48;
//         const drawLineCentered = (buffer, yPos) => {
//            const totalW = buffer.reduce((acc, w) => acc + w.width, 0) + (buffer.length - 1) * 10;
//            let startX = centerX - (totalW / 2);
//            buffer.forEach(item => {
//               ctx.font = item.isBold ? boldFont : normalFont; ctx.fillStyle = '#333333'; ctx.textAlign = 'left';
//               ctx.fillText(item.text, startX, yPos); startX += item.width + 10;
//            });
//         };
//         words.forEach(item => {
//           if (item.isNewline) { if (lineBuffer.length > 0) { drawLineCentered(lineBuffer, currentY); lineBuffer = []; lineWidth = 0; } currentY += lineHeight; return; }
//           ctx.font = item.isBold ? boldFont : normalFont; const w = ctx.measureText(item.text).width; item.width = w;
//           if (lineWidth + w + 10 > maxWidth) { drawLineCentered(lineBuffer, currentY); lineBuffer = []; lineWidth = 0; currentY += lineHeight; }
//           lineBuffer.push(item); lineWidth += w + 10;
//         });
//         if (lineBuffer.length > 0) drawLineCentered(lineBuffer, currentY);

//         if (data.showButtons && !data.layout) {
//           const btnY = currentY + 80; const btnWidth = 260; const btnHeight = 78; const gap = 30;
//           const imgApp = new Image(); imgApp.crossOrigin = "Anonymous"; imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
//           imgApp.onload = () => { ctx.drawImage(imgApp, centerX - btnWidth - gap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
//           const imgPlay = new Image(); imgPlay.crossOrigin = "Anonymous"; imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
//           imgPlay.onload = () => { ctx.drawImage(imgPlay, centerX + gap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
//         }
//       }
//       return tex;
//     };

//     const BOOK_WIDTH = 4.0; const BOOK_HEIGHT = 5.2; const SPACING = 0.04; const SPINE_RADIUS = 0.12;
//     const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
//     const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
//     const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.02 });

//     const bookGroup = new THREE.Group();
//     bookGroup.userData = { currentBaseY: 0, currentAmp: 0.1 };

//     const spine = new THREE.Mesh(new THREE.CylinderGeometry(SPINE_RADIUS, SPINE_RADIUS, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
//     spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2; bookGroup.add(spine);

//     const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
//     backCover.position.set(0, 0, -SPINE_RADIUS - 0.05); bookGroup.add(backCover);

//     const frontCoverPivot = new THREE.Group();
//     frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, SPINE_RADIUS + 0.05);
//     const coverMatArray = [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat];
//     const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), coverMatArray);
//     coverMesh.position.x = BOOK_WIDTH / 2; frontCoverPivot.add(coverMesh); bookGroup.add(frontCoverPivot);

//     const pageMeshes = [];
//     CONTENT.forEach((data, i) => {
//       const pivot = new THREE.Group(); pivot.position.set(-BOOK_WIDTH / 2, 0, SPINE_RADIUS);
//       const textTex = createTextTexture(data);
//       const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
//       const backMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });

//       const nextData = CONTENT[i + 1];
//       if (nextData) { const backTex = createBackTexture(nextData); backMat.map = backTex; backMat.needsUpdate = true; }
      
//       const pageMats = [goldMat, leatherMat, paperMat, paperMat, textMat, backMat];
//       const geo = new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02, 12, 1, 1);
//       const mesh = new THREE.Mesh(geo, pageMats);
//       mesh.position.x = BOOK_WIDTH / 2;
//       mesh.userData = { originalVertices: geo.attributes.position.array.slice(), link: data.link, isBackPage: false, backData: nextData, hasExtraButton: nextData?.extraButton ? true : false };
      
//       pivot.add(mesh); bookGroup.add(pivot); pageMeshes.push(mesh);
//     });
//     scene.add(bookGroup);

//     loader.load(BookCover, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 }); coverMesh.material.needsUpdate = true; });
//     if (CONTENT[0].img) { loader.load(CONTENT[0].img, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[5] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }); coverMesh.material.needsUpdate = true; }); }

//     // 2. DEFINE SAFETY TIMEOUT HERE (Before use)
//     safetyTimeout = setTimeout(() => setLoading(false), 3000);

//     document.fonts.ready.then(() => { if(renderer) renderer.render(scene, camera); });

//     const animate = (time) => {
//       animationFrameId = requestAnimationFrame(animate);
//       TWEEN.update(time);
//       const currentScroll = progressRef.current;
//       const START_READING = 0.15; const START_CLOSING = 0.75; 

//       let coverTarget = 0;
//       if (currentScroll > START_READING && currentScroll < START_CLOSING) coverTarget = -Math.PI * 0.98;
//       frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;
//       const coverOpenness = Math.abs(frontCoverPivot.rotation.y) / Math.PI;
//       frontCoverPivot.position.z = (SPINE_RADIUS + 0.05) - (coverOpenness * 0.5);

//       pageMeshes.forEach((mesh, i) => {
//         const pivot = mesh.parent;
//         const start = 0.25 + (i * 0.20); const end = 0.40 + (i * 0.20); 
//         let localP = 0;
//         if (i < pageMeshes.length - 1) { if (currentScroll < START_CLOSING) { localP = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1); } }
//         const targetRot = -Math.PI * localP * 0.98;
//         pivot.rotation.y += (targetRot - pivot.rotation.y) * 0.1;

//         const rotationProgress = Math.abs(pivot.rotation.y) / Math.PI;
//         const zRight = SPINE_RADIUS - (i * SPACING); const zLeft = 0.05 + (i * SPACING);
//         let currentZ = zRight * (1 - rotationProgress) + zLeft * rotationProgress;
//         const lift = Math.sin(rotationProgress * Math.PI) * 0.25;
//         pivot.position.z = currentZ + lift;

//         const pos = mesh.geometry.attributes.position;
//         const orig = mesh.userData.originalVertices;
//         if (orig && orig.length > 0) {
//           const angle = Math.abs(pivot.rotation.y); const bendIntensity = Math.sin(angle) * 1.2; 
//           for (let k = 0; k < pos.count; k++) {
//             const px = orig[k * 3]; const pz = orig[k * 3 + 2]; const dist = px + (BOOK_WIDTH / 2); const normalizedDist = dist / BOOK_WIDTH; 
//             const bendZ = Math.pow(normalizedDist, 1.5) * bendIntensity * 0.8; const shortenX = Math.pow(normalizedDist, 2) * bendIntensity * 0.15;
//             pos.setZ(k, pz - bendZ); pos.setX(k, px - shortenX);
//           }
//           pos.needsUpdate = true;
//         }
//       });

//       let targetX = 0, targetZ = 16, targetRotY = 0, targetY = 0;
//       if (currentScroll < 0.15) { targetX = 4.5; targetZ = 16; targetRotY = -0.4; targetY = 1.2; }
//       else if (currentScroll > START_CLOSING) { targetX = -2.0; targetZ = 14; targetRotY = 0.5; targetY = 0; }
//       else { targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0; targetY = 0; }

//       camera.position.z += (targetZ - camera.position.z) * 0.05;
//       bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
//       bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;
//       bookGroup.userData.currentBaseY += (targetY - bookGroup.userData.currentBaseY) * 0.05;

//       let targetAmp = 0.1;
//       if (currentScroll > 0.15 && currentScroll < 0.75) { targetAmp = 0; }
//       bookGroup.userData.currentAmp += (targetAmp - (bookGroup.userData.currentAmp || 0)) * 0.05;
//       bookGroup.position.y = bookGroup.userData.currentBaseY + Math.sin(time * 0.001) * bookGroup.userData.currentAmp;

//       renderer.render(scene, camera);
//     };
//     animate();

//     return () => {
//       window.removeEventListener('click', onMouseClick);
//       window.removeEventListener('mousemove', onMouseMove);
//       window.removeEventListener('resize', handleResize);
//       clearTimeout(safetyTimeout);
//       cancelAnimationFrame(animationFrameId);
//       if (canvasRef.current && renderer.domElement) { if (canvasRef.current.contains(renderer.domElement)) { canvasRef.current.removeChild(renderer.domElement); } }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div ref={containerRef} className="anim-book-container">
//       <div ref={canvasRef} className="anim-book-canvas" />
//       {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}
//       <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
//         <div className="content-box">
//           <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
//           <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors.</p>
//           <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
//         </div>
//         {/* <div className="hero-marquee"> */}
//           <Genres />
//           {/* </div> */}
//       </section>

//       {/* NEW CONTENT SECTION */}
//       <section id="register" className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
//         <div className="glass-card">
//           <h2>World’s first AI‑enabled book playground for indie stories</h2>
//           <p className="glass-subtitle">
//             Built for how you actually read and write.
//           </p>
//           <ul className="glass-list">
//             <li>
//               <span><strong>One‑click text‑to‑audio</strong> turns any chapter into an instant audiobook, so readers can switch from page to playlist without losing their place.</span>
//             </li>
//             <li>
//               <span><strong>Smart publishing assistance</strong> helps indie authors format, refine, and publish their books faster, with guided steps from draft to live shelf.</span>
//             </li>
//             <li>
//               <span><strong>Intelligent book filters</strong> use AI to surface stories by mood, trope, pacing, and genre, helping readers discover exactly the kind of books they’re craving.</span>
//             </li>
//           </ul>
//         </div>
//       </section>

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
      
//       {/* UPDATED CSS FOR TRANSPARENT GLASS EFFECT */}
//       <style>{`
//         .glass-card {
//           background: rgba(191, 87, 0, 0.2); /* Burned orange tint */
//           backdrop-filter: blur(40px);
//           -webkit-backdrop-filter: blur(40px);
//           padding: 30px; /* Smaller padding */
//           border-radius: 30px; /* Smaller radius */
//           box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
//           border: 1px solid rgba(191, 87, 0, 0.3); /* Tinted border */
//           max-width: 490px; /* Smaller width */
//           width: 100%;
//           color: #001a33;
//           transition: transform 0.3s ease;
//           margin-left: 100px; /* Add gap between book and card */
//         }
//         .glass-card:hover {
//           transform: translateY(-5px);
//         }
//         .glass-card h2 {
//           font-family: 'Bebas Neue', sans-serif;
//           font-size: 2.5rem; /* Smaller font */
//           line-height: 1.1;
//           margin-bottom: 20px;
//           margin-top: 0;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           background: linear-gradient(90deg, #1C0770, #0AC4E0);
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent;
//         }
//         .glass-subtitle {
//           font-family: 'Inter', sans-serif;
//           font-size: 1.1rem; /* Smaller font */
//           margin-bottom: 30px;
//           color: #333;
//           font-weight: 600;
//         }
//         .glass-list {
//           list-style: none;
//           padding: 0;
//           margin: 0;
//           font-family: 'Inter', sans-serif;
//           font-size: 0.95rem; /* Smaller font */
//           color: #1a1a1a;
//           line-height: 1.7;
//         }
//         .glass-list li {
//           margin-bottom: 18px; /* Smaller spacing */
//           padding-left: 20px;
//           border-left: 4px solid #7c4dff;
//         }
//         .glass-list strong {
//           color: #7c4dff;
//           font-weight: 700;
//           font-size: 1rem; /* Smaller font */
//           display: block;
//           margin-bottom: 4px;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default AnimationBook;
















import React, { useEffect, useRef, useState, useMemo } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Images (Ensure paths match your project structure)
import BookCover from '../assets/imgs/bookCover/romantic.png';
import booksStack from '../assets/imgs/Hero/books-stack-of-three.png';
import contractIcon from '../assets/imgs/Hero/contract.png';
import inkIcon from '../assets/imgs/Hero/ink.png';
import newspaperIcon from '../assets/imgs/Hero/newspaper.png';
import quillIcon from '../assets/imgs/Hero/quill-drawing-a-line.png';
import scriptIcon from '../assets/imgs/Hero/script.png';
import writeIcon from '../assets/imgs/Hero/write.png';
import whatShelfie from '../assets/imgs/what_shelfie.png';

// Import your custom images
import reader from '../assets/imgs/reader.png';
import writer from '../assets/imgs/writer.png';
import Genres from './Genres';

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

  const heroIcons = [booksStack, contractIcon, inkIcon, newspaperIcon, quillIcon, scriptIcon, writeIcon];

  // --- FLOATING ICONS LOGIC ---
  const floatingIconsElements = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => {
      const icon = heroIcons[i % heroIcons.length];
      
      // Random position: Bias towards Left (0-30%) and Right (70-100%)
      let left = Math.random() * 100;
      if (left > 30 && left < 70) {
        left = Math.random() > 0.5 ? Math.random() * 30 : 70 + Math.random() * 30;
      }

      const size = 30 + Math.random() * 40; 
      const duration = 15 + Math.random() * 20; 
      const delay = -(Math.random() * 30); 
      const opacity = 0.15 + Math.random() * 0.2; 

      const style = {
        left: `${left}%`,
        width: `${size}px`,
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        opacity: opacity,
      };

      return (
        <img 
          key={i} 
          src={icon} 
          className="floating-icon" 
          style={style} 
          alt="" 
        />
      );
    });
  }, []);

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
      title: "What Is Shelfie",
      subHeading: "A shared space for readers and writers",
      body: "Shelfie is an **interactive storytelling** platform built for both **readers and writers**.\n\nWriters can share their books, stories, and ideas, while readers can engage directly with authors through **meaningful interactions**. Unlike traditional eBooks platforms, Shelfie focuses on **connection, dialogue, and community**, not just content distribution.",
      img: whatShelfie, 
      showButtons: false,
      link: "https://shelfie.app" 
    },
    {
      layout: 'reader', 
      title: "FOR READERS", 
      subHeading: "FOR THOSE PASSIONATE READERS WHO WANT TO", 
      list: [
        "Discover new writers",
        "Explore their work",
        "Take part in conversations that bring stories to life"
      ],
      body: "Shelfie allows readers to ask questions, share perspectives, and interact with authors without expensive paywalls or exclusivity.",
      quote: "Reading on Shelfie isn't passive, it's personal.",
      img: reader,
      showButtons: true, 
      link: "https://play.google.com/store/apps/details?id=com.jac.readerapp"
    },
    {
      layout: 'writer',
      title: "FOR WRITERS",
      subHeading: "FOR WRITERS WHO WANT REAL READER ENGAGEMENT",
      body: "Shelfie helps emerging & established writers go beyond publishing.\n\nShare your stories, connect directly with readers, and build a community around your work. Our platform is designed to turn passive readers into active participants in your creative journey.",
      cards: [
        { title: "DIRECT CONNECTION", text: "Talk to your audience without intermediaries." },
        { title: "COMMUNITY BUILDING", text: "Foster a loyal following that grows with every chapter." }
      ],
      img: writer,
      showButtons: true,
      link: "https://play.google.com/store/apps/details?id=com.jac.authorapp"
    }
  ];

  // --- HELPER: ROBUST ROUNDED RECT DRAWING ---
  const drawRoundedRect = (ctx, x, y, w, h, r) => {
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    ctx.lineTo(x + w - r, y);
    ctx.quadraticCurveTo(x + w, y, x + w, y + r);
    ctx.lineTo(x + w, y + h - r);
    ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
    ctx.lineTo(x + r, y + h);
    ctx.quadraticCurveTo(x, y + h, x, y + h - r);
    ctx.lineTo(x, y + r);
    ctx.quadraticCurveTo(x, y, x + r, y);
    ctx.closePath();
    ctx.fill();
  };

  // --- GSAP SCROLL ---
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=2500", 
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          progressRef.current = self.progress;
          const p = self.progress;
          if (p < 0.15) setUiPhase(0);
          else if (p > 0.75) setUiPhase(2); 
          else setUiPhase(1);
        }
      }
    });
  }, { scope: containerRef });

  // --- THREE.JS ---
  useEffect(() => {
    if (!canvasRef.current) return;
    
    let animationFrameId;
    let safetyTimeout; 

    while (canvasRef.current.firstChild) {
      canvasRef.current.removeChild(canvasRef.current.firstChild);
    }

    const scene = new THREE.Scene();
    scene.background = null; 

    const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    canvasRef.current.appendChild(renderer.domElement);

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

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
        const intersect = intersects[0];
        const object = intersect.object;
        
        if (object.userData && object.userData.isBackPage) {
            const uv = intersect.uv;
            const pixelX = uv.x * 1240;
            const pixelY = (1 - uv.y) * 1400;

            const centerX = 1240 / 2;
            const btnWidth = 320;
            const btnHeight = 95;
            const gap = 40;
            
            const storeBtnY = 1050;
            const extraBtnY = 1180;
            
            // Check App Store Button
            if (pixelY >= storeBtnY && pixelY <= storeBtnY + btnHeight) {
                if (pixelX >= centerX - btnWidth - gap/2 && pixelX <= centerX - gap/2) {
                    window.open('https://apps.apple.com', '_blank');
                    return;
                }
            }

            // Check Play Store Button
            if (pixelY >= storeBtnY && pixelY <= storeBtnY + btnHeight) {
                if (pixelX >= centerX + gap/2 && pixelX <= centerX + gap/2 + btnWidth) {
                    if (object.userData.link) {
                        window.open(object.userData.link, '_blank');
                    }
                    return;
                }
            }

            // Check "Become Author" Button
            if (object.userData.hasExtraButton) {
                const extraW = 400;
                const extraH = 80;
                if (pixelY >= extraBtnY && pixelY <= extraBtnY + extraH) {
                    if (pixelX >= centerX - extraW/2 && pixelX <= centerX + extraW/2) {
                        const registerSection = document.getElementById('register');
                        if (registerSection) {
                            registerSection.scrollIntoView({ behavior: 'smooth' });
                        }
                        return;
                    }
                }
            }
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
        const intersect = intersects[0];
        const object = intersect.object;
        
        if (object.userData && object.userData.isBackPage) {
            const uv = intersect.uv;
            const pixelX = uv.x * 1240;
            const pixelY = (1 - uv.y) * 1400;
            const centerX = 1240 / 2;
            const btnWidth = 320;
            const gap = 40;
            const storeBtnY = 1050;
            const extraBtnY = 1180;

            if (pixelY >= storeBtnY && pixelY <= storeBtnY + 95 && pixelX >= centerX - btnWidth - gap/2 && pixelX <= centerX - gap/2) hoveringLink = true;
            if (pixelY >= storeBtnY && pixelY <= storeBtnY + 95 && pixelX >= centerX + gap/2 && pixelX <= centerX + gap/2 + btnWidth) hoveringLink = true;
            if (object.userData.hasExtraButton) {
                if (pixelY >= extraBtnY && pixelY <= extraBtnY + 80 && pixelX >= centerX - 200 && pixelX <= centerX + 200) hoveringLink = true;
            }
        }
      }
      document.body.style.cursor = hoveringLink ? 'pointer' : 'auto';
    };

    window.addEventListener('click', onMouseClick);
    window.addEventListener('mousemove', onMouseMove);

    const manager = new THREE.LoadingManager();
    manager.onLoad = () => setLoading(false);
    manager.onError = () => setLoading(false);
    const loader = new THREE.TextureLoader(manager);
    loader.setCrossOrigin("anonymous");

    // --- TEXTURE GENERATOR FOR BACK PAGES (Left Side) ---
    const createBackTexture = (data) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1240; canvas.height = 1400;
      const ctx = canvas.getContext('2d');
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const centerX = canvas.width / 2;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      if (data && data.img) {
        const img = new Image();
        img.crossOrigin = "Anonymous";
        img.src = data.img;
        img.onload = () => {
          
          const targetW = 1240;
          const targetH = 900; 
          const imgRatio = img.width / img.height;
          const targetRatio = targetW / targetH;
          let drawW, drawH, drawX, drawY;

          if (imgRatio > targetRatio) {
            drawW = targetW; drawH = targetW / imgRatio; drawX = 0; drawY = 100 + (targetH - drawH) / 2; 
          } else {
            drawH = targetH; drawW = targetH * imgRatio; drawX = (targetW - drawW) / 2; drawY = 100;
          }

          const gap = 50;
          let btnAreaH = 0;
          if (data.showButtons) { btnAreaH = 95; if (data.extraButton) btnAreaH += 130; }
          const totalContentH = drawH + (data.showButtons ? gap : 0) + btnAreaH;
          const masterY = (1400 - totalContentH) / 2;

          ctx.drawImage(img, drawX, masterY, drawW, drawH);

          if (data.showButtons) {
            const btnWidth = 320; const btnHeight = 95; const btnGap = 40; const btnY = masterY + drawH + gap;
            const imgApp = new Image(); imgApp.crossOrigin = "Anonymous"; imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
            imgApp.onload = () => { ctx.drawImage(imgApp, centerX - btnWidth - btnGap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
            const imgPlay = new Image(); imgPlay.crossOrigin = "Anonymous"; imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
            imgPlay.onload = () => { ctx.drawImage(imgPlay, centerX + btnGap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };

            if (data.extraButton) {
              const extraY = btnY + 130; const extraW = 400; const extraH = 80;
              ctx.fillStyle = '#7c4dff'; drawRoundedRect(ctx, centerX - extraW / 2, extraY, extraW, extraH, 40);
              ctx.fillStyle = '#ffffff'; ctx.font = '700 32px "Inter", sans-serif'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
              ctx.fillText(data.extraButton, centerX, extraY + extraH / 2);
            }
          } else { tex.needsUpdate = true; }
        };
      }
      return tex;
    };

    // --- TEXTURE GENERATOR FOR FRONT PAGES (Right Side) ---
    const createTextTexture = (data) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1240; canvas.height = 1400;
      const ctx = canvas.getContext('2d');
      const tex = new THREE.CanvasTexture(canvas);
      tex.colorSpace = THREE.SRGBColorSpace;
      const centerX = canvas.width / 2;
      const leftMargin = 100;
      const rightMargin = 1140;
      const maxWidth = 1040;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      let currentY = 150;

      if (data.layout === 'reader' || data.layout === 'writer') {
        currentY = 350; 
        ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
        ctx.font = '900 110px "Bebas Neue", sans-serif'; 
        ctx.fillText(data.title, centerX, currentY);
        
        currentY += 60;
        ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(centerX - 180, currentY); ctx.lineTo(centerX + 180, currentY); ctx.stroke();

        currentY += 80;
        ctx.fillStyle = '#7c4dff'; ctx.font = '700 36px "Inter", sans-serif';
        const subWords = data.subHeading.split(' ');
        let subLine = '';
        subWords.forEach(word => {
          const testLine = subLine + word + ' ';
          if (ctx.measureText(testLine).width > maxWidth) { ctx.fillText(subLine, centerX, currentY); subLine = word + ' '; currentY += 50; } else { subLine = testLine; }
        });
        ctx.fillText(subLine, centerX, currentY);

        ctx.textAlign = 'left'; currentY += 80;
        ctx.fillStyle = '#666666'; ctx.font = '400 32px "Inter", sans-serif';
        const paragraphs = data.body.split('\n');
        paragraphs.forEach(para => {
          if (para === '') { currentY += 30; return; } 
          const bodyWords = para.split(' ');
          let bodyLine = '';
          bodyWords.forEach(word => {
              const test = bodyLine + word + ' ';
              if (ctx.measureText(test).width > maxWidth) { ctx.fillText(bodyLine, leftMargin, currentY); bodyLine = word + ' '; currentY += 45; } else { bodyLine = test; }
          });
          ctx.fillText(bodyLine, leftMargin, currentY); currentY += 45;
        });

        // --- CARDS WITH SAFE ROUNDED RECT ---
        if (data.layout === 'writer' && data.cards) {
            currentY += 60;
            const cardWidth = 500; const cardHeight = 260; const cardGap = 40;
            data.cards.forEach((card, idx) => {
                const cardX = leftMargin + (idx * (cardWidth + cardGap));
                
                // Draw Card Background
                ctx.fillStyle = '#f3f0ff'; 
                drawRoundedRect(ctx, cardX, currentY, cardWidth, cardHeight, 30);

                // Draw Text
                ctx.fillStyle = '#1a1a1a'; ctx.font = '900 42px "Bebas Neue", sans-serif'; ctx.textAlign = 'left';
                ctx.fillText(card.title, cardX + 40, currentY + 80);

                ctx.fillStyle = '#444'; ctx.font = '400 30px "Inter", sans-serif';
                const words = card.text.split(' ');
                let line = ''; let textY = currentY + 140;
                words.forEach(w => {
                    if (ctx.measureText(line + w).width > cardWidth - 80) { ctx.fillText(line, cardX + 40, textY); line = w + ' '; textY += 40; } else { line += w + ' '; }
                });
                ctx.fillText(line, cardX + 40, textY);
            });
        }

        if (data.layout === 'reader' && data.list) {
          currentY += 20; ctx.font = '400 36px "Inter", sans-serif';
          data.list.forEach((item, index) => {
            ctx.beginPath(); ctx.strokeStyle = '#eeeeee'; ctx.lineWidth = 2; ctx.moveTo(leftMargin, currentY); ctx.lineTo(rightMargin, currentY); ctx.stroke();
            currentY += 60;
            ctx.fillStyle = '#7c4dff'; ctx.font = '700 36px "Inter", sans-serif'; ctx.fillText(`0${index + 1}`, leftMargin, currentY);
            ctx.fillStyle = '#333333'; ctx.font = '400 36px "Inter", sans-serif'; ctx.fillText(item, leftMargin + 80, currentY);
            currentY += 15; 
          });
          currentY += 10; ctx.beginPath(); ctx.strokeStyle = '#eeeeee'; ctx.lineWidth = 2; ctx.moveTo(leftMargin, currentY); ctx.lineTo(rightMargin, currentY); ctx.stroke();
          currentY += 80; ctx.fillStyle = '#7c4dff'; ctx.fillRect(leftMargin, currentY, 6, 80);
          ctx.fillStyle = '#1a1a1a'; ctx.font = 'italic 500 36px "Playfair Display", serif'; ctx.fillText(data.quote || "", leftMargin + 30, currentY + 50);
        }

      } else {
        currentY = 400;
        ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
        ctx.font = '900 100px "Bebas Neue", sans-serif'; ctx.fillText(data.title, centerX, currentY);

        currentY += 60;
        ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
        ctx.beginPath(); ctx.moveTo(centerX - 180, currentY); ctx.lineTo(centerX + 180, currentY); ctx.stroke();

        if (data.subHeading) {
          currentY += 70;
          ctx.fillStyle = '#7c4dff'; ctx.font = '400 50px "Bebas Neue", sans-serif';
          const subWords = data.subHeading.split(' ');
          let subLine = '';
          subWords.forEach(word => {
              const testLine = subLine + word + ' ';
              if (ctx.measureText(testLine).width > maxWidth) { ctx.fillText(subLine, centerX, currentY); subLine = word + ' '; currentY += 60; } else { subLine = testLine; }
          });
          ctx.fillText(subLine, centerX, currentY);
        }
        currentY += 80;
        const normalFont = '400 38px "Abel", sans-serif'; const boldFont = '700 38px "Abel", sans-serif';
        const rawSegments = data.body.split(/(\*\*.*?\*\*|\n)/g);
        let words = [];
        rawSegments.forEach(seg => {
          if (seg === '\n') words.push({ text: null, isNewline: true });
          else if (seg.startsWith('**') && seg.endsWith('**')) { seg.slice(2, -2).split(' ').forEach(w => w && words.push({ text: w, isBold: true })); }
          else { seg.split(' ').forEach(w => w && words.push({ text: w, isBold: false })); }
        });

        let lineBuffer = []; let lineWidth = 0; const lineHeight = 48;
        const drawLineCentered = (buffer, yPos) => {
           const totalW = buffer.reduce((acc, w) => acc + w.width, 0) + (buffer.length - 1) * 10;
           let startX = centerX - (totalW / 2);
           buffer.forEach(item => {
              ctx.font = item.isBold ? boldFont : normalFont; ctx.fillStyle = '#333333'; ctx.textAlign = 'left';
              ctx.fillText(item.text, startX, yPos); startX += item.width + 10;
           });
        };
        words.forEach(item => {
          if (item.isNewline) { if (lineBuffer.length > 0) { drawLineCentered(lineBuffer, currentY); lineBuffer = []; lineWidth = 0; } currentY += lineHeight; return; }
          ctx.font = item.isBold ? boldFont : normalFont; const w = ctx.measureText(item.text).width; item.width = w;
          if (lineWidth + w + 10 > maxWidth) { drawLineCentered(lineBuffer, currentY); lineBuffer = []; lineWidth = 0; currentY += lineHeight; }
          lineBuffer.push(item); lineWidth += w + 10;
        });
        if (lineBuffer.length > 0) drawLineCentered(lineBuffer, currentY);

        if (data.showButtons && !data.layout) {
          const btnY = currentY + 80; const btnWidth = 260; const btnHeight = 78; const gap = 30;
          const imgApp = new Image(); imgApp.crossOrigin = "Anonymous"; imgApp.src = "https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg";
          imgApp.onload = () => { ctx.drawImage(imgApp, centerX - btnWidth - gap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
          const imgPlay = new Image(); imgPlay.crossOrigin = "Anonymous"; imgPlay.src = "https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg";
          imgPlay.onload = () => { ctx.drawImage(imgPlay, centerX + gap / 2, btnY, btnWidth, btnHeight); tex.needsUpdate = true; };
        }
      }
      return tex;
    };

    const BOOK_WIDTH = 4.0; const BOOK_HEIGHT = 5.2; const SPACING = 0.04; const SPINE_RADIUS = 0.12;
    const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
    const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
    const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6, emissive: 0xffffff, emissiveIntensity: 0.02 });

    const bookGroup = new THREE.Group();
    bookGroup.userData = { currentBaseY: 0, currentAmp: 0.1 };

    const spine = new THREE.Mesh(new THREE.CylinderGeometry(SPINE_RADIUS, SPINE_RADIUS, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
    spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2; bookGroup.add(spine);

    const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
    backCover.position.set(0, 0, -SPINE_RADIUS - 0.05); bookGroup.add(backCover);

    const frontCoverPivot = new THREE.Group();
    frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, SPINE_RADIUS + 0.05);
    const coverMatArray = [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat];
    const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), coverMatArray);
    coverMesh.position.x = BOOK_WIDTH / 2; frontCoverPivot.add(coverMesh); bookGroup.add(frontCoverPivot);

    const pageMeshes = [];
    CONTENT.forEach((data, i) => {
      const pivot = new THREE.Group(); pivot.position.set(-BOOK_WIDTH / 2, 0, SPINE_RADIUS);
      const textTex = createTextTexture(data);
      const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });
      const backMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.5, emissive: 0xffffff, emissiveIntensity: 0.02 });

      const nextData = CONTENT[i + 1];
      if (nextData) { const backTex = createBackTexture(nextData); backMat.map = backTex; backMat.needsUpdate = true; }
      
      const pageMats = [goldMat, leatherMat, paperMat, paperMat, textMat, backMat];
      const geo = new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02, 12, 1, 1);
      const mesh = new THREE.Mesh(geo, pageMats);
      mesh.position.x = BOOK_WIDTH / 2;
      mesh.userData = { originalVertices: geo.attributes.position.array.slice(), link: data.link, isBackPage: false, backData: nextData, hasExtraButton: nextData?.extraButton ? true : false };
      
      pivot.add(mesh); bookGroup.add(pivot); pageMeshes.push(mesh);
    });
    scene.add(bookGroup);

    loader.load(BookCover, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 }); coverMesh.material.needsUpdate = true; });
    if (CONTENT[0].img) { loader.load(CONTENT[0].img, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[5] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.5 }); coverMesh.material.needsUpdate = true; }); }

    // 2. DEFINE SAFETY TIMEOUT HERE (Before use)
    safetyTimeout = setTimeout(() => setLoading(false), 3000);

    document.fonts.ready.then(() => { if(renderer) renderer.render(scene, camera); });

    const animate = (time) => {
      animationFrameId = requestAnimationFrame(animate);
      TWEEN.update(time);
      const currentScroll = progressRef.current;
      const START_READING = 0.15; const START_CLOSING = 0.75; 

      let coverTarget = 0;
      if (currentScroll > START_READING && currentScroll < START_CLOSING) coverTarget = -Math.PI * 0.98;
      frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;
      const coverOpenness = Math.abs(frontCoverPivot.rotation.y) / Math.PI;
      frontCoverPivot.position.z = (SPINE_RADIUS + 0.05) - (coverOpenness * 0.5);

      pageMeshes.forEach((mesh, i) => {
        const pivot = mesh.parent;
        const start = 0.25 + (i * 0.20); const end = 0.40 + (i * 0.20); 
        let localP = 0;
        if (i < pageMeshes.length - 1) { if (currentScroll < START_CLOSING) { localP = Math.min(Math.max((currentScroll - start) / (end - start), 0), 1); } }
        const targetRot = -Math.PI * localP * 0.98;
        pivot.rotation.y += (targetRot - pivot.rotation.y) * 0.1;

        const rotationProgress = Math.abs(pivot.rotation.y) / Math.PI;
        const zRight = SPINE_RADIUS - (i * SPACING); const zLeft = 0.05 + (i * SPACING);
        let currentZ = zRight * (1 - rotationProgress) + zLeft * rotationProgress;
        const lift = Math.sin(rotationProgress * Math.PI) * 0.25;
        pivot.position.z = currentZ + lift;

        const pos = mesh.geometry.attributes.position;
        const orig = mesh.userData.originalVertices;
        if (orig && orig.length > 0) {
          const angle = Math.abs(pivot.rotation.y); const bendIntensity = Math.sin(angle) * 1.2; 
          for (let k = 0; k < pos.count; k++) {
            const px = orig[k * 3]; const pz = orig[k * 3 + 2]; const dist = px + (BOOK_WIDTH / 2); const normalizedDist = dist / BOOK_WIDTH; 
            const bendZ = Math.pow(normalizedDist, 1.5) * bendIntensity * 0.8; const shortenX = Math.pow(normalizedDist, 2) * bendIntensity * 0.15;
            pos.setZ(k, pz - bendZ); pos.setX(k, px - shortenX);
          }
          pos.needsUpdate = true;
        }
      });

      let targetX = 0, targetZ = 16, targetRotY = 0, targetY = 0;
      if (currentScroll < 0.15) { targetX = 4.5; targetZ = 16; targetRotY = -0.4; targetY = 1.2; }
      else if (currentScroll > START_CLOSING) { targetX = -2.0; targetZ = 14; targetRotY = 0.5; targetY = 0; }
      else { targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0; targetY = 0; }

      camera.position.z += (targetZ - camera.position.z) * 0.05;
      bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
      bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;
      bookGroup.userData.currentBaseY += (targetY - bookGroup.userData.currentBaseY) * 0.05;

      let targetAmp = 0.1;
      if (currentScroll > 0.15 && currentScroll < 0.75) { targetAmp = 0; }
      bookGroup.userData.currentAmp += (targetAmp - (bookGroup.userData.currentAmp || 0)) * 0.05;
      bookGroup.position.y = bookGroup.userData.currentBaseY + Math.sin(time * 0.001) * bookGroup.userData.currentAmp;

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('click', onMouseClick);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      clearTimeout(safetyTimeout);
      cancelAnimationFrame(animationFrameId);
      if (canvasRef.current && renderer.domElement) { if (canvasRef.current.contains(renderer.domElement)) { canvasRef.current.removeChild(renderer.domElement); } }
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="anim-book-container">
      {/* 2. ADD FLOATING ICONS CONTAINER HERE */}
      <div className="floating-icons-layer">
        {floatingIconsElements}
      </div>

      <div ref={canvasRef} className="anim-book-canvas" />
      {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}
      <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
        <div className="content-box">
          <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
          <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors.</p>
          <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
        </div>
        {/* <div className="hero-marquee"> */}
          <Genres />
          {/* </div> */}
      </section>

      {/* RE-STYLED CONTENT SECTION */}
      <section id="register" className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
        <div className="glass-card">
          <h2>World’s first AI‑enabled book playground for indie stories</h2>
          <p className="glass-subtitle">
            Built for how you actually read and write.
          </p>
          <ul className="glass-list">
            <li>
              <span><strong>One‑click text‑to‑audio</strong> turns any chapter into an instant audiobook, so readers can switch from page to playlist without losing their place.</span>
            </li>
            <li>
              <span><strong>Smart publishing assistance</strong> helps indie authors format, refine, and publish their books faster, with guided steps from draft to live shelf.</span>
            </li>
            <li>
              <span><strong>Intelligent book filters</strong> use AI to surface stories by mood, trope, pacing, and genre, helping readers discover exactly the kind of books they’re craving.</span>
            </li>
          </ul>
        </div>
      </section>

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
      
      {/* UPDATED CSS FOR TRANSPARENT GLASS EFFECT */}
      <style>{`
        /* CORRECT Z-INDEX LAYERING */
        .anim-book-canvas {
          z-index: 5 !important; /* Book sits above icons */
        }
        
        .floating-icons-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: 1; /* Icons sit behind book */
          overflow: hidden;
        }

        .glass-card {
          background: rgba(191, 87, 0, 0.2); /* Burned orange tint */
          backdrop-filter: blur(40px);
          -webkit-backdrop-filter: blur(40px);
          padding: 26px; /* Smaller padding */
          border-radius: 30px; /* Smaller radius */
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(191, 87, 0, 0.3); /* Tinted border */
          max-width: 480px; /* Smaller width */
          width: 100%;
          color: #001a33;
          transition: transform 0.3s ease;
          margin-left: 100px; /* Add gap between book and card */
        }
        .glass-card:hover {
          transform: translateY(-5px);
        }
        .glass-card h2 {
          font-family: 'Bebas Neue', sans-serif;
          font-size: 2.5rem; /* Smaller font */
          line-height: 1.1;
          margin-bottom: 20px;
          margin-top: 0;
          text-transform: uppercase;
          letter-spacing: 1px;
          background: linear-gradient(90deg, #1C0770, #0AC4E0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .glass-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.1rem; /* Smaller font */
          margin-bottom: 30px;
          color: #333;
          font-weight: 600;
        }
        .glass-list {
          list-style: none;
          padding: 0;
          margin: 0;
          font-family: 'Inter', sans-serif;
          font-size: 0.95rem; /* Smaller font */
          color: #1a1a1a;
          line-height: 1.7;
        }
        .glass-list li {
          margin-bottom: 18px; /* Smaller spacing */
          padding-left: 20px;
          border-left: 4px solid #7c4dff;
        }
        .glass-list strong {
          color: #7c4dff;
          font-weight: 700;
          font-size: 1rem; /* Smaller font */
          display: block;
          margin-bottom: 4px;
        }

        .floating-icon {
          position: absolute;
          bottom: -100px; /* Start below screen */
          animation-name: floatUp;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes floatUp {
          0% { top: 110%; transform: rotate(0deg); }
          100% { top: -20%; transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default AnimationBook;