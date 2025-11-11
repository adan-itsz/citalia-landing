'use client';

import React from 'react';
import { MessageSquare, Calendar, Settings } from 'lucide-react';
import Logo from './Logo';
import styles from './HowItWorks.module.css';

interface Step {
  number: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: '1',
    icon: <MessageSquare style={{ width: '3rem', height: '3rem' }} />,
    title: 'El paciente envía un mensaje por WhatsApp',
    description: 'CitaLía responde al instante, verifica tu disponibilidad en Google Calendar y propone los horarios libres.'
  },
  {
    number: '2',
    icon: <Calendar style={{ width: '3rem', height: '3rem' }} />,
    title: 'El paciente confirma la hora',
    description: 'CitaLía agenda la cita en tu calendario y envía un recordatorio automático para evitar ausencias.'
  },
  {
    number: '3',
    icon: <Settings style={{ width: '3rem', height: '3rem' }} />,
    title: 'Tú tienes el control',
    description: 'Desde WhatsApp, puedes preguntarle a CitaLía "¿Qué consultas tengo hoy?" o incluso cancelar una cita. Ella se encargará de notificar al paciente y reagendar automáticamente según tu disponibilidad.'
  }
];

export default function HowItWorks() {
  return (
    <section className={styles.howItWorksSection}>
      <div className={styles.howItWorksCard}>
        {/* Contenido */}
        <div className={styles.contentContainer}>
          {/* Header */}
          <div className={styles.headerSection}>
            <h2 className={styles.mainTitle}>
              Tu agenda médica, en piloto automático
            </h2>
            <p className={styles.subtitle}>
              CitaLía conecta directamente con tu Google Calendar, coordinando todo el flujo de citas sin que tengas que mover un dedo.
            </p>
          </div>

          {/* Simple tag */}
          <div className={styles.simpleTag}>
            <span className={styles.simpleTagText}>Así de simple:</span>
          </div>

          {/* Steps */}
          <div className={styles.stepsContainer}>
            {steps.map((step, index) => (
              <div key={index} className={styles.stepCard}>
                {/* Number badge */}
                <div className={styles.stepNumber}>
                  {step.number}
                </div>

                {/* Icon */}
                <div className={styles.stepIconContainer}>
                  <div className={styles.stepIconWrapper}>
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className={styles.stepContent}>
                  <h3 className={styles.stepTitle}>
                    {step.title}
                  </h3>
                  <p className={styles.stepDescription}>
                    {step.description}
                  </p>
                </div>

                {/* Connector line (except last) */}
                {index < steps.length - 1 && (
                  <div className={styles.connectorLine} />
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.ctaContainer}>
            <button className={styles.ctaButton}>
              <Logo size={24} checkmarkColor="#FFFFFF" />
              <span>Quiero que CitaLía maneje mi agenda</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

