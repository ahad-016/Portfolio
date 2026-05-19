import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiPaperAirplane, HiOutlineMail, HiOutlineLocationMarker, HiOutlinePhone } from 'react-icons/hi';
import { FaWhatsapp, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_bot8r9v';
const EMAILJS_TEMPLATE_ID = 'template_xkwk2ao';
const EMAILJS_PUBLIC_KEY = 'Bsz4DZAHazdEI33XY';

export default function Contact() {
    const formRef = useRef(null);
    const sectionRef = useRef(null);
    const inView = useInView(sectionRef, { once: true, margin: '-80px' });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        budget: '',
        message: '',
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
        setStatus({ type: '', message: '' });

        try {
            await emailjs.sendForm(
                EMAILJS_SERVICE_ID,
                EMAILJS_TEMPLATE_ID,
                formRef.current,
                EMAILJS_PUBLIC_KEY
            );
            setStatus({ type: 'success', message: '✅ Message sent successfully! I\'ll get back to you soon.' });
            setFormData({ name: '', email: '', phone: '', service: '', budget: '', message: '' });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setStatus({ type: 'error', message: `❌ Failed to send message: ${error?.text || 'Please try again.'}` });
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="contact section" id="contact">
            <div className="container" ref={sectionRef}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Let’s Work <span className="gradient-text">Together</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Have a project in mind? Contact me for websites, AI automations, SaaS tools, or digital services.
                </motion.p>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                    {/* Left side: Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--clr-text-white)' }}>Contact Information</h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--clr-accent-teal)', padding: '0.8rem', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '50%' }}>
                                    <HiOutlineMail />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--clr-text-white)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Email</h4>
                                    <p style={{ color: 'var(--clr-text-light)' }}>automate@ahadlabs.space</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--clr-accent-teal)', padding: '0.8rem', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '50%' }}>
                                    <FaWhatsapp />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--clr-text-white)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Phone / WhatsApp</h4>
                                    <p style={{ color: 'var(--clr-text-light)' }}>+91 7394872337</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                                <div style={{ fontSize: '1.5rem', color: 'var(--clr-accent-teal)', padding: '0.8rem', background: 'rgba(229, 9, 20, 0.1)', borderRadius: '50%' }}>
                                    <HiOutlineLocationMarker />
                                </div>
                                <div>
                                    <h4 style={{ color: 'var(--clr-text-white)', fontSize: '1.1rem', marginBottom: '0.2rem' }}>Location</h4>
                                    <p style={{ color: 'var(--clr-text-light)' }}>Remote / Worldwide</p>
                                </div>
                            </div>
                        </div>


                    </motion.div>

                    {/* Right side: Form */}
                    <motion.form
                        className="contact-form glass-card-dark"
                        ref={formRef}
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{ background: 'var(--clr-glass)', border: '1px solid var(--clr-glass-border)', padding: '2.5rem' }}
                    >
                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Full Name</label>
                                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" required
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Email</label>
                                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'} />
                            </div>
                        </div>

                        <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                            <div className="form-group">
                                <label htmlFor="phone" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Phone</label>
                                <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 234 567 890"
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Service Needed</label>
                                <select id="service" name="service" value={formData.service} onChange={handleChange} required
                                    style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none' }}
                                    onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'}>
                                    <option value="">Select a service</option>
                                    <option value="Website Development">Website Development</option>
                                    <option value="Landing Page">Landing Page</option>
                                    <option value="AI Automation">AI Automation</option>
                                    <option value="SaaS Product">SaaS Product</option>
                                    <option value="Digital Marketing">Digital Marketing</option>
                                    <option value="Business Website">Business Website</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                            <label htmlFor="budget" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Budget</label>
                            <select id="budget" name="budget" value={formData.budget} onChange={handleChange} required
                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none' }}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'}>
                                <option value="">Select your budget</option>
                                <option value="< $1k">&lt; $1,000</option>
                                <option value="$1k - $5k">$1,000 - $5,000</option>
                                <option value="$5k - $10k">$5,000 - $10,000</option>
                                <option value="> $10k">&gt; $10,000</option>
                            </select>
                        </div>

                        <div className="form-group" style={{ marginBottom: '2rem' }}>
                            <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--clr-text-light)', fontSize: '0.9rem' }}>Message</label>
                            <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Tell me about your project..." required rows="4"
                                style={{ width: '100%', padding: '0.8rem 1rem', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--clr-primary-lighter)', borderRadius: 'var(--radius-sm)', color: 'var(--clr-text-white)', outline: 'none', resize: 'vertical' }}
                                onFocus={(e) => e.currentTarget.style.borderColor = 'var(--clr-accent-teal)'} onBlur={(e) => e.currentTarget.style.borderColor = 'var(--clr-primary-lighter)'} />
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={sending}>
                            {sending ? 'Sending...' : (
                                <>
                                    <HiPaperAirplane style={{ transform: 'rotate(90deg)' }} /> Send Message
                                </>
                            )}
                        </button>

                        {status.message && (
                            <div className={`form-message ${status.type}`} style={{ marginTop: '1rem', padding: '1rem', borderRadius: 'var(--radius-sm)', background: status.type === 'success' ? 'rgba(20, 184, 166, 0.1)' : 'rgba(239, 68, 68, 0.1)', color: status.type === 'success' ? '#14B8A6' : '#EF4444' }}>
                                {status.message}
                            </div>
                        )}
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
