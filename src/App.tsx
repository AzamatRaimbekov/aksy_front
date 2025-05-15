import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Benefits from './components/Benefits';
import Categories from './components/Categories';
import WhyChooseUs from './components/WhyChooseUs';
import GetStarted from './components/GetStarted';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <Router>
      <LanguageProvider>
        <div className="min-h-screen bg-white flex flex-col">
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <main>
                  <Hero />
                  <About />
                  <Benefits />
                  <Categories />
                  <WhyChooseUs />
                  <GetStarted />
                  <FAQ />
                </main>
              }
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}

export default App;