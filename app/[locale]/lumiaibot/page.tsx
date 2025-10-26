import React from 'react';
import { Box } from '@mui/material';
import { setRequestLocale } from 'next-intl/server';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ChatbotFullScreen from '@/components/ChatbotFullScreen';

export default function LumiAIBotPage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <ChatbotFullScreen />
      </Box>
      <Footer />
    </Box>
  );
}

