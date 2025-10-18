'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import AssignmentIcon from '@mui/icons-material/Assignment';
import BuildIcon from '@mui/icons-material/Build';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');

  const steps = [
    {
      icon: <PhoneInTalkIcon sx={{ fontSize: 48 }} />,
      title: t('step1Title'),
      description: t('step1Desc'),
      color: '#6366F1',
    },
    {
      icon: <AssignmentIcon sx={{ fontSize: 48 }} />,
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
      icon: <SupportAgentIcon sx={{ fontSize: 48 }} />,
      title: t('step4Title'),
      description: t('step4Desc'),
      color: '#10B981',
    },
  ];

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="how-it-works" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 5, md: 8 }, px: { xs: 2, sm: 0 } }}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: { xs: 1.5, md: 2 }, 
                fontWeight: 700,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' }
              }}
            >
              {t('title')}
            </Typography>
            <Typography 
              variant="h6" 
              color="text.secondary"
              sx={{ fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' } }}
            >
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
                    p: { xs: 2.5, md: 3 },
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
                      width: { xs: 70, md: 80 },
                      height: { xs: 70, md: 80 },
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: step.color,
                      color: 'white',
                      margin: '0 auto',
                      mb: { xs: 1.5, md: 2 },
                      boxShadow: `0 8px 24px ${step.color}40`,
                    }}
                  >
                    {step.icon}
                  </Box>

                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: { xs: 1.5, md: 2 }, 
                      fontWeight: 700, 
                      color: step.color,
                      fontSize: { xs: '1.1rem', md: '1.25rem' }
                    }}
                  >
                    {step.title}
                  </Typography>

                  <Typography 
                    variant="body2" 
                    color="text.secondary"
                    sx={{ fontSize: { xs: '0.9rem', md: '0.95rem' }, lineHeight: 1.6 }}
                  >
                    {step.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 8 }, px: { xs: 2, sm: 0 } }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleCTAClick}
              startIcon={<CalendarMonthIcon />}
              sx={{
                py: { xs: 1.5, md: 2 },
                px: { xs: 3, md: 5 },
                fontSize: { xs: '1rem', md: '1.1rem' },
                fontWeight: 700,
                boxShadow: 4,
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                '&:hover': {
                  boxShadow: 6,
                  background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)',
                },
              }}
            >
              {t('cta')}
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
}

