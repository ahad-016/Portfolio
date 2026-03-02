import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import CV from './components/CV';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Loader from './components/Loader';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Loader />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Testimonials />
        <CV />
        <SocialLinks />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
