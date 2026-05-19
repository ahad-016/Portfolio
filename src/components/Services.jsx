import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    HiOutlineGlobeAlt,
    HiOutlineLightningBolt,
    HiOutlineCloudUpload,
    HiOutlineSpeakerphone,
    HiOutlineBriefcase,
    HiOutlineChatAlt2,
    HiOutlineUserGroup,
    HiArrowRight,
} from 'react-icons/hi';
import { FaLaptopCode } from 'react-icons/fa';

const services = [
    {
        icon: <HiOutlineGlobeAlt />,
        title: 'Website Development',
        description: 'Build modern, responsive, and fast websites for businesses and personal brands.',
    },
    {
        icon: <FaLaptopCode />,
        title: 'Landing Page Design',
        description: 'High-converting landing pages for products, services, and campaigns.',
    },
    {
        icon: <HiOutlineLightningBolt />,
        title: 'AI Automation Setup',
        description: 'Automate business tasks using AI tools and workflow automation platforms.',
    },
    {
        icon: <HiOutlineCloudUpload />,
        title: 'SaaS Product Development',
        description: 'Build SaaS tools, dashboards, and web applications.',
    },
    {
        icon: <HiOutlineSpeakerphone />,
        title: 'Digital Marketing Services',
        description: 'Help businesses improve online visibility, leads, and growth.',
    },
    {
        icon: <HiOutlineBriefcase />,
        title: 'Business Portfolio Websites',
        description: 'Professional websites for agencies, freelancers, and local businesses.',
    },
    {
        icon: <HiOutlineChatAlt2 />,
        title: 'Review Reply Automation',
        description: 'AI-powered systems to generate replies for customer reviews.',
    },
    {
        icon: <HiOutlineUserGroup />,
        title: 'Lead Generation Systems',
        description: 'Systems and workflows to help businesses collect and manage leads.',
    },
];

const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Services() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    return (
        <section className="services section" id="services">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Services I <span className="gradient-text">Provide</span>
                </motion.h2>
                <motion.p
                    className="section-title"
                    style={{ fontSize: 'var(--fs-body)', color: 'var(--clr-text-light)', marginBottom: '3.5rem' }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Premium services to help your business grow and thrive in the digital world
                </motion.p>

                <motion.div
                    className="services-grid"
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? 'show' : 'hidden'}
                >
                    {services.map((service, i) => (
                        <motion.div className="service-card glass-card-dark" key={i} variants={cardVariants} style={{ background: 'var(--clr-glass)', border: '1px solid var(--clr-glass-border)', display: 'flex', flexDirection: 'column' }}>
                            <div className="service-icon" style={{ fontSize: '2.5rem', color: 'var(--clr-accent-teal)', marginBottom: '1rem' }}>{service.icon}</div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', color: 'var(--clr-text-white)' }}>{service.title}</h3>
                            <p style={{ color: 'var(--clr-text-light)', marginBottom: '1.5rem', flexGrow: 1 }}>{service.description}</p>
                            <a href="#contact" className="btn btn-outline" style={{ alignSelf: 'flex-start', padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                                Get This Service <HiArrowRight />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
