



// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import TWEEN from '@tweenjs/tween.js';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import { useGSAP } from '@gsap/react';
// import BookCover from '../assets/imgs/bookCover/romantic.png';

// // hero section icons to scroll 
// import audioBook from '../assets/imgs/heroSection/audio-book.png';
// import author from '../assets/imgs/heroSection/author.png';
// import contract from '../assets/imgs/heroSection/contract.png';
// import fountainPen from '../assets/imgs/heroSection/fountain-pen.png';
// import pupil from '../assets/imgs/heroSection/pupil.png';
// import stackOfBooks from '../assets/imgs/heroSection/stack-of-books.png';

// gsap.registerPlugin(ScrollTrigger);

// const AnimationBook = () => {
//     const containerRef = useRef(null);
//     const canvasRef = useRef(null);
//     const progressRef = useRef(0);
//     const [loading, setLoading] = useState(true);

//     const [location, setLocation] = useState('');
//     const [isLocating, setIsLocating] = useState(false);
//     const [isPopupOpen, setIsPopupOpen] = useState(false);
//     const [uiPhase, setUiPhase] = useState(0);

//     const togglePopup = () => { setIsPopupOpen(!isPopupOpen); };
//     const handleRoleSelect = (role) => { console.log(role); };

//     const handleGetLocation = () => {
//         if (!navigator.geolocation) return;
//         setIsLocating(true);
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 setLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
//                 setIsLocating(false);
//             },
//             () => { setIsLocating(false); }
//         );
//     };

//     const COLORS = {
//         leather: 0x5c3a2a,
//         gold: 0xd4af37,
//         paper: 0xffffff,
//         studio: 0xf2f0e6,
//         penBody: 0x1a1a1a
//     };

//     const CONTENT = [
//         { title: "AI Enabled Reading", body: "The world’s first AI enabled book reading platform specially designed for Authors to make their books standout to readers across the globe!\n\nOne click audiobook: Every story you want to read can be easily converted to an audio book that you can listen to anyplace, anytime for free!", img: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000&auto=format&fit=crop", showButtons: false, link: null },
//         { title: "For the Reader", body: "For those passionate readers who want to: Discover new writers, Explore their work, Take part in conversations that bring stories to life. Shelfie allows readers to ask questions, share perspectives, and interact with authors without expensive paywalls or exclusivity.", img: "https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1000&auto=format&fit=crop", showButtons: true, link: "https://play.google.com/store/apps/details?id=com.jac.readerapp" },
//         { title: "For the Author", body: "For writers who want real reader engagement. Shelfie helps emerging & established writers go beyond publishing. Share your stories, connect directly with readers, and build a community around your work.", img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1000&auto=format&fit=crop", showButtons: true, link: "https://play.google.com/store/apps/details?id=com.jac.authorapp" }
//     ];

//     useGSAP(() => {
//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: containerRef.current, start: "top top", end: "+=4000", scrub: 1, pin: true,
//                 onUpdate: (self) => {
//                     progressRef.current = self.progress;
//                     const p = self.progress;
//                     if (p < 0.15) setUiPhase(0);
//                     else if (p > 0.85) setUiPhase(2);
//                     else setUiPhase(1);
//                 }
//             }
//         });
//     }, { scope: containerRef });

//     useEffect(() => {
//         if (!canvasRef.current) return;
//         canvasRef.current.innerHTML = '';

//         const scene = new THREE.Scene();
//         scene.background = new THREE.Color(COLORS.studio);
//         scene.fog = new THREE.Fog(COLORS.studio, 10, 50);

//         const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);
//         camera.position.set(0, 0, 15);

//         const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
//         renderer.setSize(window.innerWidth, window.innerHeight);
//         renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//         renderer.outputColorSpace = THREE.SRGBColorSpace;
//         canvasRef.current.appendChild(renderer.domElement);

//         scene.add(new THREE.AmbientLight(0xffffff, 1.8));
//         const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
//         keyLight.position.set(5, 5, 10);
//         scene.add(keyLight);

//         const manager = new THREE.LoadingManager();
//         manager.onLoad = () => setLoading(false);
//         const loader = new THREE.TextureLoader(manager);
//         loader.setCrossOrigin("anonymous");

