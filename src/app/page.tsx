'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import Hero from '@/components/home/Hero';
import { About } from '@/components/about/About';
import { Events } from '@/components/events/Events';
import CoreTeam from '@/components/team/CoreTeam';
import Gallery from '@/components/gallery/Gallery';
import Contact from '@/components/contact/Contact';
import { SpinWheel } from '@/components/navigation/SpinWheel';
import MobileNav from '@/components/navigation/MobileNav';
import Footer from '@/components/shared/Footer';
import DanceBackground from '@/components/shared/DanceBackground';

const SECTION_IDS = ['home', 'about', 'events', 'team', 'gallery', 'contact'];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      <DanceBackground activeSection={activeSection} />

      <SpinWheel activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <Events />
        <CoreTeam />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
