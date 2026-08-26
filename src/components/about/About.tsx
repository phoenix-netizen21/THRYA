"use client";

import React from 'react';
import styles from './About.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export const About = () => {
  const [headerRef, headerVisible] = useScrollReveal();
  const [contentRef, contentVisible] = useScrollReveal();

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
              THRYA stands as a vibrant platform for students to explore, nurture, and showcase their talents through traditional arts and cultural expression. We are dedicated to preserving the rich tapestry of our cultural heritage while empowering students with the freedom to creatively interpret and present these traditions.
              <br/><br/>
              By centering our movement around key pillars—Tradition (preserving cultural heritage), Talent (discovering and developing skills), Creativity (freedom of artistic expression), Collaboration (building together as a community), Confidence (growing through performance), and Expression (celebrating every art form)—THRYA fosters a supportive community built on discipline and cultural awareness, guiding members to discover their confidence and voice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
