import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiDownload, HiExternalLink } from 'react-icons/hi';

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
                    My <span className="gradient-text">Resume</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Download or view my professional resume
                </motion.p>

                <motion.div
                    className="cv-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <p>
                        I am a Web Designer, AI Automation Specialist, and Performance Marketer with
                        expertise in building high-converting websites, intelligent automation workflows,
                        and data-driven marketing campaigns. I combine modern tech stacks with creative
                        design to deliver exceptional digital experiences.
                    </p>
                    <div className="cv-buttons">
                        <a href="/cv/resume.pdf" className="btn btn-primary" download="Abdul_Ahad_CV.pdf">
                            <HiDownload /> Download My CV
                        </a>
                        <a href="/cv/resume.pdf" className="btn btn-outline" target="_blank" rel="noopener noreferrer">
                            <HiExternalLink /> View CV Online
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
