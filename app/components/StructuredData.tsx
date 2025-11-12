export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://citalia.ai';
  
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "CitaLía",
    "url": siteUrl,
    "logo": `${siteUrl}/images/citalia.png`,
    "description": "Asistente médico inteligente que automatiza la gestión de citas por WhatsApp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+52-33-2254-1366",
      "contactType": "customer service",
      "availableLanguage": "Spanish"
    },
    "sameAs": []
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "CitaLía",
    "applicationCategory": "MedicalApplication",
    "operatingSystem": "Web, WhatsApp",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "MXN"
    },
    "description": "Asistente médico inteligente que agenda, confirma y organiza citas médicas por WhatsApp",
    "featureList": [
      "Agenda automática de citas",
      "Integración con Google Calendar",
      "Recordatorios automáticos",
      "Gestión por WhatsApp",
      "Sin necesidad de apps adicionales"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "CitaLía",
    "url": siteUrl,
    "description": "Tu asistente médico inteligente, en el chat que ya usas todos los días",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

