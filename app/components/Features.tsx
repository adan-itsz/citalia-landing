'use client';

import React from 'react';
import { MessageCircle, Zap, CalendarCheck } from 'lucide-react';
import styles from './Features.module.css';

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <MessageCircle style={{ width: '3rem', height: '3rem' }} />,
    title: 'El dolor: Llamadas que te interrumpen',
    description: 'Cada llamada para agendar es tiempo que no estás con un paciente. CitaLía responde automáticamente por WhatsApp, sin interrupciones. Tus pacientes escriben como siempre, pero ahora hay alguien que siempre responde.'
  },
  {
    icon: <Zap style={{ width: '3rem', height: '3rem' }} />,
    title: 'El costo: Horas que nunca recuperas',
    description: 'Si pierdes 5 horas semanales agendando, son 20 horas al mes. 240 horas al año. Eso es tiempo que podrías usar para más pacientes o para descansar. CitaLía agenda 24/7, incluso cuando duermes.'
  },
  {
    icon: <CalendarCheck style={{ width: '3rem', height: '3rem' }} />,
    title: 'El impacto: Errores que cuestan caro',
    description: 'Una doble agenda es un paciente molesto. Un paciente que olvida su cita es tiempo perdido. Cada error afecta tu reputación y tus ingresos. CitaLía elimina estos errores con recordatorios automáticos y sincronización perfecta.'
  }
];

export default function Features() {
  const titleText = "¿Cuántas horas pierdes cada semana agendando citas?";
  
  return (
    <section className={styles.featuresSection}>
      {/* Card con fondo blanco y bordes redondeados */}
      <div className={styles.featuresCard}>
        {/* Fondo animado - mismo estilo que Hero */}
        <div className={styles.animatedBackground}>
          {/* Gradiente base */}
          <div className={styles.gradientBase} />
          
          {/* Capa de gradiente animada */}
          <div className={styles.gradientPulse} />
          
          {/* Formas flotantes sutiles */}
          <div className={styles.floatingShape1} />
          <div className={styles.floatingShape2} />
        </div>

        {/* Contenido */}
        <div className={styles.contentContainer}>
          <div className={styles.headerSection}>
            {/* Título - Enfoque en el dolor */}
            <h2 className={styles.mainTitle}>
              <span className={styles.titleWrapper}>
                {titleText.split('').map((char, index) => (
                  <span 
                    key={index} 
                    className={styles.titleLetter}
                    style={{ '--index': index } as React.CSSProperties}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                ))}
              </span>
            </h2>
            <p className={styles.subtitle}>
              Llamadas que interrumpen tu consulta. Mensajes que se pierden. Pacientes que olvidan su cita. Cada error te cuesta tiempo, dinero y la confianza de tus pacientes.
            </p>
          </div>

          {/* Grid de características */}
          <div className={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureCard}>
                {/* Efecto de borde superior al hover */}
                <div className={styles.topBorder} />
                
                {/* Ícono con contenedor mejorado */}
                <div className={styles.iconContainer}>
                  <div className={styles.iconWrapper}>
                    {feature.icon}
                  </div>
                </div>
                
                {/* Título */}
                <h3 className={styles.featureTitle}>
                  {feature.title}
                </h3>
                
                {/* Descripción */}
                <p className={styles.featureDescription}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

