import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import profileImg from '../assets/profile.png';

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
                    <div className="about-image">
                        <img src={profileImg} alt="Abdul Ahad" />
                    </div>
                    <div className="about-image-accent" />
                </motion.div>

                {/* Right - Text */}
                <motion.div
                    className="about-content"
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.7, delay: 0.2 }}
                >
                    <h2>
                        Hi, I'm <span className="highlight">Abdul Ahad</span>
                    </h2>
                    <p className="about-role">
                        A Web Designer, AI Automation Specialist &amp; Performance Marketer.
                    </p>
                    <p>
                        I help businesses automate operations, generate leads, and build
                        high-converting websites using modern tech stacks and data-driven
                        strategies. With a passion for clean design and cutting-edge technology,
                        I transform ideas into powerful digital experiences.
                    </p>
                    <p>
                        From crafting pixel-perfect interfaces to setting up complex AI-powered
                        workflows, I bring a unique blend of creativity and technical expertise
                        to every project.
                    </p>

                    <div className="about-stats">
                        <div className="about-stat">
                            <h3>15</h3>
                            <p>Projects Done</p>
                        </div>
                        <div className="about-stat">
                            <h3>6</h3>
                            <p>Happy Clients</p>
                        </div>
                        <div className="about-stat">
                            <h3>1+</h3>
                            <p>Years Experience</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
