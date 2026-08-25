'use client';

import React, { useEffect, useState } from 'react';
import styles from './SpinWheel.module.css';
import { NAV_ITEMS } from '@/data/navigation';
import OptionWheel from './OptionWheel';

interface SpinWheelProps {
  activeSection: string;
}

export const SpinWheel: React.FC<SpinWheelProps> = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  // Find active index based on activeSection prop
  const activeIndex = Math.max(
    0,
    NAV_ITEMS.findIndex((item) => item.id === activeSection)
  );

  const handleItemClick = (index: number) => {
    const targetItem = NAV_ITEMS[index];
    if (targetItem) {
      const targetId = targetItem.href.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false); // Close the menu panel
      }
    }
  };

  const navLabels = NAV_ITEMS.map((item) => item.label);

  return (
    <div className={`${styles.navContainer} ${isOpen ? styles.open : ''}`}>
      {/* Menu Trigger Button */}
      <button 
        className={styles.menuTrigger} 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="desktop-wheel-menu"
        aria-label="Toggle navigation menu"
      >
        <span className={styles.triggerText}>{isOpen ? 'CLOSE' : 'MENU'}</span>
        <div className={styles.triggerIconContainer}>
          <span className={styles.triggerIcon}>{isOpen ? '✕' : '⬡'}</span>
        </div>
      </button>

      {/* Backdrop overlay when open */}
      <div 
        className={styles.backdrop} 
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Radial Wheel Panel */}
      <nav 
        id="desktop-wheel-menu"
        className={styles.wheelPanel}
        aria-label="Main navigation"
        aria-hidden={!isOpen}
      >
        {/* Render OptionWheel inside the panel when mounted */}
        <div className={styles.wheelWrapper}>
          <OptionWheel
            items={navLabels}
            selected={activeIndex}
            textColor="#8a8a8a"
            activeColor="#F59E0B" // THRYA Gold brand color
            side="right"
            fontSize={1.8}
            spacing={1.8}
            curve={1.2}
            tilt={12}
            blur={1.5}
            fade={0.3}
            smoothing={250}
            inset={60}
            loop={false}
            draggable
            onItemClick={handleItemClick}
          />
        </div>
      </nav>
    </div>
  );
};
export default SpinWheel;
