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

  return (
    <Box
      id="home"
      sx={{
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        background:
          theme.palette.mode === 'light'
            ? 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
            : 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage:
            'radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          opacity: 0.6,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Box sx={{ textAlign: 'center', color: 'white' }}>
            <Typography
              variant="h1"
              sx={{
                mb: 3,
                fontWeight: 800,
                fontSize: { xs: '2.5rem', md: '4rem', lg: '4.5rem' },
                textShadow: '0 2px 10px rgba(0,0,0,0.2)',
              }}
            >
              {t('title')}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 5,
                maxWidth: '800px',
                mx: 'auto',
                fontSize: { xs: '1.1rem', md: '1.5rem' },
                fontWeight: 400,
                opacity: 0.95,
                lineHeight: 1.6,
              }}
            >
              {t('subtitle')}
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
                  py: 2,
                  px: 4,
                  fontSize: '1.2rem',
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

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(236, 72, 153, 0.2)',
          filter: 'blur(60px)',
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
          background: 'rgba(99, 102, 241, 0.2)',
          filter: 'blur(60px)',
        }}
      />
    </Box>
  );
}

