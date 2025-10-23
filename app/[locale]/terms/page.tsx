import React from 'react';
import { Box, Container, Typography, Paper } from '@mui/material';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations('termsOfService');

  return (
    <Box>
      <Header />
      <main>
        <Box
          sx={{
            py: { xs: 6, md: 10 },
            backgroundColor: 'background.default',
            minHeight: '70vh',
          }}
        >
          <Container maxWidth="md">
            <Paper
              elevation={2}
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 4,
                  fontSize: { xs: '2rem', md: '3rem' },
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('title')}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontSize: { xs: '1rem', md: '1.1rem' },
                  lineHeight: 1.8,
                  color: 'text.secondary',
                }}
              >
                {t('content')}
              </Typography>
            </Paper>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}

