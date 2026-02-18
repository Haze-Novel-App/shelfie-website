// import React from 'react';
// import Header from './components/Header';
// import Hero from './components/Hero';
// import Brands from './components/Brands';
// import FeaturedBooks from './components/FeaturedBooks';
// import Newsletter from './components/Newsletter';
// import Articles from './components/LatestArticles';
// import Footer from './components/Footer';
// import './App.scss';
// import About from './components/About';
// import ReaderSection from './components/Reader';
// import AuthorSection from './components/Author';
// import DownloadApp from './components/DownloadApp';
// import Genres from './components/Genres';
// import ContactUs from './components/ContactUs';
// import AnimatedBook from './components/AnimatedBook';

// function App() {
//   return (
//     <div className="app-container">
//       <Header />
//       <Hero />
//       {/* <AnimatedBook /> */}
//       <Genres />
//       {/* <Brands /> */}
//       <About />
//       <ReaderSection />
//       <AuthorSection />
//       {/* <Newsletter /> */}
//       {/* <ContactUs /> */}
//       <DownloadApp />
//       {/* <FeaturedBooks /> */}
//       <Articles />
//       <Footer />
//     </div>
//   );
// }

// export default App;











import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Genres from './components/Genres';
import About from './components/About';
import ReaderSection from './components/Reader';
import AuthorSection from './components/Author';
import DownloadApp from './components/DownloadApp';
import Articles from './components/LatestArticles';
import Footer from './components/Footer';
import NotFound from './components/NotFound'; // We will create this
import './App.scss';

// 1. Create a Home component for your single-page content
const Home = () => (
  <>
    <Hero />
    <Genres />
    <About />
    <ReaderSection />
    <AuthorSection />
    <DownloadApp />
    <Articles />
  </>
);

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <Routes>
          {/* Main Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* 2. The 404 Catch-all Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;