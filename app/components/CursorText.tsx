'use client';

import React, { useEffect, useState } from 'react';
import styles from './CursorText.module.css';

export default function CursorText() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar si es desktop
    const checkIsDesktop = () => {
      const isDesktopDevice = window.innerWidth >= 1024 && !('ontouchstart' in window);
      setIsDesktop(isDesktopDevice);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);

    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkIsDesktop);
    };
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <div
      className={`${styles.cursorText} ${isVisible ? styles.visible : ''}`}
      style={{
        left: `${mousePosition.x}px`,
        top: `${mousePosition.y}px`,
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        className={styles.cursorSvg}
      >
        <defs>
          <path
            id="circle"
            d="M 60, 60 m -50, 0 a 50,50 0 1,1 100,0 a 50,50 0 1,1 -100,0"
          />
        </defs>
        <text className={styles.cursorTextPath}>
          <textPath href="#circle" startOffset="0%">
            CitaLía • CitaLía • CitaLía • CitaLía • CitaLía • CitaLía •
          </textPath>
        </text>
      </svg>
    </div>
  );
}

