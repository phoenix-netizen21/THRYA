import React from 'react';
import Image from 'next/image';
import styles from './Events.module.css';
import { ClubEvent } from '@/types/event';

interface EventCardProps {
  event: ClubEvent;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className={styles.eventCard}>
      {event.posterUrl && (
        <div className={styles.posterContainer}>
          <Image 
            src={event.posterUrl} 
            alt={`Poster for ${event.title}`}
            fill
            className={styles.posterImage}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className={styles.cardContent}>
        <h3 className={styles.eventTitle}>{event.title}</h3>
        <div className={styles.eventMeta}>
          <span className={styles.eventDate}>
            {new Date(event.date).toLocaleDateString('en-US', { 
              month: 'short', day: 'numeric', year: 'numeric' 
            })}
          </span>
          <span className={styles.eventVenue}>{event.venue}</span>
        </div>
        <p className={styles.eventDescription}>{event.description}</p>
      </div>
    </div>
  );
};
