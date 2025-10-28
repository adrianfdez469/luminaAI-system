'use client';

import { useLocale } from 'next-intl';

export default function StructuredData() {
  const locale = useLocale();
  const isSpanish = locale === 'es';

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LuminaAI Solutions',
    alternateName: 'LuminaAI Solutions',
    url: 'https://luminaaisolutions.co.uk',
    logo: 'https://luminaaisolutions.co.uk/android-chrome-512x512.png',
    description: isSpanish
      ? 'Soluciones de automatización inteligente con IA para negocios modernos. Automatización de correos, chatbots, WhatsApp Business y más.'
      : 'Intelligent AI automation solutions for modern businesses. Email automation, chatbots, WhatsApp Business and more.',
    foundingDate: '2024',
    founders: [
      {
        '@type': 'Person',
        name: 'Adrián Fernández',
        jobTitle: 'Founder & Lead Developer',
      },
      {
        '@type': 'Person',
        name: 'Liset Hernández',
        jobTitle: 'Co-Founder & Business Director',
      },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 156962, PO Box 7169',
      addressLocality: 'Poole',
      postalCode: 'BH15 9EL',
      addressCountry: 'GB',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'luminaai300@gmail.com',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'Spanish'],
    },
    sameAs: [
      'https://www.facebook.com/profile.php?id=61582584809466',
      'https://www.instagram.com/lumina_ai_uk',
      'https://www.linkedin.com/company/luminaai-solutions/',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'LuminaAI Solutions',
    url: 'https://luminaaisolutions.co.uk',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://luminaaisolutions.co.uk/{locale}?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'es'],
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: isSpanish ? 'Automatización de Negocios con IA' : 'AI Business Automation',
    provider: {
      '@type': 'Organization',
      name: 'LuminaAI Solutions',
    },
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isSpanish ? 'Servicios de Automatización' : 'Automation Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isSpanish ? 'Automatización de Correos' : 'Email Automation',
            description: isSpanish
              ? 'Responde automáticamente a consultas, haz seguimiento a leads y organiza tu bandeja de entrada.'
              : 'Automatically reply to enquiries, follow up leads, and organise your inbox.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isSpanish ? 'Chatbots de IA' : 'AI Chatbots',
            description: isSpanish
              ? 'Asistentes inteligentes que responden FAQs 24/7, recopilan leads y guían visitantes.'
              : 'Smart assistants that answer FAQs 24/7, collect leads, and guide visitors.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isSpanish ? 'Sistemas de Reservas y Citas' : 'Booking & Appointment Systems',
            description: isSpanish
              ? 'Permite que los clientes reserven, reagenden o cancelen citas sin confirmaciones manuales.'
              : 'Let clients book, reschedule, or cancel appointments with no manual confirmations needed.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isSpanish ? 'Automatización de WhatsApp Business' : 'WhatsApp Business Automation',
            description: isSpanish
              ? 'Automatiza interacciones con clientes, reservas y notificaciones vía WhatsApp.'
              : 'Automate customer interactions, bookings, and notifications via WhatsApp.',
          },
        },
      ],
    },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: isSpanish ? 'Inicio' : 'Home',
        item: `https://luminaaisolutions.co.uk/${locale}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}