//         const createTextTexture = (data) => {
//             const canvas = document.createElement('canvas');
//             canvas.width = 1024; canvas.height = 1400;
//             const ctx = canvas.getContext('2d');
//             const tex = new THREE.CanvasTexture(canvas);
//             tex.colorSpace = THREE.SRGBColorSpace;

//             const drawCanvas = () => {
//                 ctx.fillStyle = '#ffffff';
//                 ctx.fillRect(0, 0, canvas.width, canvas.height);
//                 ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
//                 ctx.font = '700 90px "Bebas Neue"';
//                 ctx.fillText(data.title.toUpperCase(), 512, 250);
//                 ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
//                 ctx.beginPath(); ctx.moveTo(362, 310); ctx.lineTo(662, 310); ctx.stroke();
//                 ctx.font = '400 42px "Abel"'; ctx.fillStyle = '#333333';
//                 const words = data.body.split(' ');
//                 let line = '', y = 380, lineHeight = 54, maxTextWidth = 720;
//                 words.forEach(word => {
//                     const testLine = line + word + ' ';
//                     if (ctx.measureText(testLine).width > maxTextWidth) {
//                         ctx.fillText(line, 512, y); line = word + ' '; y += lineHeight;
//                     } else { line = testLine; }
//                 });
//                 ctx.fillText(line, 512, y);
//                 tex.needsUpdate = true;
//             };
//             drawCanvas();
//             return tex;
//         };

//         const BOOK_WIDTH = 3.3; const BOOK_HEIGHT = 4.5; const SPACING = 0.05;
//         const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
//         const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
//         const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6 });
//         const bookGroup = new THREE.Group();

//         const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
//         spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2;
//         bookGroup.add(spine);

//         const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
//         backCover.position.set(0, 0, -0.3);
//         bookGroup.add(backCover);

//         const frontCoverPivot = new THREE.Group();
//         frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, 0.3);
//         const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat]);
//         coverMesh.position.x = BOOK_WIDTH / 2;
//         frontCoverPivot.add(coverMesh);
//         bookGroup.add(frontCoverPivot);

//         const pageMeshes = [];
//         CONTENT.forEach((data, i) => {
//             const pivot = new THREE.Group();
//             pivot.position.set(-BOOK_WIDTH / 2, 0, 0.2);
//             const textTex = createTextTexture(data);
//             const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5 });
//             const backMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.5 });
//             const mesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02), [goldMat, leatherMat, paperMat, paperMat, textMat, backMat]);
//             mesh.position.x = BOOK_WIDTH / 2;
//             mesh.userData = { originalVertices: mesh.geometry.attributes.position.array.slice() };
//             pivot.add(mesh);
//             bookGroup.add(pivot);
//             pageMeshes.push(mesh);
//         });
//         scene.add(bookGroup);

//         loader.load(BookCover, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 }); coverMesh.material.needsUpdate = true; });

//         const animate = (time) => {
//             requestAnimationFrame(animate);
//             TWEEN.update(time);
//             const currentScroll = progressRef.current;

//             const START_READING = 0.15, START_CLOSING = 0.85;
//             let coverTarget = (currentScroll > START_READING && currentScroll < START_CLOSING) ? -Math.PI * 0.98 : 0;
//             frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;

//             pageMeshes.forEach((mesh, i) => {
//                 const pivot = mesh.parent;
//                 const start = 0.25 + (i * 0.15), end = 0.4 + (i * 0.15);
//                 let localP = (i < pageMeshes.length - 1 && currentScroll < START_CLOSING) ? Math.min(Math.max((currentScroll - start) / (end - start), 0), 1) : 0;
//                 pivot.rotation.y += (-Math.PI * localP * 0.98 - pivot.rotation.y) * 0.1;
//             });

//             // ADJUSTED POSITIONS TO REMOVE EMPTY SPACE
//             let targetX = 0, targetZ = 16, targetRotY = 0, targetY_Pos = 1.0;
//             if (currentScroll < 0.15) { 
//                 targetX = 4.5; targetZ = 15; targetRotY = -0.4; targetY_Pos = 1.2; 
//             } else if (currentScroll > 0.85) { 
//                 targetX = -2.0; targetZ = 14; targetRotY = 0.5; targetY_Pos = 0.5;
//             } else { 
//                 targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0; targetY_Pos = 0.8;
//             }

