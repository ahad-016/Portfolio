import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaLaptopCode } from 'react-icons/fa';
import profile5Img from '../assets/profile5.png';

export default function Education() {
  const educationData = [
    {
      id: 1,
      title: "Master of Computer Applications",
      institution: 'Integral University, Lucknow',
      year: '2025 - 2027',
      skills: 'Advanced Studies, Specialized Development, Leadership',
      icon: <FaGraduationCap />
    },
    {
      id: 2,
      title: 'Bachelor of Computer Applications',
      institution: 'Integral University, Lucknow',
      year: '2022 - 2025',
      skills: 'Web Development, Programming, Software Engineering',
      icon: <FaGraduationCap />
    },
    {
      id: 3,
      title: 'AI Automation & SaaS Development',
      institution: 'Self-Taught & Online Certifications',
      year: '2025',
      skills: 'AI Tools, n8n, Automation Workflows, SaaS Architecture',
      icon: <FaCertificate />
    }
  ];

  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Education & <span className="gradient-text">Learning Journey</span>
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          My academic background and continuous learning path in web development, AI, and digital solutions.
        </motion.p>

        <div className="education-layout">
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <motion.div
                className="timeline-item"
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="timeline-dot">{item.icon}</div>
                <div className="timeline-content glass-card-dark">
                  <h3>{item.title}</h3>
                  <h4>{item.institution}</h4>
                  <span className="timeline-year">{item.year}</span>
                  <p><strong>Skills:</strong> {item.skills}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              className="timeline-item currently-learning"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="timeline-dot"><FaLaptopCode /></div>
              <div className="timeline-content glass-card-dark">
                <h3>Currently Learning & Building</h3>
                <p>
                  Next JS, Angular JS, AI & GEN AI, PHP, Data Analysis, Communication, Cold Calling.
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            className="education-image-wrapper"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="education-image" style={{ background: 'var(--clr-primary)' }}>
              <img 
                src={profile5Img} 
                alt="Abdul Ahad Learning" 
                style={{
                  filter: 'grayscale(80%) contrast(1.2) brightness(0.9)',
                  opacity: 0.85,
                  transition: 'all 0.5s ease',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
                  display: 'block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.filter = 'grayscale(0%) contrast(1.1) brightness(1)';
                  e.currentTarget.style.opacity = '1';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.filter = 'grayscale(80%) contrast(1.2) brightness(0.9)';
                  e.currentTarget.style.opacity = '0.85';
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, var(--clr-primary) 0%, transparent 50%)',
                  pointerEvents: 'none'
                }}
              />
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'var(--grad-teal)',
                  mixBlendMode: 'overlay',
                  opacity: 0.2,
                  pointerEvents: 'none'
                }}
              />
              <div className="education-image-accent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
