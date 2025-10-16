import React from 'react';
import { Box } from '@mui/material';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import AuditSection from '@/components/sections/AuditSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ChatbotWidget from '@/components/ChatbotWidget';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Box>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <AuditSection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </Box>
  );
}

