import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Brands from './components/Brands';
import FeaturedBooks from './components/FeaturedBooks';
import Newsletter from './components/Newsletter';
import Articles from './components/LatestArticles';
import Footer from './components/Footer';
import './App.scss';
import About from './components/About';
import ReaderSection from './components/Reader';
import AuthorSection from './components/Author';
import DownloadApp from './components/DownloadApp';
import Genres from './components/Genres';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Hero />
      <Genres />
      {/* <Brands /> */}
      <About />
      <ReaderSection />
      <AuthorSection />
      {/* <Newsletter /> */}
      <ContactUs />
      <DownloadApp />
      {/* <FeaturedBooks /> */}
      <Articles />
      <Footer />
    </div>
  );
}

export default App;