import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import FeaturedBooks from './components/FeaturedBooks';
import Newsletter from './components/Newsletter';
import Articles from './components/Articles';
import Footer from './components/Footer';
import './App.scss';
import About from './components/About';
import ReaderSection from './components/Reader';
import AuthorSection from './components/Author';
import DownloadApp from './components/DownloadApp';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      {/* <Brands /> */}
      <About />
      <ReaderSection />
      <AuthorSection />
      <DownloadApp />
      {/* <FeaturedBooks />
      <Newsletter />
      <Articles /> */}
      <Footer />
    </div>
  );
}

export default App;