import React from 'react';
import './App.css'; 

import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Activities from './components/Activities';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;