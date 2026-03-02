import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiPaperAirplane } from 'react-icons/hi';
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
            setFormData({ name: '', email: '', phone: '', service: '', message: '' });
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
                    Get In <span className="gradient-text">Touch</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Have a project in mind? Let's talk about it.
                </motion.p>

                <motion.form
                    className="contact-form"
                    ref={formRef}
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your full name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="+1 234 567 890"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="service">Service Interested In</label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                            >
                                <option value="">Select a service</option>
                                <option value="web-design">Website Design & Development</option>
                                <option value="ai-automation">AI Business Automation</option>
                                <option value="lead-gen">Lead Generation Systems</option>
                                <option value="marketing">Performance Marketing</option>
                                <option value="seo">SEO Optimization</option>
                                <option value="funnel">Sales Funnel Setup</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your project..."
                            required
                        />
                    </div>

                    <button type="submit" className="form-submit" disabled={sending}>
                        {sending ? 'Sending...' : (
                            <>
                                <HiPaperAirplane /> Send Message
                            </>
                        )}
                    </button>

                    {status.message && (
                        <div className={`form-message ${status.type}`}>
                            {status.message}
                        </div>
                    )}
                </motion.form>
            </div>
        </section>
    );
}
