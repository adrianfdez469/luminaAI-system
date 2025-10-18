'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import SearchIcon from '@mui/icons-material/Search';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import ScheduleIcon from '@mui/icons-material/Schedule';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

export default function AuditSection() {
  const t = useTranslations('audit');

  const benefits = [
    {
      icon: <SearchIcon sx={{ fontSize: 40 }} />,
      title: t('benefit1Title'),
      description: t('benefit1Desc'),
      example: t('benefit1Example'),
      color: '#667eea',
    },
    {
      icon: <PriorityHighIcon sx={{ fontSize: 40 }} />,
      title: t('benefit2Title'),
      description: t('benefit2Desc'),
      color: '#EC4899',
    },
    {
      icon: <ScheduleIcon sx={{ fontSize: 40 }} />,
      title: t('benefit3Title'),
      description: t('benefit3Desc'),
      color: '#8B5CF6',
    },
    {
      icon: <PersonIcon sx={{ fontSize: 40 }} />,
      title: t('benefit4Title'),
      description: t('benefit4Desc'),
      color: '#10B981',
    },
  ];

  const roadmapItems = [
    t('roadmapItem1'),
    t('roadmapItem2'),
    t('roadmapItem3'),
    t('roadmapItem4'),
  ];

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box id="audit" sx={{ py: { xs: 6, md: 10 }, backgroundColor: 'background.default' }}>
      <Container maxWidth="lg">
        {/* Header */}
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
                mb: { xs: 2, md: 3 }, 
                fontWeight: 700,
                fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem', lg: '2.75rem' }
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ 
                maxWidth: '900px', 
                mx: 'auto', 
                lineHeight: 1.6,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
              }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {/* Benefits Grid */}
        <Grid container spacing={{ xs: 3, md: 4 }} sx={{ mb: { xs: 5, md: 8 } }} alignItems="stretch">
          {benefits.map((benefit, index) => (
            <Grid item xs={12} md={6} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: { xs: 3, md: 4 },
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    border: '2px solid',
                    borderColor: 'divider',
                    transition: 'all 0.3s',
                    minHeight: { md: '380px' },
                    '&:hover': {
                      borderColor: benefit.color,
                      boxShadow: 4,
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: { xs: 60, md: 70 },
                      height: { xs: 60, md: 70 },
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: benefit.color,
                      color: 'white',
                      mb: { xs: 2, md: 3 },
                      boxShadow: `0 8px 24px ${benefit.color}40`,
                    }}
                  >
                    {benefit.icon}
                  </Box>

                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: { xs: 1.5, md: 2 }, 
                      fontWeight: 700, 
                      color: benefit.color,
                      fontSize: { xs: '1.25rem', md: '1.5rem' }
                    }}
                  >
                    {benefit.title}
                  </Typography>

                  <Typography 
                    variant="body1" 
                    color="text.secondary" 
                    sx={{ 
                      mb: { xs: 1.5, md: 2 }, 
                      lineHeight: 1.7,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      flexGrow: 1
                    }}
                  >
                    {benefit.description}
                  </Typography>

                  {benefit.example && (
                    <Box
                      sx={{
                        mt: 'auto',
                        p: 2,
                        backgroundColor: 'action.hover',
                        borderRadius: 2,
                        borderLeft: '4px solid',
                        borderColor: benefit.color,
                      }}
                    >
                      <Typography variant="body2" sx={{ fontStyle: 'italic', color: 'text.secondary', fontSize: { xs: '0.85rem', md: '0.9rem' } }}>
                        {benefit.example}
                      </Typography>
                    </Box>
                  )}
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Custom Roadmap Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: { xs: 3, sm: 4, md: 5 },
              mb: { xs: 4, md: 6 },
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative elements */}
            <Box
              sx={{
                position: 'absolute',
                top: -50,
                right: -50,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
                filter: 'blur(40px)',
              }}
            />

            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: { xs: 2, md: 3 }, flexWrap: 'wrap', gap: 1 }}>
                <MapIcon sx={{ fontSize: { xs: 32, md: 40 }, mr: { xs: 1, md: 2 } }} />
                <Typography 
                  variant="h4" 
                  sx={{ 
                    fontWeight: 700,
                    fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' }
                  }}
                >
                  {t('roadmapTitle')}
                </Typography>
              </Box>

              <Typography 
                variant="h6" 
                sx={{ 
                  mb: { xs: 3, md: 4 }, 
                  opacity: 0.95,
                  fontSize: { xs: '1rem', sm: '1.1rem', md: '1.25rem' }
                }}
              >
                {t('roadmapSubtitle')}
              </Typography>

              <Grid container spacing={3}>
                {roadmapItems.map((item, index) => (
                  <Grid item xs={12} sm={6} key={index}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CheckCircleIcon sx={{ mr: 2, fontSize: 28 }} />
                      <Typography variant="body1" sx={{ fontSize: '1.1rem' }}>
                        {item}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Paper>
        </motion.div>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mb: { xs: 3, md: 4 }, px: { xs: 2, sm: 0 } }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleCTAClick}
              startIcon={<CalendarMonthIcon />}
              sx={{
                py: { xs: 1.5, md: 2.5 },
                px: { xs: 3, md: 5 },
                fontSize: { xs: '0.95rem', sm: '1rem', md: '1.1rem' },
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

        {/* Trust Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 3 },
              mx: { xs: 2, sm: 0 },
              backgroundColor: 'action.hover',
              borderLeft: '4px solid',
              borderColor: 'primary.main',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: { xs: 1, md: 2 } }}>
              <InfoOutlinedIcon sx={{ mt: 0.5, color: 'primary.main', flexShrink: 0, fontSize: { xs: 20, md: 24 } }} />
              <Typography 
                variant="body1" 
                color="text.secondary" 
                sx={{ 
                  fontStyle: 'italic', 
                  lineHeight: 1.7,
                  fontSize: { xs: '0.95rem', md: '1rem' }
                }}
              >
                {t('trustNote')}
              </Typography>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
}

