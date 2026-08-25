"use client";

import React from 'react';
import Image from 'next/image';
import styles from './Gallery.module.css';
import { galleryItems } from '@/data/gallery';
import { GalleryItem } from '@/types/gallery';
import { useScrollReveal } from '@/hooks/useScrollReveal';

export default function Gallery() {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id="gallery" 
      className={`${styles.gallerySection} ${isVisible ? styles.visible : ''}`}
      ref={sectionRef as React.RefObject<HTMLElement>}
    >
      <div className={styles.container}>
        <h2 className={styles.title}>GALLERY</h2>
        
        {galleryItems.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.spotlight}></div>
            <div className={styles.icon}>◉</div>
            <h3 className={styles.emptyTitle}>THE STAGE IS WAITING</h3>
            <p className={styles.emptySubtitle}>Our collection of performances and moments will appear here soon.</p>
          </div>
        ) : (
          <div className={styles.grid}>
            {galleryItems.map((item: GalleryItem) => (
              <div key={item.id} className={styles.gridItem}>
                <div className={styles.mediaContainer}>
                  {item.type === 'video' ? (
                    <div className={styles.videoPlaceholder}>Video</div>
                  ) : (
                    <Image
                      src={item.url}
                      alt={item.caption || 'Gallery image'}
                      fill
                      loading="lazy"
                      className={styles.image}
                    />
                  )}
                </div>
                <div className={styles.overlay}>
                  <p className={styles.caption}>{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
