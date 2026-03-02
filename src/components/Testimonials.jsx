import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { HiChevronLeft, HiChevronRight, HiStar } from 'react-icons/hi';

const testimonials = [
    {
        stars: 5,
        quote: 'Abdul Ahad helped us automate our lead system and increase conversions by 35%. His expertise in AI automation is truly outstanding.',
        author: 'Ahmed Khan',
        role: 'Business Owner, UAE',
    },
    {
        stars: 5,
        quote: '"Clear strategy, better targeting, and consistent optimization. A solid digital marketing partner."',
        author: 'Mohd Adnan',
        role: 'E-commerce Brand Owner',
    },
    {
        stars: 5,
        quote: 'Our Google Ads performance tripled after working with Abdul Ahad. His data-driven marketing approach is second to none.',
        author: 'Zaid Iqbal',
        role: 'Marketing Director, Startup',
    },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-80px' });

    const next = useCallback(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
    }, []);

    const prev = useCallback(() => {
        setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    }, []);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    return (
        <section className="testimonials section" id="reviews">
            <div className="container" ref={ref}>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    Client <span className="gradient-text">Reviews</span>
                </motion.h2>
                <motion.p
                    className="section-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    What my clients say about working with me
                </motion.p>

                <motion.div
                    className="testimonials-carousel"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="testimonial-track" style={{ transform: `translateX(-${current * 100}%)` }}>
                        {testimonials.map((t, i) => (
                            <div className="testimonial-card" key={i}>
                                <div className="testimonial-inner">
                                    <div className="testimonial-stars">
                                        {[...Array(t.stars)].map((_, j) => (
                                            <HiStar key={j} />
                                        ))}
                                    </div>
                                    <blockquote>"{t.quote}"</blockquote>
                                    <p className="testimonial-author">{t.author}</p>
                                    <p className="testimonial-role">{t.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="testimonial-nav">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                className={`testimonial-dot ${current === i ? 'active' : ''}`}
                                onClick={() => setCurrent(i)}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <div className="testimonial-arrows">
                        <button className="testimonial-arrow" onClick={prev} aria-label="Previous testimonial">
                            <HiChevronLeft />
                        </button>
                        <button className="testimonial-arrow" onClick={next} aria-label="Next testimonial">
                            <HiChevronRight />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
