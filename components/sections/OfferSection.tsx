'use client';

import React from 'react';
import { Box, Container, Typography, Button, Grid, Paper, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import BoltIcon from '@mui/icons-material/Bolt';

export default function OfferSection() {
  const t = useTranslations('offer');

  const includes = [
    t('include1'),
    t('include2'),
    t('include3'),
    t('include4'),
  ];

  const handleCTAClick = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Box
      id="offer"
      sx={{
        py: { xs: 6, md: 10 },
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
          top: -100,
          right: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -100,
          left: -100,
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
          filter: 'blur(60px)',
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        {/* Header with Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Box sx={{ textAlign: 'center', mb: { xs: 4, md: 6 } }}>
            <Chip
              icon={<BoltIcon />}
              label="Special Starter Package"
              sx={{
                mb: 3,
                py: 2.5,
                px: 1,
                fontSize: { xs: '0.9rem', md: '1rem' },
                fontWeight: 700,
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: '2px solid rgba(255, 255, 255, 0.4)',
                '& .MuiChip-icon': {
                  color: '#FFD700',
                  fontSize: { xs: 20, md: 24 },
                },
              }}
            />
            <Typography
              variant="h2"
              sx={{
                fontWeight: 800,
                fontSize: { xs: '1.75rem', sm: '2.25rem', md: '2.75rem', lg: '3rem' },
                textShadow: '0 2px 20px rgba(0,0,0,0.3)',
              }}
            >
              {t('title')}
            </Typography>
          </Box>
        </motion.div>

        {/* Main Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Paper
            elevation={8}
            sx={{
              p: { xs: 4, md: 6 },
              mb: { xs: 4, md: 6 },
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              border: '3px solid',
              borderColor: 'rgba(255, 215, 0, 0.5)',
              position: 'relative',
              overflow: 'hidden',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '6px',
                background: 'linear-gradient(90deg, #FFD700, #FFA500, #FFD700)',
              },
            }}
          >
            <Grid container spacing={{ xs: 3, md: 4 }} alignItems="center">
              {/* Price Comparison Side */}
              <Grid item xs={12} md={6}>
                <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      color: 'text.secondary',
                      fontSize: { xs: '0.95rem', md: '1rem' },
                    }}
                  >
                    {t('priceComparison')}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'line-through',
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        fontWeight: 600,
                        opacity: 0.6,
                      }}
                    >
                      £3,000 - £10,000
                    </Typography>
                  </Box>

                  <Box
                    sx={{
                      display: 'inline-block',
                      p: { xs: 2, md: 3 },
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      borderRadius: 3,
                      boxShadow: '0 8px 32px rgba(102, 126, 234, 0.4)',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        color: 'white',
                        fontSize: { xs: '0.75rem', md: '0.85rem' },
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: 1,
                      }}
                    >
                      Starting from
                    </Typography>
                    <Typography
                      variant="h2"
                      sx={{
                        color: 'white',
                        fontWeight: 900,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                        lineHeight: 1,
                        textShadow: '0 2px 10px rgba(0,0,0,0.2)',
                      }}
                    >
                      £500
                    </Typography>
                  </Box>

                  <Typography
                    variant="body2"
                    sx={{
                      mt: 2,
                      color: 'text.secondary',
                      fontSize: { xs: '0.85rem', md: '0.95rem' },
                      fontStyle: 'italic',
                    }}
                  >
                    {t('ourOffer')}
                  </Typography>
                </Box>
              </Grid>

              <Grid item xs={12} md={6}>
                <Divider sx={{ display: { xs: 'block', md: 'none' }, my: 2 }} />
                <Box
                  sx={{
                    p: { xs: 2, md: 3 },
                    backgroundColor: 'success.light',
                    borderRadius: 3,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 2,
                  }}
                >
                  <TrendingUpIcon
                    sx={{
                      fontSize: { xs: 40, md: 48 },
                      color: 'success.dark',
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.15rem' },
                      color: 'success.dark',
                      lineHeight: 1.4,
                    }}
                  >
                    {t('roi')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>

        {/* What's Included - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, md: 5 },
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: 3,
              border: '2px solid rgba(255, 255, 255, 0.25)',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 4, gap: 2 }}>
              <StarIcon sx={{ color: '#FFD700', fontSize: { xs: 28, md: 32 } }} />
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: 'white',
                  fontSize: { xs: '1.5rem', md: '2rem' },
                  textAlign: 'center',
                }}
              >
                {t('includesTitle')}
              </Typography>
              <StarIcon sx={{ color: '#FFD700', fontSize: { xs: 28, md: 32 } }} />
            </Box>

            <Grid container spacing={{ xs: 2, md: 3 }}>
              {includes.map((item, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Box
                      sx={{
                        p: { xs: 2, md: 2.5 },
                        backgroundColor: '#FFFFFF',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        transition: 'all 0.3s',
                        border: '2px solid transparent',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          boxShadow: 4,
                          borderColor: 'success.main',
                        },
                      }}
                    >
                      <CheckCircleIcon
                        sx={{
                          color: '#2e7d32',
                          fontSize: { xs: 28, md: 32 },
                          flexShrink: 0,
                        }}
                      />
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: { xs: '0.95rem', md: '1.05rem' },
                          lineHeight: 1.5,
                          fontWeight: 600,
                          color: '#1a1a1a',
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Paper>
        </motion.div>

        {/* CTA Button */}
        <Box sx={{ textAlign: 'center', mt: { xs: 5, md: 7 } }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            whileHover={{ scale: 1.08, rotate: [0, -1, 1, -1, 0] }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="contained"
              size="large"
              onClick={handleCTAClick}
              startIcon={<BoltIcon />}
              sx={{
                py: { xs: 2, md: 2.5 },
                px: { xs: 5, md: 8 },
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 800,
                background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                color: 'rgba(0, 0, 0, 0.85)',
                textTransform: 'uppercase',
                letterSpacing: 1,
                borderRadius: 3,
                boxShadow: '0 12px 48px rgba(255, 165, 0, 0.5)',
                border: '3px solid rgba(255, 255, 255, 0.9)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #FFA500 0%, #FFD700 100%)',
                  boxShadow: '0 16px 56px rgba(255, 165, 0, 0.7)',
                },
              }}
            >
              {t('cta')}
            </Button>
          </motion.div>
          
          <Typography
            variant="body2"
            sx={{
              mt: 3,
              color: 'rgba(255, 255, 255, 0.9)',
              fontSize: { xs: '0.9rem', md: '1rem' },
              fontStyle: 'italic',
            }}
          >
            ✨ No long-term commitment required • Start small, scale as you grow
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

