import React from 'react';

const Hero = () => {
  return (
    <section className="hero-section">
      <h2>Transforming Ideas into <br /><span className="gradient-text">Digital Reality</span></h2>
      <p>
        Hi, I'm Kalyani Valaskar. An enthusiastic BCA student specializing in full-stack web development. 
        With an eye for detail and a passion for problem-solving, I build seamless, modern applications.
      </p>
      
      {/* Button Container */}
      <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <a href="#projects" className="primary-btn">Explore My Work</a>
        
        {/* New Download Resume Button */}
        {/* The 'download' attribute forces the browser to download the file instead of just opening it */}
        <a href="/Kalyani_Resume.pdf" download="Kalyani_Valaskar_Resume.pdf" className="secondary-btn">
          Download Resume ↓
        </a>
      </div>
      
    </section>
  );
};

export default Hero;