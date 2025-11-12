import React from 'react';
import { metadata } from './metadata';
import styles from './page.module.css';

export { metadata };

export default function Terminos() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Términos y Condiciones de Uso de CitaLía</h1>
        <p className={styles.lastUpdated}>Última actualización: 11 de noviembre de 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Aceptación de los términos</h2>
          <p className={styles.sectionText}>
            El uso de CitaLía, marca perteneciente a Andromind LLC, implica la aceptación plena y sin reservas de estos Términos y Condiciones. Si el usuario no está de acuerdo, deberá abstenerse de utilizar el servicio.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Descripción del servicio</h2>
          <p className={styles.sectionText}>
            CitaLía es una plataforma digital que automatiza la gestión de citas médicas mediante WhatsApp, integrándose con Google Calendar para facilitar la comunicación y coordinación entre pacientes, doctores y consultorios.
          </p>
          <p className={styles.sectionText}>
            CitaLía no sustituye la atención médica ni proporciona diagnósticos, tratamientos o recomendaciones de salud.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso permitido</h2>
          <p className={styles.sectionText}>
            El usuario se compromete a:
          </p>
          <ul className={styles.list}>
            <li>Utilizar el servicio conforme a la ley y a estos términos.</li>
            <li>No ingresar datos falsos, inapropiados o confidenciales no solicitados.</li>
            <li>Proteger la información y privacidad de sus pacientes.</li>
            <li>No utilizar CitaLía para fines ilícitos, difamatorios o fuera de su propósito médico-administrativo.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Limitación de responsabilidad</h2>
          <p className={styles.sectionText}>
            Andromind LLC no se hace responsable por:
          </p>
          <ul className={styles.list}>
            <li>Fallas técnicas o interrupciones de servicios externos (WhatsApp, Google, u otros).</li>
            <li>Uso incorrecto del servicio por parte del usuario.</li>
            <li>Consecuencias médicas o administrativas ajenas al funcionamiento de la plataforma.</li>
          </ul>
          <p className={styles.sectionText}>
            El servicio se ofrece "tal cual" (as is), sin garantías expresas o implícitas de disponibilidad ininterrumpida.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Propiedad intelectual</h2>
          <p className={styles.sectionText}>
            Todos los elementos de la plataforma CitaLía — software, diseño, logotipo, contenido, documentación y nombre comercial — son propiedad exclusiva de Andromind LLC. Queda estrictamente prohibida su reproducción, distribución o modificación sin autorización escrita.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Suspensión o terminación del servicio</h2>
          <p className={styles.sectionText}>
            Andromind LLC se reserva el derecho de suspender o cancelar temporal o permanentemente una cuenta en caso de:
          </p>
          <ul className={styles.list}>
            <li>Uso indebido del servicio.</li>
            <li>Incumplimiento de estos términos.</li>
            <li>Actividades sospechosas o fraudulentas.</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Legislación aplicable</h2>
          <p className={styles.sectionText}>
            Estos términos se rigen por las leyes del Estado de Wyoming, Estados Unidos. Cualquier disputa o controversia será resuelta ante los tribunales competentes del Estado de Wyoming.
          </p>
        </section>
      </div>
    </div>
  );
}

