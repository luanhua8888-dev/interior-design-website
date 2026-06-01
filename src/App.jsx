import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import BeforeAfter from './components/BeforeAfter';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPage from './components/AdminPage';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
      setCurrentHash(window.location.hash);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const isAdminRoute =
    currentPath === '/adminn' ||
    currentPath === '/adminn/' ||
    currentHash === '#/adminn' ||
    currentHash === '#/adminn/';

  if (isAdminRoute) {
    return <AdminPage />;
  }

  // Else, render Landing Page
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-luxury-dark text-gray-200 antialiased selection:bg-accent-gold selection:text-luxury-dark relative min-h-screen">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-accent-gold origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <Navbar />

      {/* Hero Slider Section */}
      <Hero />

      {/* About Us Section */}
      <About />

      {/* Services Grid Section */}
      <Services />

      {/* Portfolio Gallery Section */}
      <Portfolio />

      {/* Before / After Slider Comparison */}
      <BeforeAfter />

      {/* Contact Form Section */}
      <Contact />

      {/* Footer Details */}
      <Footer />
    </div>
  );
}

export default App;
