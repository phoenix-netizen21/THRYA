"use client";

import React from 'react';
import styles from './Contact.module.css';
import { contactInfo } from '@/data/contact';
import { ContactInfo } from '@/types/contact';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Contact() {
  const [sectionRef, isVisible] = useScrollReveal();

  const cards = [
    { id: 'phone', icon: '☎', label: 'Phone', value: contactInfo.phone || 'Coming soon' },
    { id: 'email', icon: '✉', label: 'Email', value: contactInfo.email || 'Coming soon' },
    { id: 'instagram', icon: '◈', label: 'Instagram', value: contactInfo.instagram || 'Coming soon' },
    { id: 'location', icon: '◉', label: 'Location', value: contactInfo.location || 'Coming soon' }
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
              <p className={`${styles.value} ${!contactInfo[card.id as keyof ContactInfo] ? styles.placeholder : ''}`}>
                {card.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
