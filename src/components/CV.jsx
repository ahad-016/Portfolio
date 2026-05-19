import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload, HiExternalLink, HiOutlineMail } from 'react-icons/hi';
import cvPdf from '../assets/Abdul_Ahad_Webdevlopment.pdf';

export default function CV() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="cv-section section" id="cv">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    My CV / <span className="gradient-text">Resume</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A quick overview of my experience, skills, and services
                </motion.p>

                <motion.div
                    className="cv-card glass-card-dark"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{ border: '2px solid var(--clr-accent-teal)', background: 'var(--clr-glass)', position: 'relative', overflow: 'hidden' }}
                >
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--clr-accent-teal)' }}></div>
                    <div style={{ paddingLeft: '1rem' }}>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--clr-text-white)' }}>Professional Summary</h3>
                        <p style={{ color: 'var(--clr-text-light)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                            Results-driven web developer and AI Automation Specialist. Passionate about building high-converting websites and smart automation workflows to help businesses scale and save time. 
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                            <div>
                                <h4 style={{ color: 'var(--clr-text-white)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Key Skills</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--clr-text-light)' }}>
                                    <li style={{ marginBottom: '0.3rem' }}>• React & Modern Frontend</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• n8n & Automation Tools</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• UI/UX & Responsive Design</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• SaaS Development</li>
                                </ul>
                            </div>
                            <div>
                                <h4 style={{ color: 'var(--clr-text-white)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Top Services</h4>
                                <ul style={{ listStyle: 'none', padding: 0, margin: 0, color: 'var(--clr-text-light)' }}>
                                    <li style={{ marginBottom: '0.3rem' }}>• Web Development</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• Landing Page Design</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• AI Automation Setup</li>
                                    <li style={{ marginBottom: '0.3rem' }}>• Digital Marketing</li>
                                </ul>
                            </div>
                        </div>

                        <div style={{ marginBottom: '2rem' }}>
                            <h4 style={{ color: 'var(--clr-text-white)', marginBottom: '0.5rem', fontSize: '1.1rem' }}>Experience Highlights</h4>
                            <p style={{ color: 'var(--clr-text-light)', marginBottom: '0.5rem' }}>• Delivered custom AI automation systems for SMBs</p>
                            <p style={{ color: 'var(--clr-text-light)', marginBottom: '0.5rem' }}>• Designed and developed multiple landing pages resulting in higher conversions</p>
                            <p style={{ color: 'var(--clr-text-light)' }}>• Built robust internal tools using React and modern APIs</p>
                        </div>
                    </div>

                    <div className="cv-buttons" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginTop: '1rem', paddingLeft: '1rem' }}>
                        <a href={cvPdf} className="btn btn-primary" download="Abdul_Ahad_Webdevlopment.pdf">
                            <HiDownload /> Download CV
                        </a>
                        <a href={cvPdf} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <HiExternalLink /> View Resume
                        </a>
                        <a href="#contact" className="btn btn-outline-dark" style={{ border: '2px solid var(--clr-primary-lighter)', color: 'var(--clr-text)' }}>
                            <HiOutlineMail /> Hire Me
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
