import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink } from 'react-icons/hi';


const projects = [
    {
        title: 'AI Resume Analyzer',
        tech: ['React', 'Node.js', 'OpenAI'],
        description: 'An intelligent resume analysis tool powered by AI that provides actionable feedback and scoring.',
        liveUrl: 'https://resumecheckai.lovable.app',
        color: 'rgba(20, 184, 166, 0.2)',
    },
    {
        title: 'ReplyForge AI',
        tech: ['React', 'AI', 'Tailwind'],
        description: 'An AI-powered reply generation tool that crafts professional and contextual responses instantly.',
        liveUrl: 'https://replyforgeai.lovable.app',
        color: 'rgba(139, 92, 246, 0.2)',
    },
    {
        title: 'Landing Site Builder',
        tech: ['n8n', 'Webhooks', 'CRM'],
        description: 'End-to-end business automation system connecting multiple platforms for seamless workflows.',
        liveUrl: 'https://app.landingsite.ai/website-preview?id=01575607-d411-4234-86a4-27312f236a61',
        color: 'rgba(249, 115, 22, 0.2)',
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="projects section" id="projects">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    A showcase of my recent work and technical capabilities
                </motion.p>

                <motion.div
                    className="projects-grid"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                >
                    {projects.map((project, i) => (
                        <motion.div className="project-card" key={i} variants={cardVariants}>
                            <div className="project-image">
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    background: `linear-gradient(135deg, ${project.color}, rgba(15, 23, 42, 0.8))`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '3rem',
                                    color: 'rgba(255,255,255,0.3)',
                                    fontFamily: 'var(--ff-heading)',
                                    fontWeight: 800,
                                    letterSpacing: '-0.03em',
                                }}>
                                    {project.title.split(' ')[0]}
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <div className="project-tech">
                                    {project.tech.map((t, j) => (
                                        <span key={j}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-links">
                                    <a href={project.liveUrl} className="project-link live" target="_blank" rel="noopener noreferrer">
                                        <HiExternalLink /> Live Demo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
