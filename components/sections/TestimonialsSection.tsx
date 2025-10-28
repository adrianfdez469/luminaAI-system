'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Paper, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';

export default function TestimonialsSection() {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      name: t('testimonial1Name'),
      role: t('testimonial1Role'),
      text: t('testimonial1Text'),
      avatar: 'SJ',
      rating: 5,
    },
    {
      name: t('testimonial2Name'),
      role: t('testimonial2Role'),
      text: t('testimonial2Text'),
      avatar: 'MC',
      rating: 5,
    },
    {
      name: t('testimonial3Name'),
      role: t('testimonial3Role'),
      text: t('testimonial3Text'),
      avatar: 'EW',
      rating: 5,
    },
  ];

  return (
    <Box
      id="testimonials"
      sx={{
        py: { xs: 8, md: 12 },
        background: (theme) =>
          theme.palette.mode === 'light'
            ? 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)'
            : 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
        scrollMarginTop: { xs: '70px', md: '80px' },
      }}
    >
      <Container maxWidth="lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 6, md: 8 } }}>
            <Typography
              component="h2"
              variant="h2"
              sx={{
                fontWeight: 800,
                mb: 2,
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {t('title')}
            </Typography>
            <Typography
              component="p"
              variant="h6"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.2rem' },
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              {t('subtitle')}
            </Typography>
          </Box>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={8}
            sx={{
              mb: { xs: 6, md: 10 },
              borderRadius: 4,
              overflow: 'hidden',
              position: 'relative',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              p: { xs: 2, md: 3 },
            }}
          >
            <Box sx={{ textAlign: 'center', mb: 3 }}>
              <Typography
                variant="h5"
                sx={{
                  color: 'white',
                  fontWeight: 700,
                  fontSize: { xs: '1.2rem', md: '1.5rem' },
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 1,
                }}
              >
                <PlayCircleOutlineIcon sx={{ fontSize: { xs: 28, md: 32 } }} />
                {t('videoTitle')}
              </Typography>
            </Box>

            {/* Video Responsive Container */}
            <Box
              sx={{
                position: 'relative',
                paddingBottom: '56.25%', // 16:9 aspect ratio
                height: 0,
                overflow: 'hidden',
                borderRadius: 2,
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
              }}
            >
              <iframe
                src={t('videoUrl')}
                title={t('videoTitle')}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
              />
              
            </Box>
          </Paper>
        </motion.div>

        {/* Testimonials Grid */}
        {/* <Grid container spacing={{ xs: 3, md: 4 }} alignItems="stretch">
          {testimonials.map((testimonial, index) => (
            <Grid item xs={12} md={4} key={index} sx={{ display: 'flex' }}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                style={{ width: '100%', display: 'flex' }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: { xs: 3, md: 4 },
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    borderRadius: 3,
                    position: 'relative',
                    transition: 'all 0.3s',
                    border: '2px solid',
                    borderColor: 'divider',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      borderColor: 'primary.main',
                    },
                  }}
                >
                  
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      opacity: 0.1,
                    }}
                  >
                    <FormatQuoteIcon sx={{ fontSize: 60 }} />
                  </Box>

                  
                  <Box sx={{ display: 'flex', gap: 0.5, mb: 2 }}>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon
                        key={i}
                        sx={{
                          color: '#FFD700',
                          fontSize: { xs: 20, md: 24 },
                        }}
                      />
                    ))}
                  </Box>

                  
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontSize: { xs: '0.95rem', md: '1rem' },
                      lineHeight: 1.7,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                      flexGrow: 1,
                    }}
                  >
                    "{testimonial.text}"
                  </Typography>

                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 'auto' }}>
                    <Avatar
                      sx={{
                        width: { xs: 48, md: 56 },
                        height: { xs: 48, md: 56 },
                        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        fontWeight: 700,
                        fontSize: { xs: '1rem', md: '1.2rem' },
                      }}
                    >
                      {testimonial.avatar}
                    </Avatar>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 700,
                          fontSize: { xs: '0.95rem', md: '1rem' },
                          color: 'text.primary',
                        }}
                      >
                        {testimonial.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          fontSize: { xs: '0.8rem', md: '0.85rem' },
                        }}
                      >
                        {testimonial.role}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid> */}
      </Container>
    </Box>
  );
}

