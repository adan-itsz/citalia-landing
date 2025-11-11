import React from 'react';
import styles from './page.module.css';

export default function PoliticaPrivacidad() {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.contentWrapper}>
        <h1 className={styles.mainTitle}>Política de Privacidad de CitaLía</h1>
        <p className={styles.lastUpdated}>Última actualización: 11 de noviembre de 2025</p>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>1. Responsable del tratamiento de datos personales</h2>
          <p className={styles.sectionText}>
            Andromind LLC, con domicilio fiscal en el Estado de Wyoming, Estados Unidos, es responsable del tratamiento y protección de los datos personales recabados a través de su marca CitaLía, una plataforma digital enfocada en la gestión automatizada de citas médicas.
          </p>
          <p className={styles.sectionText}>
            <strong>Contacto:</strong> <a href="mailto:privacy@andromind.ai" className={styles.link}>privacy@andromind.ai</a>
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>2. Información que recopilamos</h2>
          <p className={styles.sectionText}>
            Para ofrecer nuestros servicios de manera adecuada, CitaLía puede recopilar los siguientes tipos de información:
          </p>
          <ul className={styles.list}>
            <li><strong>Datos de identificación:</strong> nombre, correo electrónico, teléfono, especialidad médica o nombre del consultorio.</li>
            <li><strong>Datos de pacientes:</strong> nombre, número de teléfono y motivo de la cita (solo si el paciente lo incluye en su mensaje).</li>
            <li><strong>Datos técnicos:</strong> integración con Google Calendar, registros de interacción automatizada, mensajes de agenda, recordatorios y métricas de uso.</li>
          </ul>
          <p className={styles.sectionText}>
            CitaLía no solicita ni almacena historiales clínicos ni información médica sensible, salvo que el usuario la proporcione voluntariamente en la conversación.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>3. Uso de la información</h2>
          <p className={styles.sectionText}>
            La información recopilada se utiliza con las siguientes finalidades:
          </p>
          <ul className={styles.list}>
            <li>Agendar, confirmar, reagendar o cancelar citas médicas.</li>
            <li>Sincronizar horarios con Google Calendar.</li>
            <li>Enviar notificaciones y recordatorios automáticos.</li>
            <li>Brindar soporte técnico y mejorar la experiencia del usuario.</li>
            <li>Analizar el uso de la plataforma de manera anónima para optimizar el servicio.</li>
          </ul>
          <p className={styles.sectionText}>
            En ningún caso la información será usada con fines publicitarios sin consentimiento previo.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>4. Compartición y resguardo de datos</h2>
          <p className={styles.sectionText}>
            CitaLía no vende ni comparte información personal con terceros, excepto con proveedores tecnológicos indispensables para el funcionamiento del servicio, tales como:
          </p>
          <p className={styles.sectionText}>
            Google (Google Calendar / Firebase), Meta (WhatsApp Business API) u otros servicios de infraestructura.
          </p>
          <p className={styles.sectionText}>
            Los datos se almacenan en servidores seguros en Estados Unidos y/o la Unión Europea, bajo cifrado y cumplimiento de normativas internacionales equivalentes a GDPR y CCPA.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>5. Derechos del usuario</h2>
          <p className={styles.sectionText}>
            El usuario puede ejercer los siguientes derechos:
          </p>
          <ul className={styles.list}>
            <li>Acceder a la información personal registrada.</li>
            <li>Solicitar corrección o eliminación de sus datos.</li>
            <li>Retirar su consentimiento para el tratamiento de información.</li>
          </ul>
          <p className={styles.sectionText}>
            Para ejercer estos derechos, deberá enviar una solicitud a <a href="mailto:privacy@andromind.ai" className={styles.link}>privacy@andromind.ai</a> con el asunto: <strong>"Solicitud de privacidad – CitaLía"</strong>.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>6. Conservación de datos</h2>
          <p className={styles.sectionText}>
            Los datos personales se conservarán solo durante el tiempo necesario para cumplir las finalidades descritas y serán eliminados o anonimizados de forma segura una vez que dejen de ser necesarios.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>7. Cambios a esta política</h2>
          <p className={styles.sectionText}>
            Andromind LLC podrá modificar esta Política de Privacidad en cualquier momento. Las actualizaciones serán publicadas en <a href="https://www.citalia.ai/privacy" className={styles.link} target="_blank" rel="noopener noreferrer">www.citalia.ai/privacy</a> y entrarán en vigor en el momento de su publicación. El uso continuo del servicio implica la aceptación de los cambios.
          </p>
        </section>
      </div>
    </div>
  );
}