//             camera.position.z += (targetZ - camera.position.z) * 0.05;
//             bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
//             bookGroup.position.y += (targetY_Pos - bookGroup.position.y) * 0.05;
//             bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;

//             renderer.render(scene, camera);
//         };
//         animate();

//         const handleResize = () => {
//             camera.aspect = window.innerWidth / window.innerHeight;
//             camera.updateProjectionMatrix();
//             renderer.setSize(window.innerWidth, window.innerHeight);
//         };
//         window.addEventListener('resize', handleResize);
//         return () => { window.removeEventListener('resize', handleResize); renderer.dispose(); };
//     }, []);

//     const heroIcons = [audioBook, author, contract, fountainPen, pupil, stackOfBooks];

//     return (
//         <div ref={containerRef} className="anim-book-container">
//             <div ref={canvasRef} className="anim-book-canvas" />
//             {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}

//             <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
//                 <div className="content-box">
//                     <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
//                     <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors through conversations that continue beyond the page.</p>
//                     <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
//                 </div>

//                 <div className="hero-marquee">
//                     <div className="marquee-content">
//                         {[...heroIcons, ...heroIcons, ...heroIcons].map((icon, idx) => (
//                             <img key={idx} src={icon} alt="feature icon" className="marquee-icon" />
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
//                 <div className="glass-card contact-form">
//                     <h2>Register as Author</h2>
//                     <form onSubmit={(e) => e.preventDefault()}>
//                         <input type="text" placeholder="Username" />
//                         <input type="email" placeholder="Email Address" />
//                         <input type="password" placeholder="Password" />
//                         <input type="tel" placeholder="Phone Number" />
//                         <div className="location-row">
//                             <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="location-input" />
//                             <button type="button" className="location-btn" onClick={handleGetLocation}>{isLocating ? "..." : "📍"}</button>
//                         </div>
//                         <button className="btn-gradient full-width">REGISTER</button>
//                     </form>
//                 </div>
//             </section>
//         </div>
//     );
// };

// export default AnimationBook;


















import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import TWEEN from '@tweenjs/tween.js';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import BookCover from '../assets/imgs/bookCover/romantic.png';

// hero section icons to scroll 
// import audioBook from '../assets/imgs/heroSection/audio-book.png';
// import author from '../assets/imgs/heroSection/author.png';
// import contract from '../assets/imgs/heroSection/contract.png';
// import fountainPen from '../assets/imgs/heroSection/fountain-pen.png';
// import pupil from '../assets/imgs/heroSection/pupil.png';
// import stackOfBooks from '../assets/imgs/heroSection/stack-of-books.png';


// new icosn 
import booksStack from '../assets/imgs/Hero/books-stack-of-three.png';
import contract from '../assets/imgs/Hero/contract.png';
import ink from '../assets/imgs/Hero/ink.png';
import newspaper from '../assets/imgs/Hero/newspaper.png';
import quill from '../assets/imgs/Hero/quill-drawing-a-line.png';
import script from '../assets/imgs/Hero/script.png';
import write from '../assets/imgs/Hero/write.png';

gsap.registerPlugin(ScrollTrigger);

