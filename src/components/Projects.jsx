import React from 'react';

const Projects = () => {
  const myProjects = [
    {
      title: "Smart Irrigation & Animal Alert",
      description: "Automated irrigation system based on soil moisture. Includes an animal intrusion alert mechanism using sensors to prevent crop damage.",
      tech: ["IoT", "Hardware", "Sensors"],
      github: "https://github.com/Kalyanivalaskar77",
      live: ""
    },
   
    {
      title: "Grocify-Store",
      description: "A full-stack online grocery platform featuring a seamless shopping cart experience and robust backend data management.",
      tech: ["React", "PHP", "MySQL"],
      github: "https://github.com/Kalyanivalaskar77/grocify-store",
      live: "https://grocify-store-mu.vercel.app/login"
    }
  ];

  return (
    <section id="projects" className="section bg-light">
      <h2 className="section-title">Featured Projects</h2>
      <div className="project-grid">
        {myProjects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <div className="tech-stack">
              {project.tech.map((techItem, idx) => (
                <span key={idx} className="tech-badge">{techItem}</span>
              ))}
            </div>
            <p className="project-desc">{project.description}</p>
            <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
              {project.live && (
                <a href={project.live} className="project-link" target="_blank" rel="noreferrer" style={{ color: '#2563eb' }}>
                  Live Demo 🌍
                </a>
              )}
              {project.github && (
                <a href={project.github} className="project-link" target="_blank" rel="noreferrer">
                  GitHub ➔
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;