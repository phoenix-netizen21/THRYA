"use client";

import React from 'react';
import styles from './Events.module.css';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { upcomingEvents, pastEvents } from '@/data/events';
import { EventCard } from './EventCard';

export const Events = () => {
  const [upcomingRef, upcomingVisible] = useScrollReveal();
  const [pastRef, pastVisible] = useScrollReveal();

  return (
    <section id="events" className={styles.eventsSection}>
      <div className={styles.container}>
        
        <div 
          ref={upcomingRef as React.RefObject<HTMLDivElement>}
          className={`${styles.subSection} ${upcomingVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.sectionHeading}>UPCOMING EVENTS</h2>
          
          {upcomingEvents && upcomingEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {upcomingEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>✦</div>
              <h3 className={styles.emptyTitle}>No upcoming events yet.</h3>
              <p className={styles.emptySubtitle}>
                Stay tuned as we prepare our next spectacular showcase. Follow our announcements for updates.
              </p>
            </div>
          )}
        </div>

        <div 
          ref={pastRef as React.RefObject<HTMLDivElement>}
          className={`${styles.subSection} ${pastVisible ? styles.visible : ''}`}
        >
          <h2 className={styles.sectionHeading}>PAST EVENTS</h2>
          
          {pastEvents && pastEvents.length > 0 ? (
            <div className={styles.eventsGrid}>
              {pastEvents.map(event => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <div className={styles.emptyIcon}>◎</div>
              <h3 className={styles.emptyTitle}>Our event archive is coming soon.</h3>
              <p className={styles.emptySubtitle}>
                We are currently gathering memories from our previous performances to share with you.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
