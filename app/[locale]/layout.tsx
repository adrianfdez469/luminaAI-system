import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale, getTranslations } from 'next-intl/server';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { routing } from '@/i18n/routing';
import StructuredData from '@/components/StructuredData';
import { Analytics } from '@vercel/analytics/next';
import '@/styles/globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'hero' });

  const isSpanish = locale === 'es';
  const baseUrl = 'https://luminaaisolutions.co.uk';

  return {
    title: isSpanish
      ? 'LuminaAI Solutions - Automatización Inteligente para Negocios'
      : 'LuminaAI Solutions - Intelligent Business Automation',
    description: t('description'),
    keywords: isSpanish
      ? [
          'automatización',
          'IA',
          'automatización de negocios',
          'automatización de flujos de trabajo',
          'productividad',
          'chatbots',
          'WhatsApp Business',
          'automatización de correos',
          'inteligencia artificial',
        ]
      : [
          'automation',
          'AI',
          'business automation',
          'workflow automation',
          'productivity',
          'chatbots',
          'WhatsApp Business',
          'email automation',
          'artificial intelligence',
        ],
    authors: [{ name: 'LuminaAI Solutions', url: baseUrl }],
    creator: 'LuminaAI Solutions',
    publisher: 'LuminaAI Solutions',
    alternates: {
      canonical: `${baseUrl}/${locale}`,
      languages: {
        en: `${baseUrl}/en`,
        es: `${baseUrl}/es`,
      },
    },
    openGraph: {
      title: isSpanish
        ? 'LuminaAI Solutions - Automatización Inteligente para Negocios'
        : 'LuminaAI Solutions - Intelligent Business Automation',
      description: t('description'),
      url: `${baseUrl}/${locale}`,
      siteName: 'LuminaAI Solutions',
      type: 'website',
      locale: isSpanish ? 'es_ES' : 'en_US',
      alternateLocale: isSpanish ? 'en_US' : 'es_ES',
      images: [
        {
          url: `${baseUrl}/images/hero-bg.avif`,
          width: 1200,
          height: 630,
          alt: isSpanish ? 'LuminaAI Solutions - Automatización de Negocios' : 'LuminaAI Solutions - Business Automation',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isSpanish
        ? 'LuminaAI Solutions - Automatización Inteligente para Negocios'
        : 'LuminaAI Solutions - Intelligent Business Automation',
      description: t('description'),
      images: [`${baseUrl}/images/hero-bg.avif`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'zfyaJuX8CA75NmVYhYEsjjLrArJIPYpDzKT3o-6uMeA',
    },
  };
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  interactiveWidget: 'resizes-content', // Allow content to resize when keyboard appears on mobile
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Enable static rendering
  setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </head>
      <body>
        <StructuredData />
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}

