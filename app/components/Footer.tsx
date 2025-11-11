'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

export default function Footer() {
  const pathname = usePathname();
  const isLegalPage = pathname === '/politica-privacidad' || pathname === '/terminos';
  
  return (
    <footer className={`${styles.footer} ${isLegalPage ? styles.legalPageFooter : ''}`}>
      <div className={styles.footerCard}>
        <div className={styles.footerContent}>
          {/* Top Section */}
          <div className={styles.footerTop}>
            <div className={styles.footerBrand}>
              <Image 
                src="/images/citalia.png" 
                alt="CitaLía Logo" 
                width={993} 
                height={323}
                className={styles.footerLogo}
                style={{ aspectRatio: '993/323' }}
              />
              <p className={styles.footerTagline}>
                Tu asistente médico inteligente, en el chat que ya usas todos los días.
              </p>
            </div>

            <div className={styles.footerLinks}>
              <div className={styles.footerLinkGroup}>
                <h3 className={styles.footerLinkTitle}>Legal</h3>
                <Link href="/politica-privacidad" className={styles.footerLink}>
                  Política de Privacidad
                </Link>
                <Link href="/terminos" className={styles.footerLink}>
                  Términos y Condiciones
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className={styles.footerBottom}>
            <div className={styles.footerCopyright}>
              <p className={styles.copyrightText}>
                © {new Date().getFullYear()} CitaLía. Todos los derechos reservados.
              </p>
              <p className={styles.developmentText}>
                Desarrollado por{' '}
                <a 
                  href="https://andromind.mx/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={styles.andromindLink}
                >
                  Andromind
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

