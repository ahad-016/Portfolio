import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineMail, HiDownload } from 'react-icons/hi';
import { FaLaptopCode, FaRobot, FaCloud, FaChartLine } from 'react-icons/fa';
import profileImg from '../assets/profile4.png';

export default function Hero() {
    return (
        <section className="hero" id="home">
            {/* Floating Orbs */}
            <div className="floating-orb orb-1" />
            <div className="floating-orb orb-2" />
            <div className="floating-orb orb-3" />

            <div className="container">
                {/* Left - Content */}
                <motion.div
                    className="hero-content"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
                        I Build <span className="gradient-text">Websites, AI Automations & SaaS Products</span> That Help Businesses Grow.
                    </h1>

                    <p className="hero-subtitle">
                        Hi, I’m Abdul Ahad — a freelancer and developer helping businesses improve their online presence with modern websites, smart automations, and digital solutions.
                    </p>

                    <div className="hero-buttons">
                        <a href="#contact" className="btn btn-primary">
                            <HiOutlineMail /> Hire Me
                        </a>
                        <a href="#projects" className="btn btn-outline">
                            <HiArrowRight /> View Projects
                        </a>
                        <a href="#cv" className="btn btn-outline-dark" style={{ border: '2px solid var(--clr-primary-lighter)', color: 'var(--clr-text)' }}>
                            <HiDownload /> Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Right - Profile Image */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    style={{ position: 'relative' }}
                >
                    <div className="hero-glow" />
                    
                    <div className="hero-image-ring">
                        <div className="hero-image-container">
                            <img src={profileImg} alt="Abdul Ahad - Web Developer & AI Specialist" onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop'; }} />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
