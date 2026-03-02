import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { HiCode, HiChip, HiTrendingUp, HiColorSwatch } from 'react-icons/hi';

const skillCategories = [
    {
        title: 'Web Development',
        icon: <HiCode />,
        iconClass: 'web',
        skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'Bootstrap', 'Tailwind CSS', 'REST APIs', 'Git & GitHub', 'Vite'],
    },
    {
        title: 'AI & Automation',
        icon: <HiChip />,
        iconClass: 'ai',
        skills: ['Zapier', 'n8n', 'Make.com', 'OpenAI API', 'Chatbot Automation', 'CRM Automation', 'Lead Flow Automation', 'Web Scraping', 'Supabase', 'Firebase'],
    },
    {
        title: 'Digital Marketing & SEO',
        icon: <HiTrendingUp />,
        iconClass: 'marketing',
        skills: ['Google Ads', 'Meta Ads', 'Conversion Tracking', 'Google Tag Manager', 'SEO (On-page + Technical)', 'Keyword Research', 'Funnel Building', 'Landing Page Optimization', 'Email Marketing Automation'],
    },
    {
        title: 'Design & Branding',
        icon: <HiColorSwatch />,
        iconClass: 'design',
        skills: ['Canva', 'Figma', 'UI/UX Design', 'Brand Strategy', 'Ad Creative Design'],
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
                    My <span className="gradient-text">Skills</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Technologies and tools I use to bring ideas to life
                </motion.p>

                <motion.div
                    className="skills-grid"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                >
                    {skillCategories.map((cat, i) => (
                        <motion.div className="skill-card" key={i} variants={cardVariants}>
                            <div className="skill-card-header">
                                <div className={`skill-icon ${cat.iconClass}`}>{cat.icon}</div>
                                <h3>{cat.title}</h3>
                            </div>
                            <div className="skill-tags">
                                {cat.skills.map((skill, j) => (
                                    <span className="skill-tag" key={j}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
