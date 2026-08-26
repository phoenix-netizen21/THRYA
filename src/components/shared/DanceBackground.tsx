'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Aurora from './Aurora';
import styles from './DanceBackground.module.css';

interface DanceBackgroundProps {
  activeSection: string;
}

// Static color reference for Aurora background
const AURORA_COLORS = ["#ffd700", "#F6B93B", "#f70000"];

const SECTIONS = ['home', 'about', 'events', 'team', 'gallery', 'contact'];

export const DanceBackground: React.FC<DanceBackgroundProps> = ({ activeSection }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div className={styles.backgroundContainer} />;
  }

  return (
    <div className={styles.backgroundContainer}>
      {/* 1. Base Layer: WebGL Aurora shader background */}
      <div className={styles.baseLayer} aria-hidden="true">
        <Aurora
          colorStops={AURORA_COLORS}
          blend={0.5}
          amplitude={1.0}
          speed={1}
        />
      </div>

      {/* 2. Drifting Smoke/Atmospheric layers */}
      <div className={`${styles.smokeLayer} ${styles.smoke1}`} aria-hidden="true" />
      <div className={`${styles.smokeLayer} ${styles.smoke2}`} aria-hidden="true" />

      {/* 3. Dancer Silhouette layers */}
      <div className={`${styles.dancerWrapper} ${styles[activeSection] || ''}`} aria-hidden="true">
        {SECTIONS.map((sec) => {
          const isActive = activeSection === sec;
          return (
            <div
              key={sec}
              className={`${styles.dancerLayer} ${isActive ? styles.active : ''}`}
            >
              <Image
                src={`/background-poses/${sec}-pose.png`}
                alt={`Bharatanatyam silhouette background pose for ${sec}`}
                fill
                priority
                sizes="(max-width: 768px) 80vw, 50vw"
                quality={85}
              />
            </div>
          );
        })}
      </div>

      {/* 4. Text Readability Gradient Overlay */}
      <div className={styles.overlayLayer} aria-hidden="true" />
    </div>
  );
};

export default DanceBackground;
