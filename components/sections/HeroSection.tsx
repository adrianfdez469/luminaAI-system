'use client';

import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function HeroSection() {
  const t = useTranslations('hero');
  const theme = useTheme();

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper function to render text with bold parts between asterisks
  const renderTextWithBold = (text: string) => {
    const parts = text.split('*');
    return parts.map((part, index) => {
      // Odd indices are between asterisks, so they should be bold
      if (index % 2 === 1) {
        return (
          <Box
            key={index}
            component="span"
            sx={{ fontWeight: 700 }}
          >
            {part}
          </Box>
        );
      }
      return <React.Fragment key={index}>{part}</React.Fragment>;
    });
  };


  return (
    <Box
      id="home"
      sx={{
        minHeight: { xs: '85vh', md: '90vh' },
        display: 'flex',
        alignItems: 'center',
        pt: { xs: 8, md: 0 },
        pb: { xs: 6, md: 0 },
        position: 'relative',
        overflow: 'hidden',
        backgroundImage: 'url(/images/hero-bg.avif)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        // Dark overlay for better text contrast
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            theme.palette.mode === 'light'
              ? 'linear-gradient(135deg, rgba(102, 126, 234, 0.92) 0%, rgba(118, 75, 162, 0.92) 100%)'
              : 'linear-gradient(135deg, rgba(30, 41, 59, 0.95) 0%, rgba(15, 23, 42, 0.95) 100%)',
          zIndex: 1,
        },
        // Additional gradient overlay for depth
        '&::after': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.2) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.2) 0%, transparent 50%)',
          zIndex: 2,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 3 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                mb: { xs: 2, md: 3 },
                fontWeight: 800,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3.5rem', lg: '4.5rem' },
                textShadow: '0 4px 20px rgba(0,0,0,0.5), 0 2px 8px rgba(0,0,0,0.3)',
                lineHeight: { xs: 1.2, md: 1.1 },
              }}
            >
              {t('title')}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: { xs: 1.5, md: 2 },
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: 1.6 },
                textAlign: { xs: 'center', sm: 'left' },
                px: { xs: 2, sm: 0 },
                textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              {renderTextWithBold(t('subtitle'))}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: { xs: 1.5, md: 2 },
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: 1.6 },
                textAlign: { xs: 'center', sm: 'left' },
                px: { xs: 2, sm: 0 },
                textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              {renderTextWithBold(t('subtitle2'))}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: { xs: 3, md: 5 },
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.3rem', lg: '1.5rem' },
                fontWeight: 400,
                lineHeight: { xs: 1.5, md: 1.6 },
                textAlign: { xs: 'center', sm: 'left' },
                px: { xs: 2, sm: 0 },
                textShadow: '0 2px 12px rgba(0,0,0,0.4), 0 1px 4px rgba(0,0,0,0.3)',
              }}
            >
              {renderTextWithBold(t('subtitle3'))}
            </Typography>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={handleCTAClick}
                startIcon={<RocketLaunchIcon />}
                sx={{
                  py: { xs: 1.5, md: 2 },
                  px: { xs: 3, md: 4 },
                  fontSize: { xs: '1rem', md: '1.2rem' },
                  backgroundColor: 'white',
                  color: 'primary.main',
                  fontWeight: 700,
                  boxShadow: '0 10px 40px rgba(0,0,0,0.3)',
                  '&:hover': {
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    boxShadow: '0 15px 50px rgba(0,0,0,0.4)',
                  },
                }}
              >
                {t('cta')}
              </Button>
            </motion.div>
          </Box>
        </motion.div>
      </Container>

      {/* Decorative elements with higher z-index */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(236, 72, 153, 0.15)',
          filter: 'blur(60px)',
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.15)',
          filter: 'blur(60px)',
          zIndex: 2,
        }}
      />
    </Box>
  );
}

