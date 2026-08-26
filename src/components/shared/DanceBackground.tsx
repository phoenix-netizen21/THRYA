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

export const DanceBackground: React.FC<DanceBackgroundProps> = ({ activeSection }) => {
  const [poseA, setPoseA] = useState<string>('');
  const [poseB, setPoseB] = useState<string>('');
  const [activeLayer, setActiveLayer] = useState<'A' | 'B'>('A');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Update layout when section changes to crossfade between layers
  useEffect(() => {
    if (!activeSection) return;
    const newPosePath = `/background-poses/${activeSection}-pose.png`;

    if (activeLayer === 'A') {
      setPoseB(newPosePath);
      setActiveLayer('B');
    } else {
      setPoseA(newPosePath);
      setActiveLayer('A');
    }
  }, [activeSection]);

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
        {/* Layer A */}
        {poseA && (
          <div className={`${styles.dancerLayer} ${activeLayer === 'A' ? styles.active : ''}`}>
            <Image
              src={poseA}
              alt="Bharatanatyam silhouette background pose A"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>
        )}

        {/* Layer B */}
        {poseB && (
          <div className={`${styles.dancerLayer} ${activeLayer === 'B' ? styles.active : ''}`}>
            <Image
              src={poseB}
              alt="Bharatanatyam silhouette background pose B"
              fill
              priority
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>
        )}
      </div>

      {/* 4. Text Readability Gradient Overlay */}
      <div className={styles.overlayLayer} aria-hidden="true" />
    </div>
  );
};

export default DanceBackground;
