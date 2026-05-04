import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming & Databases",
      skills: ["C", "C++", "JAVA", "Python", "SQL"]
    },
    {
      title: "Software & Tools",
      skills: ["MS Word", "MS Excel", "PowerPoint", "Google Sheets & Docs", "Digital Communication Tools", "Basic Computer Knowledge"]
    },
    {
      title: "Soft Skills",
      skills: ["Time Management", "Verbal & Written Communication", "Team Collaboration"]
    }
  ];

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills & Expertise</h2>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '40px' }}>
        {skillCategories.map((category, index) => (
          <div key={index} style={{ textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '20px' }}>
              {category.title}
            </h3>
            <div className="skills-container">
              {category.skills.map((skill, idx) => (
                <div key={idx} className="skill-item">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;