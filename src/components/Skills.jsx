import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiChip, HiTrendingUp, HiDatabase } from 'react-icons/hi';

const skillCategories = [
    {
        title: 'Frontend',
        icon: <HiCode />,
        iconClass: 'web',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'React Router', 'Tailwind CSS', 'Vite'],
    },
    {
        title: 'Backend / Tools',
        icon: <HiDatabase />,
        iconClass: 'design',
        skills: ['Express JS', 'SaaS Development', 'Node JS', 'MySQL', 'Supabase', 'Python', 'Firebase', 'Python', 'MongoDB'],
    },
    {
        title: 'AI Automation',
        icon: <HiChip />,
        iconClass: 'ai',
        skills: ['AI Tools', 'n8n / Automation', 'Zapier', 'Make', 'Vapi ai', 'Claude'],
    },
    {
        title: 'Business Skills',
        icon: <HiTrendingUp />,
        iconClass: 'marketing',
        skills: ['Digital Marketing', 'Cold Calling', 'Client Communication', 'Lead Generation', 'Meta Ads', 'Google ads', 'Google Analytics', 'Marketing Strategies'],
    },
];

const containerVariants = {
    hidden: {},
    show: {
        transition: { staggerChildren: 0.15 },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="skills section" id="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Skills & <span className="gradient-text">Tools</span>
                </motion.h2>
                <motion.p
                    className="section-title"
                    style={{ fontSize: 'var(--fs-body)', color: 'rgba(241, 245, 249, 0.6)', marginBottom: '3.5rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Technologies and skills I use to bring ideas to life
                </motion.p>

                <motion.div
                    className="skills-grid"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                >
                    {skillCategories.map((cat, i) => (
                        <motion.div className="skill-card glass-card-dark" key={i} variants={cardVariants} style={{ background: 'var(--clr-glass)', border: '1px solid var(--clr-glass-border)' }}>
                            <div className="skill-card-header">
                                <div className={`skill-icon ${cat.iconClass}`}>{cat.icon}</div>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span className="skill-tag" key={j} style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--clr-glass-border)' }}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
