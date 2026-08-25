"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import styles from './MobileNav.module.css';
import Link from 'next/link';
import { NAV_ITEMS } from '@/data/navigation';

interface MobileNavProps {
  activeSection: string;
}

export default function MobileNav({ activeSection }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
        buttonRef.current?.focus();
      }
    };
    
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, closeMenu]);

  // Trap focus
  useEffect(() => {
    if (!isOpen) return;

    const focusableElements = menuRef.current?.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    ) as NodeListOf<HTMLElement>;
    
    if (!focusableElements || focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  // Radius for the fan out (in pixels)
  const radius = 115;
  
  return (
    <>
      <div 
        className={`${styles.backdrop} ${isOpen ? styles.backdropOpen : ''}`} 
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className={styles.container} ref={menuRef}>
        <div 
          className={styles.menu} 
          role="menu" 
          aria-hidden={!isOpen}
        >
          {NAV_ITEMS.map((item, index) => {
            // Calculate radial fan-out from top (90deg) to left (180deg)
            const angleDeg = 90 + (index * (90 / Math.max(1, NAV_ITEMS.length - 1)));
            const angleRad = (angleDeg * Math.PI) / 180;
            
            // Math for x/y translation (bottom-right origin)
            const x = Math.cos(angleRad) * radius;
            const y = -Math.sin(angleRad) * radius;

            const isActive = activeSection === item.id;
            
            const style = isOpen ? {
              transform: `translate(${x}px, ${y}px) scale(1)`,
              transitionDelay: `${index * 50}ms`
            } : {
              transform: 'translate(0px, 0px) scale(0.5)',
              transitionDelay: '0ms'
            };

            return (
              <Link
                key={item.id}
                href={item.href}
                className={`${styles.menuItem} ${isOpen ? styles.menuItemOpen : ''} ${isActive ? styles.menuItemActive : ''}`}
                role="menuitem"
                tabIndex={isOpen ? 0 : -1}
                onClick={closeMenu}
                style={style}
                aria-label={item.label}
              >
                <span className={styles.icon}>
                  {item.icon || '⬡'}
                </span>
                <span className={styles.label}>{item.label}</span>
              </Link>
            );
          })}
        </div>

        <button
          ref={buttonRef}
          className={`${styles.toggleButton} ${isOpen ? styles.toggleButtonOpen : ''}`}
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          aria-controls="mobile-menu"
        >
          <div className={styles.hamburgerIcon}>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
            <span className={styles.line}></span>
          </div>
        </button>
      </div>
    </>
  );
}
