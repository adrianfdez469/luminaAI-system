import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { locales } from '@/i18n';
import '@/styles/globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  title: 'LuminaAI - Intelligent Business Automation',
  description:
    'Transform your business with intelligent automation. Save hours every day on repetitive tasks and focus on what really matters.',
  keywords: ['automation', 'AI', 'business automation', 'workflow automation', 'productivity'],
  authors: [{ name: 'LuminaAI' }],
  openGraph: {
    title: 'LuminaAI - Intelligent Business Automation',
    description: 'Automate the busywork. Get your time back.',
    type: 'website',
    locale: 'en_US',
    siteName: 'LuminaAI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LuminaAI - Intelligent Business Automation',
    description: 'Automate the busywork. Get your time back.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider>{children}</ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

