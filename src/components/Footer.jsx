import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="portfolio-footer">
      <h2>Let's Build Something Great.</h2>
      <p>I am highly adaptable, quick to learn new technologies, and ready to add value to your organization.</p>
      
      <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px', flexWrap: 'wrap' }}>
        
        <a href="https://www.linkedin.com/in/kalyani-valaskar-7bb7b637b" target="_blank" rel="noreferrer" className="primary-btn" style={{ background: '#0a66c2', color: 'white', border: 'none' }}>
          LinkedIn
        </a>
        <a href="https://github.com/Kalyanivalaskar77" target="_blank" rel="noreferrer" className="primary-btn" style={{ background: '#333333', color: 'white', border: 'none' }}>
          GitHub
        </a>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '25px', fontSize: '0.95rem', color: 'var(--text-muted)' }}>
        <p style={{ marginBottom: '10px' }}>
          <strong>Email:</strong> kalyanivalaskar260905@gmail.com &nbsp;|&nbsp; <strong>Phone:</strong> +91 8459602815
        </p>
        <p>&copy; {new Date().getFullYear()} Kalyani Valaskar. Designed with React.</p>
      </div>
    </footer>
  );
};

export default Footer;