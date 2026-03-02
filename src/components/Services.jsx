import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
    HiOutlineGlobeAlt,
    HiOutlineLightningBolt,
    HiOutlineUserGroup,
    HiOutlineChartBar,
    HiOutlineSearchCircle,
    HiOutlineFilter,
    HiArrowRight,
} from 'react-icons/hi';

const services = [
    {
        icon: <HiOutlineGlobeAlt />,
        title: 'Website Design & Development',
        description: 'Custom, responsive websites built with modern tech stacks that convert visitors into customers. From landing pages to full-scale web apps.',
    },
    {
        icon: <HiOutlineLightningBolt />,
        title: 'AI Business Automation',
        description: 'Streamline your operations with intelligent automation using tools like n8n, Zapier, and OpenAI. Save time and reduce manual work.',
    },
    {
        icon: <HiOutlineUserGroup />,
        title: 'Lead Generation Systems',
        description: 'Build automated lead capture and nurturing systems that work 24/7. CRM integration, chatbots, and smart lead scoring.',
    },
    {
        icon: <HiOutlineChartBar />,
        title: 'Performance Marketing',
        description: 'Data-driven ad campaigns on Google & Meta that maximize ROI. Conversion tracking, A/B testing, and continuous optimization.',
    },
    {
        icon: <HiOutlineSearchCircle />,
        title: 'SEO Optimization',
        description: 'Boost your organic rankings with comprehensive on-page, technical SEO, keyword research, and content strategy.',
    },
    {
        icon: <HiOutlineFilter />,
        title: 'Sales Funnel Setup',
        description: 'End-to-end funnel design and implementation. From awareness to conversion, every touchpoint optimized for maximum results.',
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
                    What I <span className="gradient-text">Offer</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
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
                        <motion.div className="service-card" key={i} variants={cardVariants}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#contact" className="service-link">

                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
