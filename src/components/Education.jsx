import React from 'react';

const Education = () => {
  const timeline = [
    {
      role: "Bachelor of Computer Application (BCA)",
      organization: "Kavayitri Bahinabai Chaudhari North Maharashtra University (KBCNMU),Jalgaon",
      date: "2022 - 2025",
      details: "CGPA – 9.21 (Previous Year)"
    },
    {
      role: "HSC (12th Standard)",
      organization: "Maharashtra State Board - Nashik",
      date: "2020 - 2021",
      details: "Percentage – 82.50%"
    },
    {
      role: "SSC (10th Standard)",
      organization: "Maharashtra State Board - Nashik",
      date: "2018 - 2019",
      details: "Percentage – 91.40%"
    }
  ];

  return (
    <section id="education" className="section bg-light">
      <h2 className="section-title">Education</h2>
      <div className="timeline-container">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <h3 className="timeline-role">{item.role}</h3>
            <h4 className="timeline-org">{item.organization}</h4>
            <span className="timeline-date">{item.date}</span>
            <p className="timeline-details">{item.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;