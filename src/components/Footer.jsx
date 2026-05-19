import { FaInstagram, FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

export default function Footer() {
    return (
        <footer className="footer" style={{ background: 'var(--clr-primary)', borderTop: '2px solid var(--clr-accent-teal)', paddingTop: '4rem', paddingBottom: '2rem' }}>
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

                {/* Brand */}
                <div>
                    <a href="#home" className="nav-logo" style={{ fontSize: '2rem', display: 'inline-block', marginBottom: '1rem' }}>
                        Abdul<span>Ahad</span>
                    </a>
                    <p style={{ color: 'var(--clr-text-light)', lineHeight: 1.6, marginBottom: '1.5rem', maxWidth: '300px' }}>
                        Websites, AI Automations & Digital Solutions for Growing Businesses.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <a href="https://instagram.com/ahad_mansoori16/" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', color: 'var(--clr-text-white)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-white)'}><FaInstagram /></a>
                        <a href="https://linkedin.com/in/ahad016" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', color: 'var(--clr-text-white)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-white)'}><FaLinkedinIn /></a>
                        <a href="https://github.com/ahad-016" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', color: 'var(--clr-text-white)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-white)'}><FaGithub /></a>
                        <a href="https://wa.me/917394872337?text=Hi%20Abdul,%20I%20want%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.25rem', color: 'var(--clr-text-white)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-white)'}><FaWhatsapp /></a>
                        <a href="mailto:automate@ahadlabs.space?subject=Hello%20Abdul%20Ahad" style={{ fontSize: '1.25rem', color: 'var(--clr-text-white)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-white)'}><HiOutlineMail /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: 'var(--clr-text-white)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><a href="#home" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>Home</a></li>
                        <li><a href="#about" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>About Me</a></li>
                        <li><a href="#projects" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>Projects</a></li>
                        <li><a href="#education" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>Education</a></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 style={{ color: 'var(--clr-text-white)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>Services</h4>
                    <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        <li><a href="#services" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>Website Development</a></li>
                        <li><a href="#services" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>AI Automation</a></li>
                        <li><a href="#services" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>SaaS Products</a></li>
                        <li><a href="#services" style={{ color: 'var(--clr-text-light)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--clr-accent-teal)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--clr-text-light)'}>Digital Marketing</a></li>
                    </ul>
                </div>

            </div>

            <div className="container" style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid var(--clr-glass-border)' }}>
                <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>
                    © 2026 AbdulAhad. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
