"use client";

import React from 'react';
import styles from './Contact.module.css';
import { contactInfo } from '@/data/contact';
import { ContactInfo } from '@/types/contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  const cards = [
    { id: 'phone', icon: '☎', label: 'Phone', value: contactInfo.phone || 'Coming soon', link: contactInfo.phone ? `tel:${contactInfo.phone}` : undefined },
    { id: 'email', icon: '✉', label: 'Email', value: contactInfo.email || 'Coming soon', link: contactInfo.email ? `mailto:${contactInfo.email}` : undefined },
    { id: 'instagram', icon: '◈', label: 'Instagram', value: contactInfo.instagram || 'Coming soon', link: contactInfo.instagram ? `https://www.instagram.com/_.thrya._?igsi=MnhtendwM29lZm1q` : undefined },
    { id: 'location', icon: '◉', label: 'Location', value: contactInfo.location || 'Coming soon', link: contactInfo.location ? 'https://maps.app.goo.gl/tAGrio7KeaqaTB296' : undefined }
  ];

  return (
    <section 
      id="contact" 
      className={`${styles.contactSection} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>GET IN TOUCH</h2>
        
        <div className={styles.grid}>
          {cards.map((card) => (
            <div key={card.id} className={styles.card}>
              <div className={styles.icon}>{card.icon}</div>
              <h3 className={styles.label}>{card.label}</h3>
              {card.link ? (
                <a 
                  href={card.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={`${styles.value} ${styles.linkValue}`}
                >
                  {card.value}
                </a>
              ) : (
                <p className={`${styles.value} ${!contactInfo[card.id as keyof ContactInfo] ? styles.placeholder : ''}`}>
                  {card.value}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
