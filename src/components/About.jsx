import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.png';
import { FaCheckCircle } from 'react-icons/fa';

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="about section" id="about">
            <div className="container" ref={ref}>
                {/* Left - Image */}
                <motion.div
                    className="about-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7 }}
                >
                    <div className="about-image" style={{ border: '2px solid var(--clr-accent-teal)', boxShadow: 'var(--shadow-glow-teal)' }}>
                        <img src={profileImg} alt="Abdul Ahad" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'; }} />
                    </div>
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2 style={{ borderBottom: '2px solid var(--clr-accent-teal)', display: 'inline-block', paddingBottom: '0.5rem', marginBottom: '1.5rem' }}>
                        About <span className="highlight">Me</span>
                    </h2>
                    <p style={{ color: 'var(--clr-text-white)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                        I’m <strong>Abdul Ahad</strong>, the founder of AhadLabs. I help businesses, startups, and freelancers build modern websites, automation systems, and digital products. I’m focused on creating clean, fast, and business-focused solutions that help clients get more leads, save time, and grow online.
                    </p>
                    
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--clr-text-light)' }}>
                            <FaCheckCircle style={{ color: 'var(--clr-accent-teal)' }} /> I build responsive websites and landing pages
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--clr-text-light)' }}>
                            <FaCheckCircle style={{ color: 'var(--clr-accent-teal)' }} /> I create AI automation workflows
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--clr-text-light)' }}>
                            <FaCheckCircle style={{ color: 'var(--clr-accent-teal)' }} /> I work on SaaS and business tools
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--clr-text-light)' }}>
                            <FaCheckCircle style={{ color: 'var(--clr-accent-teal)' }} /> I help brands improve their digital presence
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem', color: 'var(--clr-text-light)' }}>
                            <FaCheckCircle style={{ color: 'var(--clr-accent-teal)' }} /> I’m continuously learning and improving my development skills
                        </li>
                    </ul>

                    <div className="about-stats">
                        <div className="about-stat glass-card-dark">
                            <h3 style={{ background: 'var(--grad-teal)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>15+</h3>
                            <p style={{ color: 'var(--clr-text-light)' }}>Projects Built</p>
                        </div>
                        <div className="about-stat glass-card-dark">
                            <h3 style={{ background: 'var(--grad-teal)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>8+</h3>
                            <p style={{ color: 'var(--clr-text-light)' }}>Services Offered</p>
                        </div>
                        <div className="about-stat glass-card-dark">
                            <h3 style={{ background: 'var(--grad-teal)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>12+</h3>
                            <p style={{ color: 'var(--clr-text-light)' }}>Technologies Learned</p>
                        </div>
                        <div className="about-stat glass-card-dark">
                            <h3 style={{ background: 'var(--grad-teal)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>100%</h3>
                            <p style={{ color: 'var(--clr-text-light)' }}>Client-Focused Solutions</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
