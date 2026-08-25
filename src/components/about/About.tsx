"use client";

import React from 'react';
import styles from './About.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const pillars = [
  { title: 'Tradition', description: 'Preserving cultural heritage', icon: '🏛️' },
  { title: 'Talent', description: 'Discovering and developing skills', icon: '✨' },
  { title: 'Creativity', description: 'Freedom of artistic expression', icon: '🎨' },
  { title: 'Collaboration', description: 'Building together as a community', icon: '🤝' },
  { title: 'Confidence', description: 'Growing through performance', icon: '🌟' },
  { title: 'Expression', description: 'Celebrating every art form', icon: '🎭' },
];

export const About = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();
  const [pillarsRef, pillarsVisible] = useScrollReveal();

  return (
    <section id="about" className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.splitLayout}>
          <div 
            ref={headerRef as React.RefObject<HTMLDivElement>}
            className={`${styles.headerArea} ${headerVisible ? styles.visible : ''}`}
          >
            <h2 className={styles.heading}>ABOUT<br/>THRYA</h2>
            <div className={styles.accentLine}></div>
          </div>
          
          <div 
            ref={contentRef as React.RefObject<HTMLDivElement>}
            className={`${styles.contentArea} ${contentVisible ? styles.visible : ''}`}
          >
            <p className={styles.description}>
              THRYA stands as a vibrant platform for students to explore, nurture, and showcase their talents through traditional arts and cultural expression. We are dedicated to preserving the rich tapestry of our cultural heritage while empowering students with the freedom to creatively interpret and present these traditions. By uniting individuals with diverse artistic passions, THRYA fosters a supportive community built on collaboration, discipline, and cultural awareness, guiding members to discover their confidence and voice.
            </p>
          </div>
        </div>

        <div 
          ref={pillarsRef as React.RefObject<HTMLDivElement>}
          className={`${styles.pillarsGrid} ${pillarsVisible ? styles.visible : ''}`}
        >
          {pillars.map((pillar, index) => (
            <div key={index} className={styles.pillarCard}>
              <div className={styles.pillarIcon}>{pillar.icon}</div>
              <h3 className={styles.pillarTitle}>{pillar.title}</h3>
              <p className={styles.pillarDesc}>{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
