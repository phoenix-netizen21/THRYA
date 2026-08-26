'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './DanceSequence.module.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const images = [
  '/images/dance-sequence/pose-1.jpg',
  '/images/dance-sequence/pose-2.jpg',
  '/images/dance-sequence/pose-3.jpg',
  '/images/dance-sequence/pose-4.jpg',
  '/images/dance-sequence/pose-5.jpg',
  '/images/dance-sequence/pose-6.jpg',
];

const captions = [
  {
    title: "Aramandi",
    subtitle: "Tradition & Foundation",
    description: "The signature half-sitting posture of Bharatanatyam, representing cultural grounding and centering. It forms the foundational canvas from which all geometric movements emerge."
  },
  {
    title: "Mudra",
    subtitle: "Talent & Expression",
    description: "Hands moving into traditional gestures (mudras), translating subtle emotions (Bhava) into a visual language. Each finger position carries a rich narrative of its own."
  },
  {
    title: "Rhythm",
    subtitle: "Grace & Precision",
    description: "The convergence of complex footwork and posture, maintaining absolute balance. The dancer maintains perfect posture while executing intricate beat patterns."
  },
  {
    title: "Nataraja",
    subtitle: "The Cosmic Dance",
    description: "Striking the classic pose of Lord Shiva in his cosmic dance form, expressing the rhythm of creation, preservation, and energy that fuels the universe."
  },
  {
    title: "Abhinaya",
    subtitle: "Surrender & Emotion",
    description: "Expressing deep devotion and dramatic storytelling (Abhinaya) through facial expressions, eyes, and body language, establishing a direct emotional link with the audience."
  },
  {
    title: "Triumph",
    subtitle: "Completion & Celebration",
    description: "The final grand stance, celebrating the culmination of artistic expression and triumph. It represents the ultimate union of tradition, talent, and execution."
  }
];

export default function DanceSequence() {
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const captionRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const trigger = triggerRef.current;
    const container = containerRef.current;
    if (!trigger || !container) return;

    // Reset arrays to match current sizes
    imageRefs.current = imageRefs.current.slice(0, images.length);
    captionRefs.current = captionRefs.current.slice(0, captions.length);

    const ctx = gsap.context(() => {
      // Setup the master ScrollTrigger timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: trigger,
          start: 'top top',
          end: '+=300%', // Scroll distance equal to 3 screens
          scrub: 0.5, // Smooth scrubbing
          pin: container, // Pin the viewport container
          anticipatePin: 1,
        },
      });

      // Initialize the first frame
      gsap.set(imageRefs.current[0], { opacity: 1 });
      gsap.set(captionRefs.current[0], { opacity: 1, y: 0 });

      // Create sequence timeline
      for (let i = 1; i < images.length; i++) {
        const prevImg = imageRefs.current[i - 1];
        const curImg = imageRefs.current[i];
        const prevCap = captionRefs.current[i - 1];
        const curCap = captionRefs.current[i];

        const label = `frame-${i}`;

        // Cross-fade images
        tl.to(prevImg, { opacity: 0, duration: 1 }, label);
        tl.to(curImg, { opacity: 1, duration: 1 }, label);

        // Slide and fade text captions
        tl.to(prevCap, { opacity: 0, y: -20, duration: 0.8 }, label);
        tl.fromTo(
          curCap,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          `${label}+=0.2` // Slight stagger for natural pacing
        );
      }
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={triggerRef} className={styles.section}>
      <div ref={containerRef} className={styles.container}>
        {/* Left Side: Caption Text Stack */}
        <div className={styles.textPanel}>
          {captions.map((cap, idx) => (
            <div
              key={idx}
              ref={(el) => {
                captionRefs.current[idx] = el;
              }}
              className={styles.captionWrapper}
              style={{
                opacity: idx === 0 ? 1 : 0,
                transform: idx === 0 ? 'translateY(0px)' : 'translateY(20px)',
              }}
            >
              <span className={styles.subtitle}>{cap.subtitle}</span>
              <h2 className={styles.title}>{cap.title}</h2>
              <p className={styles.description}>{cap.description}</p>
            </div>
          ))}
        </div>

        {/* Right Side: Image Animation Stack */}
        <div className={styles.imagePanel}>
          <div className={styles.imageStack}>
            {images.map((src, idx) => (
              <div
                key={idx}
                ref={(el) => {
                  imageRefs.current[idx] = el;
                }}
                className={styles.imageWrapper}
                style={{ opacity: idx === 0 ? 1 : 0 }}
              >
                <Image
                  src={src}
                  alt={`Classical Dance Pose - ${captions[idx].title}`}
                  fill
                  priority={idx === 0}
                  className={styles.danceImage}
                  sizes="(max-width: 900px) 100vw, 600px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
