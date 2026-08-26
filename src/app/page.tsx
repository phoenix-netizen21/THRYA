'use client';

import { useActiveSection } from '@/hooks/useActiveSection';
import Hero from '@/components/home/Hero';
import { About } from '@/components/about/About';
import DanceSequence from '@/components/home/DanceSequence';
import { Events } from '@/components/events/Events';
import CoreTeam from '@/components/team/CoreTeam';
import Gallery from '@/components/gallery/Gallery';
import Contact from '@/components/contact/Contact';
import { SpinWheel } from '@/components/navigation/SpinWheel';
import MobileNav from '@/components/navigation/MobileNav';
import Footer from '@/components/shared/Footer';
import Aurora from '@/components/shared/Aurora';

const SECTION_IDS = ['home', 'about', 'events', 'team', 'gallery', 'contact'];

// Static color reference to prevent re-creation on render loops
const AURORA_COLORS = ["#ffd700", "#F6B93B", "#f70000"];

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <>
      {/* Globally fixed Aurora WebGL shader background */}
      <div 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: -10, 
          pointerEvents: 'none', 
          backgroundColor: '#0d0101' 
        }}
        aria-hidden="true"
      >
        <Aurora
          colorStops={AURORA_COLORS} // Refers to the static array above
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      <SpinWheel activeSection={activeSection} />
      <MobileNav activeSection={activeSection} />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <About />
        <DanceSequence />
        <Events />
        <CoreTeam />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