const AnimationBook = () => {
    const containerRef = useRef(null);
    const canvasRef = useRef(null);
    const progressRef = useRef(0);
    const [loading, setLoading] = useState(true);

    const [location, setLocation] = useState('');
    const [isLocating, setIsLocating] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [uiPhase, setUiPhase] = useState(0);

    const togglePopup = () => { setIsPopupOpen(!isPopupOpen); };

    const handleGetLocation = () => {
        if (!navigator.geolocation) return;
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (position) => {
                setLocation(`${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)}`);
                setIsLocating(false);
            },
            () => { setIsLocating(false); }
        );
    };

    const COLORS = {
        leather: 0x5c3a2a,
        gold: 0xd4af37,
        paper: 0xffffff,
        studio: 0xf2f0e6,
        penBody: 0x1a1a1a
    };

    const CONTENT = [
        { title: "AI Enabled Reading", body: "The world’s first AI enabled book reading platform specially designed for Authors to make their books standout to readers across the globe!\n\nOne click audiobook: Every story you want to read can be easily converted to an audio book that you can listen to anyplace, anytime for free!", img: "https://images.unsplash.com/photo-1495640388908-05fa85288e61?q=80&w=1000&auto=format&fit=crop" },
        { title: "For the Reader", body: "Discover new writers, explore their work, and interact directly with authors through conversations that continue beyond the page." },
        { title: "For the Author", body: "Share your stories and build a community around your work with real reader engagement." }
    ];

    useGSAP(() => {
        gsap.timeline({
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

        scene.add(new THREE.AmbientLight(0xffffff, 1.8));
        const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
        keyLight.position.set(5, 5, 10);
        scene.add(keyLight);

        const manager = new THREE.LoadingManager();
        manager.onLoad = () => setLoading(false);
        const loader = new THREE.TextureLoader(manager);
        loader.setCrossOrigin("anonymous");

        const createTextTexture = (data) => {
            const canvas = document.createElement('canvas');
            canvas.width = 1024; canvas.height = 1400;
            const ctx = canvas.getContext('2d');
            const tex = new THREE.CanvasTexture(canvas);
            tex.colorSpace = THREE.SRGBColorSpace;

            const drawCanvas = () => {
                ctx.fillStyle = '#ffffff';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                ctx.textAlign = 'center'; ctx.fillStyle = '#1a1a1a';
                ctx.font = '700 90px "Bebas Neue"';
                ctx.fillText(data.title.toUpperCase(), 512, 250);
                ctx.strokeStyle = '#d4af37'; ctx.lineWidth = 3;
                ctx.beginPath(); ctx.moveTo(362, 310); ctx.lineTo(662, 310); ctx.stroke();
                ctx.font = '400 42px "Abel"'; ctx.fillStyle = '#333333';
                const words = data.body.split(' ');
                let line = '', y = 380, lineHeight = 54, maxTextWidth = 720;
                words.forEach(word => {
                    const testLine = line + word + ' ';
                    if (ctx.measureText(testLine).width > maxTextWidth) {
                        ctx.fillText(line, 512, y); line = word + ' '; y += lineHeight;
                    } else { line = testLine; }
                });
                ctx.fillText(line, 512, y);
                tex.needsUpdate = true;
            };
            drawCanvas();
            return tex;
        };

        const BOOK_WIDTH = 3.3; const BOOK_HEIGHT = 4.5;
        const leatherMat = new THREE.MeshStandardMaterial({ color: COLORS.leather, roughness: 0.4 });
        const goldMat = new THREE.MeshStandardMaterial({ color: COLORS.gold, metalness: 0.8, roughness: 0.2 });
        const paperMat = new THREE.MeshStandardMaterial({ color: COLORS.paper, roughness: 0.6 });
        const bookGroup = new THREE.Group();

        const spine = new THREE.Mesh(new THREE.CylinderGeometry(0.25, 0.25, BOOK_HEIGHT, 32, 1, false, Math.PI / 2, Math.PI), leatherMat);
        spine.rotation.y = Math.PI; spine.position.x = -BOOK_WIDTH / 2;
        bookGroup.add(spine);

        const backCover = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, paperMat, leatherMat]);
        backCover.position.set(0, 0, -0.3);
        bookGroup.add(backCover);

        const frontCoverPivot = new THREE.Group();
        frontCoverPivot.position.set(-BOOK_WIDTH / 2, 0, 0.3);
        const coverMesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.15), [leatherMat, leatherMat, leatherMat, leatherMat, leatherMat, paperMat]);
        coverMesh.position.x = BOOK_WIDTH / 2;
        frontCoverPivot.add(coverMesh);
        bookGroup.add(frontCoverPivot);

        const pageMeshes = [];
        CONTENT.forEach((data, i) => {
            const pivot = new THREE.Group();
            pivot.position.set(-BOOK_WIDTH / 2, 0, 0.2);
            const textTex = createTextTexture(data);
            const textMat = new THREE.MeshStandardMaterial({ map: textTex, roughness: 0.5 });
            const mesh = new THREE.Mesh(new THREE.BoxGeometry(BOOK_WIDTH, BOOK_HEIGHT, 0.02), [goldMat, leatherMat, paperMat, paperMat, textMat, paperMat]);
            mesh.position.x = BOOK_WIDTH / 2;
            pivot.add(mesh);
            bookGroup.add(pivot);
            pageMeshes.push(mesh);
        });
        scene.add(bookGroup);

        loader.load(BookCover, (tex) => { tex.colorSpace = THREE.SRGBColorSpace; coverMesh.material[4] = new THREE.MeshStandardMaterial({ map: tex, roughness: 0.3 }); coverMesh.material.needsUpdate = true; });

        const animate = (time) => {
            requestAnimationFrame(animate);
            TWEEN.update(time);
            const currentScroll = progressRef.current;

            const START_READING = 0.15, START_CLOSING = 0.85;
            let coverTarget = (currentScroll > START_READING && currentScroll < START_CLOSING) ? -Math.PI * 0.98 : 0;
            frontCoverPivot.rotation.y += (coverTarget - frontCoverPivot.rotation.y) * 0.08;

            pageMeshes.forEach((mesh, i) => {
                const pivot = mesh.parent;
                const start = 0.25 + (i * 0.15), end = 0.4 + (i * 0.15);
                let localP = (i < pageMeshes.length - 1 && currentScroll < START_CLOSING) ? Math.min(Math.max((currentScroll - start) / (end - start), 0), 1) : 0;
                pivot.rotation.y += (-Math.PI * localP * 0.98 - pivot.rotation.y) * 0.1;
            });

            // MOVED BOOK SLIGHTLY LOWER (targetY_Pos decreased)
            let targetX = 0, targetZ = 16, targetRotY = 0, targetY_Pos = 0.7; 
            if (currentScroll < 0.15) { 
                targetX = 4.5; targetZ = 15; targetRotY = -0.4; targetY_Pos = 0.9; 
            } else if (currentScroll > 0.85) { 
                targetX = -2.0; targetZ = 14; targetRotY = 0.5; targetY_Pos = 0.5;
            } else { 
                targetX = BOOK_WIDTH / 2; targetZ = 9.5; targetRotY = 0; targetY_Pos = 0.6;
            }

            camera.position.z += (targetZ - camera.position.z) * 0.05;
            bookGroup.position.x += (targetX - bookGroup.position.x) * 0.05;
            bookGroup.position.y += (targetY_Pos - bookGroup.position.y) * 0.05;
            bookGroup.rotation.y += (targetRotY - bookGroup.rotation.y) * 0.05;

            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);
        return () => { window.removeEventListener('resize', handleResize); renderer.dispose(); };
    }, []);

    const heroIcons = [booksStack, contract, ink, newspaper, quill, script, write];

    return (
        <div ref={containerRef} className="anim-book-container">
            <div ref={canvasRef} className="anim-book-canvas" />
            {loading && <div className="anim-loader"><div className="loader-text">SHELFIE</div></div>}

            <section className={`anim-overlay hero-phase ${uiPhase === 0 ? 'active' : ''}`}>
                <div className="content-box">
                    <h1 className="hero-title">Stories were never meant <br /> to be one-way</h1>
                    <p className="hero-desc">On Shelfie, reading is just the beginning. Discover writers, explore their stories, and interact directly with authors through conversations that continue beyond the page.</p>
                    <button className="btn-primary" onClick={togglePopup}>Get Started on Shelfie</button>
                </div>

                <div className="hero-marquee">
                    <div className="marquee-content">
                        {[...heroIcons, ...heroIcons, ...heroIcons].map((icon, idx) => (
                            <img key={idx} src={icon} alt="icon" className="marquee-icon" />
                        ))}
                    </div>
                </div>
            </section>

            <section className={`anim-overlay contact-phase ${uiPhase === 2 ? 'active' : ''}`}>
                <div className="glass-card">
                    <h2>Register as Author</h2>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <input type="text" placeholder="Username" />
                        <input type="email" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <div className="location-row">
                            <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} />
                            <button type="button" className="location-btn" onClick={handleGetLocation}>📍</button>
                        </div>
                        <button className="btn-gradient">REGISTER</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default AnimationBook;