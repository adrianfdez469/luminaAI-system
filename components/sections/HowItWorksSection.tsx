'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SearchIcon from '@mui/icons-material/Search';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import BuildIcon from '@mui/icons-material/Build';
import TuneIcon from '@mui/icons-material/Tune';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      icon: <SearchIcon sx={{ fontSize: 48 }} />,
      title: t('step1Title'),
      description: t('step1Desc'),
      color: '#6366F1',
    },
    {
      icon: <DesignServicesIcon sx={{ fontSize: 48 }} />,
      title: t('step2Title'),
      description: t('step2Desc'),
      color: '#EC4899',
    },
    {
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      title: t('step3Title'),
      description: t('step3Desc'),
      color: '#8B5CF6',
    },
    {
      icon: <TuneIcon sx={{ fontSize: 48 }} />,
      title: t('step4Title'),
      description: t('step4Desc'),
      color: '#10B981',
    },
  ];

  return (
    <Box id="how-it-works" sx={{ py: 10, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography variant="h2" sx={{ mb: 2, fontWeight: 700 }}>
              {t('title')}
            </Typography>
            <Typography variant="h6" color="text.secondary">
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4} sx={{ position: 'relative' }}>
          {/* Connecting line for desktop */}
          <Box
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              top: '50%',
              left: '10%',
              right: '10%',
              height: 2,
              backgroundColor: 'primary.main',
              opacity: 0.2,
              zIndex: 0,
            }}
          />

          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={3} key={index} sx={{ position: 'relative', zIndex: 1 }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    height: '100%',
                    textAlign: 'center',
                    border: '2px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    '&:hover': {
                      borderColor: step.color,
                      transform: 'scale(1.05)',
                      boxShadow: 4,
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: step.color,
                      color: 'white',
                      margin: '0 auto',
                      mb: 2,
                      boxShadow: `0 8px 24px ${step.color}40`,
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography variant="h6" sx={{ mb: 2, fontWeight: 700, color: step.color }}>
                    {step.title}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

