import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const socials = [
    { icon: <FaInstagram />, label: 'Instagram', url: 'https://instagram.com/ahad_mansoori16/' },
    { icon: <FaLinkedinIn />, label: 'LinkedIn', url: 'https://linkedin.com/in/ahad016' },
    { icon: <FaGithub />, label: 'GitHub', url: 'https://github.com/ahad-016' },
    { icon: <FaWhatsapp />, label: 'WhatsApp', url: 'https://wa.me/917394872337?text=Hi%20Abdul,%20I%20want%20to%20discuss%20a%20project' },
    { icon: <HiOutlineMail />, label: 'Email', url: 'mailto:ahad47057@gmail.com?subject=Hello%20Abdul Ahad' },
];

export default function SocialLinks() {
    return (
        <section className="social-section">
            <div className="container">
                <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>
                    Let's <span className="gradient-text">Connect</span>
                </h2>
                <div className="social-icons">
                    {socials.map((s, i) => (
                        <motion.a
                            key={i}
                            href={s.url}
                            className="social-icon"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={s.label}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                        >
                            {s.icon}
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
