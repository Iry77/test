import { MotionConfig } from 'framer-motion';
import { SECTION_IDS } from '@/types/portfolio';
import { useScrollSpy } from '@/hooks/useScrollSpy';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { MobileNav } from '@/components/layout/MobileNav';
import { SideNav } from '@/components/layout/SideNav';
import { SkipLink } from '@/components/layout/SkipLink';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Education } from '@/components/sections/Education';
import { Experience } from '@/components/sections/Experience';
import { Hero } from '@/components/sections/Hero';
import { Interests } from '@/components/sections/Interests';
import { Projects } from '@/components/sections/Projects';
import { Skills } from '@/components/sections/Skills';

export default function App() {
  const active = useScrollSpy(SECTION_IDS);

  return (
    // `reducedMotion="user"` drops transform/layout animations when the OS asks for reduced motion.
    <MotionConfig reducedMotion="user">
      <SkipLink />
      <Header />
      <SideNav active={active} />
      <MobileNav active={active} />
      <main id="main" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Interests />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}
