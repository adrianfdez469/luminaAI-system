import React from 'react';
import { Box, Container, Typography, Paper, Divider, Chip } from '@mui/material';
import { setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Email, LocationOn } from '@mui/icons-material';

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  // Enable static rendering
  setRequestLocale(locale);
  const t = useTranslations('termsOfService');

  // Parse content into sections
  const content = t('content');
  const sections = content.split(/\n\n(?=\d+\.)/);

  const renderSection = (section: string, index: number) => {
    const lines = section.split('\n');
    const title = lines[0];
    const body = lines.slice(1).join('\n');

    // Check if it's a numbered section
    const isNumberedSection = /^\d+\./.test(title);

    if (!isNumberedSection && index === 0) {
      // First section - introduction
      return (
        <Box key={index} sx={{ mb: 4 }}>
          {t.raw('lastUpdated') && (
            <Chip 
              label={t('lastUpdated')} 
              color="primary" 
              variant="outlined"
              sx={{ mb: 3 }}
            />
          )}
          <Typography
            variant="body1"
            sx={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'text.secondary',
            }}
          >
            {body}
          </Typography>
        </Box>
      );
    }

    if (isNumberedSection) {
      return (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: 'primary.main',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            {title}
          </Typography>
          <Box sx={{ pl: { xs: 0, md: 2 } }}>
            {body.split('\n').map((line, lineIndex) => {
              if (!line.trim()) return null;

              // Check for bullet points
              if (line.startsWith('•')) {
                return (
                  <Box
                    key={lineIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      mb: 1,
                      ml: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        mt: 1,
                        mr: 2,
                        flexShrink: 0,
                      }}
                    />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: 'text.secondary',
                      }}
                    >
                      {line.replace('•', '').trim()}
                    </Typography>
                  </Box>
                );
              }

              // Check for contact information
              if (line.includes('@') || line.toLowerCase().includes('email')) {
                return (
                  <Box
                    key={lineIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <Email sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: 'text.secondary',
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                );
              }

              if (line.toLowerCase().includes('address') || line.toLowerCase().includes('dirección')) {
                return (
                  <Box
                    key={lineIndex}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      mb: 1,
                    }}
                  >
                    <LocationOn sx={{ color: 'primary.main', fontSize: 20 }} />
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: '1rem',
                        lineHeight: 1.8,
                        color: 'text.secondary',
                      }}
                    >
                      {line}
                    </Typography>
                  </Box>
                );
              }

              // Regular paragraph
              return (
                <Typography
                  key={lineIndex}
                  variant="body1"
                  sx={{
                    fontSize: '1rem',
                    lineHeight: 1.8,
                    color: 'text.secondary',
                    mb: 1.5,
                  }}
                >
                  {line}
                </Typography>
              );
            })}
          </Box>
          {index < sections.length - 1 && (
            <Divider sx={{ mt: 3, opacity: 0.3 }} />
          )}
        </Box>
      );
    }

    return null;
  };

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
                overflow: 'hidden',
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  fontSize: { xs: '2rem', md: '3rem' },
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {t('title')}
              </Typography>

              <Divider sx={{ mb: 4, mt: 2 }} />

              {sections.map((section, index) => renderSection(section, index))}
            </Paper>
          </Container>
        </Box>
      </main>
      <Footer />
    </Box>
  );
}

