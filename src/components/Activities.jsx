import React from 'react';

const Activities = () => {
  const activitiesList = [
    {
      title: "Inter District Youth Exchange Program",
      role: "Selected Participant",
      date: "February 2025",
      description: "Represented the district in a youth exchange initiative. Actively engaged in community building, cultural exchange, and leadership development programs.",
      category: "Leadership"
    },
    {
      title: "Aavhan-2024 State Level NSS Camp",
      role: "NSS Volunteer",
      date: "November 2024",
      description: "Completed a rigorous state-level National Service Scheme camp. Contributed to community service, disaster management training, and teamwork-oriented tasks.",
      category: "Community Service"
    },
    {
      title: "Inter College IT Parv",
      role: "1st Runner Up - Quiz Competition",
      date: "September 2024",
      description: "Secured the 1st Runner Up position in a highly competitive inter-college IT quiz, showcasing strong foundational knowledge in computer science and current tech trends.",
      category: "Academic Achievement"
    }
  ];

  return (
    <section id="activities" className="section">
      <h2 className="section-title">Extracurricular & Achievements</h2>
      <div className="project-grid">
        {activitiesList.map((item, index) => (
          <div key={index} className="project-card" style={{ borderTop: '4px solid #2563eb' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', flexWrap: 'wrap', gap: '10px' }}>
              <span className="tech-badge">{item.category}</span>
              <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: '600' }}>{item.date}</span>
            </div>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{item.title}</h3>
            <h4 style={{ fontSize: '1rem', color: '#2563eb', fontWeight: '500', marginBottom: '15px' }}>{item.role}</h4>
            <p className="project-desc" style={{ marginBottom: '0' }}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;