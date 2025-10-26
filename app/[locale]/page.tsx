import React from 'react';
import { Box } from '@mui/material';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/sections/HeroSection';
import ProblemSection from '@/components/sections/ProblemSection';
import SolutionSection from '@/components/sections/SolutionSection';
import HowItWorksSection from '@/components/sections/HowItWorksSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import AboutSection from '@/components/sections/AboutSection';
import TrustSection from '@/components/sections/TrustSection';
import AuditSection from '@/components/sections/AuditSection';
import OfferSection from '@/components/sections/OfferSection';
import BlogSection from '@/components/sections/BlogSection';
import ContactSection from '@/components/sections/ContactSection';
import NewsletterSection from '@/components/sections/NewsletterSection';
import ChatbotWidget from '@/components/ChatbotWidget';
import ScrollToHash from '@/components/ScrollToHash';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Box>
      <ScrollToHash />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <AboutSection />
        <TrustSection />
        <AuditSection />
        {/* <OfferSection /> */}
        {/* <BlogSection /> */}
        {/* <NewsletterSection /> */}
        <ContactSection />
      </main>
      <Footer />
      <ChatbotWidget />
    </Box>
  );
}

