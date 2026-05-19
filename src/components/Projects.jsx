import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiExternalLink, HiOutlineInformationCircle, HiEye } from 'react-icons/hi';

const projects = [
    {
        title: 'Website Roast SaaS',
        tech: ['React', 'Tailwind', 'AI'],
        description: 'A tool that analyzes websites and gives roast-style feedback with practical improvement suggestions.',
        liveUrl: '#',
    },
    {
        title: 'ReplyForge AI',
        tech: ['React', 'AI', 'Tailwind'],
        description: 'AI-powered review reply generation tool for businesses.',
        liveUrl: 'https://replyforgeai.lovable.app',
    },
    {
        title: 'Fundraising Web App',
        tech: ['React', 'Redux', 'Tailwind CSS', 'Vite'],
        description: 'A fundraising web application built using modern frontend technologies.',
        liveUrl: '#',
    },
    {
        title: 'Business Portfolio Website',
        tech: ['React', 'Framer Motion', 'CSS'],
        description: 'A modern website for businesses, freelancers, and agencies.',
        liveUrl: '#',
    },
    {
        title: 'AI Automation Workflow',
        tech: ['n8n', 'OpenAI', 'Webhooks'],
        description: 'Automation system for business tasks using AI and workflow tools.',
        liveUrl: '#',
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
                    className="section-title"
                    style={{ fontSize: 'var(--fs-body)', color: 'var(--clr-text-light)', marginBottom: '3.5rem' }}
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
                        <motion.div className="project-card glass-card-dark" key={i} variants={cardVariants} style={{ background: 'var(--clr-glass)', border: '1px solid var(--clr-glass-border)', padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                            <div className="project-image" style={{ height: '200px', background: 'var(--clr-primary-lighter)', position: 'relative', borderBottom: '2px solid var(--clr-accent-teal)' }}>
                                <div style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '2rem',
                                    color: 'rgba(255,255,255,0.2)',
                                    fontFamily: 'var(--ff-heading)',
                                    fontWeight: 800,
                                    background: 'var(--grad-hero)'
                                }}>
                                    {project.title}
                                </div>
                            </div>
                            <div className="project-info" style={{ padding: '1.5rem', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--clr-text-white)' }}>{project.title}</h3>
                                <p style={{ color: 'var(--clr-text-light)', marginBottom: '1rem', fontSize: '0.9rem', flexGrow: 1 }}>{project.description}</p>
                                <div className="project-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.map((t, j) => (
                                        <span key={j} style={{ background: 'rgba(229, 9, 20, 0.15)', color: 'var(--clr-accent-teal)', padding: '0.25rem 0.75rem', borderRadius: '50px', fontSize: '0.75rem', fontWeight: 600 }}>{t}</span>
                                    ))}
                                </div>
                                <div className="project-links" style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                                    <a href={project.liveUrl} className="btn btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }} target="_blank" rel="noopener noreferrer">
                                        <HiExternalLink /> Live Demo
                                    </a>

                                    <a href="#" className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.75rem' }}>
                                        <HiOutlineInformationCircle /> Case Study
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
