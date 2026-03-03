import { motion } from 'framer-motion';
import { HiArrowRight, HiOutlineMail } from 'react-icons/hi';
import profileImg from '../assets/profile.png';

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
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        🚀 Available for freelance work
                    </motion.div>

                    <h1 className="hero-title">
                        The Future of{' '}
                        <span className="gradient-text">Digital Growth</span>
                    </h1>

                    <p className="hero-subtitle">
                        I Develop Websites, Build AI Automations &amp; Scale Brands with Data-Driven Marketing.
                    </p>

                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <HiArrowRight /> View My Work
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <HiOutlineMail /> Let's Work Together
                        </a>
                    </div>
                </motion.div>

                {/* Right - Profile Image */}
                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <div className="hero-glow" />
                    <div className="hero-image-ring">
                        <div className="hero-image-container">
                            <img src={profileImg} alt="Abdul Ahad - web developer & AI Specialist" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
